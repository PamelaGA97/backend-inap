import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Permitir todos los métodos
    res.header('Access-Control-Allow-Headers', '*'); // Permitir cualquier encabezado
    next();
  }
}
