import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(createUserDto);

      return user;
    } catch (error) {
      this.handleDBExecptions(error);
      // console.log(error)
    }
  }

  async findAll() {
    const getUsers = await this.userRepository.find();

    return getUsers;
  }

  async findOne(term: string) {
    let user: User;

    if (isUUID(term)) {
      user = await this.userRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.userRepository.createQueryBuilder();
      user = await queryBuilder
        .where('email =:email', {
          email: term,
        })
        .getOne();
    }

    if (!user) {
      throw new BadRequestException(
        `User with email or id ${term}  wasnt found`,
      );
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) {
      throw new BadRequestException(`User with ${id} not found`);
    }
    try {
      await this.userRepository.save(user);
    } catch (error) {
      this.handleDBExecptions(error);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    await this.userRepository.remove(user);

    return;
  }

  private handleDBExecptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check logs');
  }
}
