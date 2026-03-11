import { IsOptional, IsString } from 'class-validator';

export class QueryProdukDto {
  @IsOptional()
  @IsString()
  merek?: string;
}
