import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  //IsIn,
} from 'class-validator';

export class saveClassDto {
  _id: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  //@IsIn(['1', '2'])
  description: string;
}

export class updateClassDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  //@IsIn(['1', '2'])
  description?: string;
}
