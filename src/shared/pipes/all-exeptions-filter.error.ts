import { 
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus
} from "@nestjs/common";
import { 
    Request,
    Response
} from 'express';

@Catch()
export class AllExeptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const httpStatus = exception instanceof HttpException ?
            exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        const message = exception instanceof HttpException ?
            exception.getResponse() : (exception as any).message || 'Internal server error';

        const stack = exception instanceof Error ? exception.stack : '';

        console.error('--- ERROR CAPTURADO ---');
        console.error('Fecha/Hora:', new Date().toISOString());
        console.error('Endpoint:', request.url);
        console.error('Método:', request.method);
        console.error('Payload:', JSON.stringify(request.body));
        console.error('Mensaje:', message);
        console.error('Stack:', stack);
        console.error('-----------------------');
        
        response.status(httpStatus).json({
            success: false,
            statusCode: httpStatus,
            message: typeof message === 'string'
                ? message
                : (message as any).message || message,
            error: exception instanceof HttpException
                ? exception.name
                : 'Internal Server Error',
            timestamp: new Date().toDateString(),
            path: request.url
        });
    }
}

