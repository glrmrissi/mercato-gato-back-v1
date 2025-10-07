import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity(`watchlist`)
export class Watchlist 
{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()  
    domain_code: number;

    @Column()
    @ApiProperty()
    name_emp: string;

   @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty()
    entry_date: Date;

    @Column({ type: 'timestamp' })
    @ApiProperty()
    payment_date: Date;

    @Column({ type: 'timestamp' })
    @ApiProperty()
    onboarding_date: Date;

    @Column()
    @ApiProperty()
    number_invoices: number;

    @Column()
    @ApiProperty()
    number_access: number;

    @Column()
    @ApiProperty()
    digital_certificate: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty()
    updated_at: Date;

    @Column()
    @ApiProperty()
    contact_whatsapp: string;
}
