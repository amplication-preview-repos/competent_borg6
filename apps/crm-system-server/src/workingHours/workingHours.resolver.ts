import * as graphql from "@nestjs/graphql";
import { WorkingHoursResolverBase } from "./base/workingHours.resolver.base";
import { WorkingHours } from "./base/WorkingHours";
import { WorkingHoursService } from "./workingHours.service";

@graphql.Resolver(() => WorkingHours)
export class WorkingHoursResolver extends WorkingHoursResolverBase {
  constructor(protected readonly service: WorkingHoursService) {
    super(service);
  }
}
