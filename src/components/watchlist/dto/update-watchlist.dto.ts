import { PartialType } from '@nestjs/swagger';
import { CreateWatchlistDto } from './create-watchlist.dto';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateWatchlistDto extends PartialType(CreateWatchlistDto) {
        @IsNotEmpty()
        @IsNumber()
        domain_code: number;

        @IsNotEmpty()
        @IsString()
        name_emp: string;
        
        @IsDate()
        payment_date: Date;
    
        @IsDate()
        onboarding_date: Date;
        
        @IsNumber()
        number_invoices: number;
        
        @IsNumber()
        number_access: number;
        
        @IsBoolean()
        digital_certificate: boolean;
        
        @IsString()
        contact_whatsapp: string;
}
