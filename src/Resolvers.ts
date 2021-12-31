import { resolvers as HealthCheckResolvers } from './Resolvers/HealthCheck';
import { resolvers as RolesAndDepartmentsResolvers } from './Resolvers/RolesAndDepartments';

const resolvers = [HealthCheckResolvers, RolesAndDepartmentsResolvers];

export default resolvers;
