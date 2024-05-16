import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkingHoursService } from "./workingHours.service";
import { WorkingHoursControllerBase } from "./base/workingHours.controller.base";

@swagger.ApiTags("workingHours")
@common.Controller("workingHours")
export class WorkingHoursController extends WorkingHoursControllerBase {
  constructor(protected readonly service: WorkingHoursService) {
    super(service);
  }
}
