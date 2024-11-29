import { IsDate,  IsDefined, IsNumber, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsDefined()
    @IsString()
    name: string;
    @IsDefined()
    @IsNumber()
    goalCount: number;
    @IsDefined()
    birthDate: Date;
}
