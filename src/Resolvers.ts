import RolesAndDepartments from './Schema/RolesAndDepartments';

const resolvers = {
    Query: {
        healthCheck: () => {
            return "I'm healthy!";
        },
        getAllRoles: async () => {
            const Roles = await RolesAndDepartments.find();

            return Roles;
        },
    },
    Mutation: {
        AddRoleAndDepartments: async (parent: any, args: any) => {
            const { Role, DepartmentName } = args.role;
            const role = new RolesAndDepartments({ Role, DepartmentName });
            await role.save();

            return role;
        },
    },
};

export default resolvers;
