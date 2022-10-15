/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCertificationArgs } from "./CreateCertificationArgs";
import { UpdateCertificationArgs } from "./UpdateCertificationArgs";
import { DeleteCertificationArgs } from "./DeleteCertificationArgs";
import { CertificationFindManyArgs } from "./CertificationFindManyArgs";
import { CertificationFindUniqueArgs } from "./CertificationFindUniqueArgs";
import { Certification } from "./Certification";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { CertificationService } from "../certification.service";

@graphql.Resolver(() => Certification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CertificationResolverBase {
  constructor(
    protected readonly service: CertificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "any",
  })
  async _certificationsMeta(
    @graphql.Args() args: CertificationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Certification])
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "any",
  })
  async certifications(
    @graphql.Args() args: CertificationFindManyArgs
  ): Promise<Certification[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Certification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "own",
  })
  async certification(
    @graphql.Args() args: CertificationFindUniqueArgs
  ): Promise<Certification | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "create",
    possession: "any",
  })
  async createCertification(
    @graphql.Args() args: CreateCertificationArgs
  ): Promise<Certification> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "update",
    possession: "any",
  })
  async updateCertification(
    @graphql.Args() args: UpdateCertificationArgs
  ): Promise<Certification | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "delete",
    possession: "any",
  })
  async deleteCertification(
    @graphql.Args() args: DeleteCertificationArgs
  ): Promise<Certification | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Certification,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
