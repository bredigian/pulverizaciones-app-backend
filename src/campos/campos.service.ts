import { Campo } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class CamposService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.campo.findMany();
  }

  async addCampo(data: Campo) {
    return await this.prisma.campo.create({ data });
  }

  async findById(id: UUID) {
    return await this.prisma.campo.findUnique({ where: { id } });
  }
}
