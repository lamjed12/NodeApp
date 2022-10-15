import { Module } from "@nestjs/common";
import { FormationModuleBase } from "./base/formation.module.base";
import { FormationService } from "./formation.service";
import { FormationController } from "./formation.controller";
import { FormationResolver } from "./formation.resolver";

@Module({
  imports: [FormationModuleBase],
  controllers: [FormationController],
  providers: [FormationService, FormationResolver],
  exports: [FormationService],
})
export class FormationModule {}
