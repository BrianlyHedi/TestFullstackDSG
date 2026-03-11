import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdukDto, UpdateProdukDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProdukService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(merek?: string) {
    const where: Prisma.ProdukWhereInput = {};

    if (merek) {
      where.merek = { contains: merek, mode: 'insensitive' };
    }

    return this.prisma.produk.findMany({
      where,
      orderBy: { id: 'desc' },
    });
  }

  async findOne(id: number) {
    const produk = await this.prisma.produk.findUnique({ where: { id } });
    if (!produk) {
      throw new NotFoundException(`Produk dengan ID ${id} tidak ditemukan`);
    }
    return produk;
  }

  async create(dto: CreateProdukDto) {
    return this.prisma.produk.create({
      data: {
        merek: dto.merek,
        jenis: dto.jenis,
        stok: dto.stok,
        harga: dto.harga,
        keterangan: dto.keterangan ?? '',
      },
    });
  }

  async update(id: number, dto: UpdateProdukDto) {
    await this.findOne(id);
    return this.prisma.produk.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.produk.delete({ where: { id } });
  }
}
