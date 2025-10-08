import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {

    @IsString()
    username: string;
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    })
    user_password: string;
}
