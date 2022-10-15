import { Module } from "@nestjs/common";
import { WhiteTestModuleBase } from "./base/whiteTest.module.base";
import { WhiteTestService } from "./whiteTest.service";
import { WhiteTestController } from "./whiteTest.controller";
import { WhiteTestResolver } from "./whiteTest.resolver";

@Module({
  imports: [WhiteTestModuleBase],
  controllers: [WhiteTestController],
  providers: [WhiteTestService, WhiteTestResolver],
  exports: [WhiteTestService],
})
export class WhiteTestModule {}
