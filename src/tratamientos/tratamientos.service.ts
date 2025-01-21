import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TipoTratamiento } from '@prisma/client';

@Injectable()
export class TratamientosService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.tipoTratamiento.findMany();
  }

  async addTratamiento(data: TipoTratamiento) {
    return await this.prisma.tipoTratamiento.create({ data });
  }
}
