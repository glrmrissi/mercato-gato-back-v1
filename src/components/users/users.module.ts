import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    imports: [],
    controllers: [],
    exports: [UsersService],
    providers: [UsersService],
})
export class UsersModule {}
