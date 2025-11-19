import { HttpException } from "@nestjs/common";

export function errorHanbler(serviceName: string, error: any): void {
    const errorReference = `Error en ${serviceName}`
    console.error(errorReference, error.message)
    if (error instanceof HttpException) {
        throw error;
    }
}