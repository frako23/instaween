"use client"
import React from 'react'
import { useRedirect } from '@/app/(app)/hooks/useRedirect';

export function RouteProtected({ children }: { children: React.ReactNode }) {
    useRedirect();
    return <>{children}</>;
}
