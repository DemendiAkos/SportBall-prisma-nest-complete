import { IsDefined, IsString } from "class-validator";

export class CreateTeamDto {
    @IsDefined()
    @IsString()
    country: string;
}
