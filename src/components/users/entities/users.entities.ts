import { IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    email: string;
    
    @Column()
    user_password: string;

    @IsOptional()
    @Column({ nullable: true })    
    photo?: string;
    
    @IsOptional()
    @Column({ nullable: true })
    background_image?: string;
    
    @IsOptional()
    @Column({ nullable: true })
    frame?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}