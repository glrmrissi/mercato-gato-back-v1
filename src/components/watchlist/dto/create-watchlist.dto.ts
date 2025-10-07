import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateWatchlistDto {
    @IsNotEmpty()
    @IsNumber()
    domain_code: number;

    @IsNotEmpty()
    @IsString()
    name_emp: string;
    
    @IsDate()
    entry_date: Date;

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

    @IsDate()
    updated_at: Date;
    
    @IsString()
    contact_whatsapp: string;
}
