import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkingHoursServiceBase } from "./base/workingHours.service.base";

@Injectable()
export class WorkingHoursService extends WorkingHoursServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
