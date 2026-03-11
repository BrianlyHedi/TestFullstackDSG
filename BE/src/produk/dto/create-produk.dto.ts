import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProdukDto {
  @IsNotEmpty({ message: 'Merek produk wajib diisi' })
  @IsString()
  merek: string;

  @IsNotEmpty({ message: 'Jenis produk wajib diisi' })
  @IsString()
  jenis: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Stok harus berupa angka' })
  @Min(0, { message: 'Stok tidak boleh negatif' })
  stok: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'Harga harus berupa angka' })
  @Min(0, { message: 'Harga tidak boleh negatif' })
  harga: number;

  @IsOptional()
  @IsString()
  keterangan?: string;
}
