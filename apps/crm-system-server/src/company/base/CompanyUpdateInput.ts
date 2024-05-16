/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProjectUpdateManyWithoutCompaniesInput } from "./ProjectUpdateManyWithoutCompaniesInput";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  projects?: ProjectUpdateManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutCompaniesInput;
}

export { CompanyUpdateInput as CompanyUpdateInput };
