/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Certification, User } from "@prisma/client";

export class CertificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CertificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationFindManyArgs>
  ): Promise<number> {
    return this.prisma.certification.count(args);
  }

  async findMany<T extends Prisma.CertificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationFindManyArgs>
  ): Promise<Certification[]> {
    return this.prisma.certification.findMany(args);
  }
  async findOne<T extends Prisma.CertificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationFindUniqueArgs>
  ): Promise<Certification | null> {
    return this.prisma.certification.findUnique(args);
  }
  async create<T extends Prisma.CertificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationCreateArgs>
  ): Promise<Certification> {
    return this.prisma.certification.create<T>(args);
  }
  async update<T extends Prisma.CertificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationUpdateArgs>
  ): Promise<Certification> {
    return this.prisma.certification.update<T>(args);
  }
  async delete<T extends Prisma.CertificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CertificationDeleteArgs>
  ): Promise<Certification> {
    return this.prisma.certification.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.certification
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
