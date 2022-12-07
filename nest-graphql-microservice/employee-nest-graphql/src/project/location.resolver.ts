// import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
// import { EmployeeService } from 'src/employee/employee.service';
// import { Location } from './entities/location.entity';

// @Resolver((of) => Location)
// export class LocationResolver {
//   constructor(private readonly employeeService: EmployeeService) {}

//   @ResolveField((of) => location)
//   projectLocation(@Parent() location: Location): Promise<Location> {
//     return this.employeeService.forLocation(location.id);
//   }
// }
