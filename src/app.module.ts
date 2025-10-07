import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './components/users/users.service';
import { UsersModule } from './components/users/users.module';
import { HomeModule } from './components/home/home.module';
import { RegisterCatModule } from './components/register-cat/register-cat.module';
import { RegisterModule } from './components/register/register.module';
import { Users } from './components/users/entities/users.entities';


@Module({
  imports: [DashboardModule, AuthModule, UsersModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: String(process.env.DB_PASSWORD),
        database: process.env.DB_NAME,
        entities: [Users],
        autoLoadEntities: true,
        // synchronize: process.env.ENV_DEVELOPMENT === "development",
        // logging: true,
    }),
    HomeModule,
    RegisterCatModule,
    RegisterModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
