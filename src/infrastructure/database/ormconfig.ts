import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgresRoot',
  database: 'backinap',
  entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
  synchronize: true,
});
