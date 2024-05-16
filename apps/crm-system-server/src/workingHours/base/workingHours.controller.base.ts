/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WorkingHoursService } from "../workingHours.service";
import { WorkingHoursCreateInput } from "./WorkingHoursCreateInput";
import { WorkingHours } from "./WorkingHours";
import { WorkingHoursFindManyArgs } from "./WorkingHoursFindManyArgs";
import { WorkingHoursWhereUniqueInput } from "./WorkingHoursWhereUniqueInput";
import { WorkingHoursUpdateInput } from "./WorkingHoursUpdateInput";

export class WorkingHoursControllerBase {
  constructor(protected readonly service: WorkingHoursService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkingHours })
  async createWorkingHours(
    @common.Body() data: WorkingHoursCreateInput
  ): Promise<WorkingHours> {
    return await this.service.createWorkingHours({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,
        hours: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkingHours] })
  @ApiNestedQuery(WorkingHoursFindManyArgs)
  async workingHoursItems(
    @common.Req() request: Request
  ): Promise<WorkingHours[]> {
    const args = plainToClass(WorkingHoursFindManyArgs, request.query);
    return this.service.workingHoursItems({
      ...args,
      select: {
        createdAt: true,
        date: true,
        hours: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkingHours })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async workingHours(
    @common.Param() params: WorkingHoursWhereUniqueInput
  ): Promise<WorkingHours | null> {
    const result = await this.service.workingHours({
      where: params,
      select: {
        createdAt: true,
        date: true,
        hours: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WorkingHours })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorkingHours(
    @common.Param() params: WorkingHoursWhereUniqueInput,
    @common.Body() data: WorkingHoursUpdateInput
  ): Promise<WorkingHours | null> {
    try {
      return await this.service.updateWorkingHours({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,
          hours: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WorkingHours })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorkingHours(
    @common.Param() params: WorkingHoursWhereUniqueInput
  ): Promise<WorkingHours | null> {
    try {
      return await this.service.deleteWorkingHours({
        where: params,
        select: {
          createdAt: true,
          date: true,
          hours: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/create-working-hours")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateWorkingHours(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.CreateWorkingHours(body);
  }

  @common.Get("/:id/get-working-hours")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetWorkingHours(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetWorkingHours(body);
  }
}
