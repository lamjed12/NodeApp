import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhiteTestService } from "./whiteTest.service";
import { WhiteTestControllerBase } from "./base/whiteTest.controller.base";

@swagger.ApiTags("whiteTests")
@common.Controller("whiteTests")
export class WhiteTestController extends WhiteTestControllerBase {
  constructor(
    protected readonly service: WhiteTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
