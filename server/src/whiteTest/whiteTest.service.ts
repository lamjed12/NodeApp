import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WhiteTestServiceBase } from "./base/whiteTest.service.base";

@Injectable()
export class WhiteTestService extends WhiteTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
