import {
    ArgumentsHost, 
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus() ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        const errotResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            methode: request.method,
            message: status !== HttpStatus.INTERNAL_SERVER_ERROR ? exception.message || exception.message || null : 'Internal Server Error',



        };
        response.status(status).json(errotResponse);
    }
}