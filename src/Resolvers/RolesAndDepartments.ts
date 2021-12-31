import RolesAndDepartments from '../Schemas/RolesAndDepartments';

export const resolvers = {
    Query: {
        getAllRoles: async () => {
            return await RolesAndDepartments.find();
        },
        getRoleDataByRoleName: async (parent: any, args: any) => {
            return await RolesAndDepartments.find({ Role: args.role });
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
