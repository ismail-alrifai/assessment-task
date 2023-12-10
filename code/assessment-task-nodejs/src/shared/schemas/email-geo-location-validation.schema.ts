import { IsEmail, IsLatitude, IsLongitude, IsString } from "class-validator";

export class EmailGeoLocationValidationSchema {
  @IsString()
  @IsLongitude()
  longitude!: number;

  @IsString()
  @IsLatitude()
  latitude!: number;

  @IsEmail()
  email!: string;
}
