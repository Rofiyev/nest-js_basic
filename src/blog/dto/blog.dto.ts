import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class BlogDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  public readonly title: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  public readonly excerpt: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  public readonly description: string;
}
