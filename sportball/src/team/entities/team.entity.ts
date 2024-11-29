import { IsDefined, IsString } from "class-validator";

export class Team {
    @IsDefined()
    teamID: number;
    @IsDefined()
    @IsString()
    country: string;
}
