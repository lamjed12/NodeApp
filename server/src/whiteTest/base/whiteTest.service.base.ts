/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, WhiteTest, User } from "@prisma/client";

export class WhiteTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WhiteTestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestFindManyArgs>
  ): Promise<number> {
    return this.prisma.whiteTest.count(args);
  }

  async findMany<T extends Prisma.WhiteTestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestFindManyArgs>
  ): Promise<WhiteTest[]> {
    return this.prisma.whiteTest.findMany(args);
  }
  async findOne<T extends Prisma.WhiteTestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestFindUniqueArgs>
  ): Promise<WhiteTest | null> {
    return this.prisma.whiteTest.findUnique(args);
  }
  async create<T extends Prisma.WhiteTestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestCreateArgs>
  ): Promise<WhiteTest> {
    return this.prisma.whiteTest.create<T>(args);
  }
  async update<T extends Prisma.WhiteTestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestUpdateArgs>
  ): Promise<WhiteTest> {
    return this.prisma.whiteTest.update<T>(args);
  }
  async delete<T extends Prisma.WhiteTestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WhiteTestDeleteArgs>
  ): Promise<WhiteTest> {
    return this.prisma.whiteTest.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.whiteTest
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
