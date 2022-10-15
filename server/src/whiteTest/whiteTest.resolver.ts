import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WhiteTestResolverBase } from "./base/whiteTest.resolver.base";
import { WhiteTest } from "./base/WhiteTest";
import { WhiteTestService } from "./whiteTest.service";

@graphql.Resolver(() => WhiteTest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WhiteTestResolver extends WhiteTestResolverBase {
  constructor(
    protected readonly service: WhiteTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
