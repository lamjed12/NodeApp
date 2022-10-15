/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CertificationWhereInput } from "./CertificationWhereInput";
import { Type } from "class-transformer";
import { CertificationOrderByInput } from "./CertificationOrderByInput";

@ArgsType()
class CertificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CertificationWhereInput,
  })
  @Field(() => CertificationWhereInput, { nullable: true })
  @Type(() => CertificationWhereInput)
  where?: CertificationWhereInput;

  @ApiProperty({
    required: false,
    type: [CertificationOrderByInput],
  })
  @Field(() => [CertificationOrderByInput], { nullable: true })
  @Type(() => CertificationOrderByInput)
  orderBy?: Array<CertificationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CertificationFindManyArgs };