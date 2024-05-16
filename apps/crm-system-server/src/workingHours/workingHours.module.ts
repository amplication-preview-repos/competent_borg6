import { Module } from "@nestjs/common";
import { WorkingHoursModuleBase } from "./base/workingHours.module.base";
import { WorkingHoursService } from "./workingHours.service";
import { WorkingHoursController } from "./workingHours.controller";
import { WorkingHoursResolver } from "./workingHours.resolver";

@Module({
  imports: [WorkingHoursModuleBase],
  controllers: [WorkingHoursController],
  providers: [WorkingHoursService, WorkingHoursResolver],
  exports: [WorkingHoursService],
})
export class WorkingHoursModule {}
