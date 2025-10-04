import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './components/users/users.service';
import { UsersModule } from './components/users/users.module';

@Module({
  imports: [DashboardModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
