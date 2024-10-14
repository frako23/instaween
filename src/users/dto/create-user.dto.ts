import { Transform } from 'class-transformer';
import { IsEmail, IsIn, IsString, minLength, MinLength } from 'class-validator';
import { Index, Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  @MinLength(3)
  @Transform(({ value }) => value.trim())
  lastname: string;

  @IsEmail()
  @Index({ unique: true })
  @Transform(({ value }) => value.trim())
  email: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsString()
  @IsIn(['men', 'women'])
  gender: string;
}
