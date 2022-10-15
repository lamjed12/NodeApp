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
import { WhiteTestWhereInput } from "./WhiteTestWhereInput";
import { Type } from "class-transformer";
import { WhiteTestOrderByInput } from "./WhiteTestOrderByInput";

@ArgsType()
class WhiteTestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WhiteTestWhereInput,
  })
  @Field(() => WhiteTestWhereInput, { nullable: true })
  @Type(() => WhiteTestWhereInput)
  where?: WhiteTestWhereInput;

  @ApiProperty({
    required: false,
    type: [WhiteTestOrderByInput],
  })
  @Field(() => [WhiteTestOrderByInput], { nullable: true })
  @Type(() => WhiteTestOrderByInput)
  orderBy?: Array<WhiteTestOrderByInput>;

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

export { WhiteTestFindManyArgs };
