/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WhiteTestService } from "../whiteTest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WhiteTestCreateInput } from "./WhiteTestCreateInput";
import { WhiteTestWhereInput } from "./WhiteTestWhereInput";
import { WhiteTestWhereUniqueInput } from "./WhiteTestWhereUniqueInput";
import { WhiteTestFindManyArgs } from "./WhiteTestFindManyArgs";
import { WhiteTestUpdateInput } from "./WhiteTestUpdateInput";
import { WhiteTest } from "./WhiteTest";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WhiteTestControllerBase {
  constructor(
    protected readonly service: WhiteTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "WhiteTest",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WhiteTest })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: WhiteTestCreateInput): Promise<WhiteTest> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        domain: true,
        duration: true,
        id: true,
        language: true,
        name: true,
        technology: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "WhiteTest",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [WhiteTest] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(WhiteTestFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<WhiteTest[]> {
    const args = plainToClass(WhiteTestFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        code: true,
        createdAt: true,
        domain: true,
        duration: true,
        id: true,
        language: true,
        name: true,
        technology: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "WhiteTest",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WhiteTest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: WhiteTestWhereUniqueInput
  ): Promise<WhiteTest | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        code: true,
        createdAt: true,
        domain: true,
        duration: true,
        id: true,
        language: true,
        name: true,
        technology: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "WhiteTest",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WhiteTest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: WhiteTestWhereUniqueInput,
    @common.Body() data: WhiteTestUpdateInput
  ): Promise<WhiteTest | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          domain: true,
          duration: true,
          id: true,
          language: true,
          name: true,
          technology: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "WhiteTest",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WhiteTest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: WhiteTestWhereUniqueInput
  ): Promise<WhiteTest | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          code: true,
          createdAt: true,
          domain: true,
          duration: true,
          id: true,
          language: true,
          name: true,
          technology: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
