import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FormationServiceBase } from "./base/formation.service.base";

@Injectable()
export class FormationService extends FormationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
