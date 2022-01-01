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
            const { Role, DepartmentName } = args.document;
            const role = new RolesAndDepartments({ Role, DepartmentName });
            await role.save();

            return role;
        },
        deleteRoleByRoleName: async (parent: any, args: any) => {
            return await RolesAndDepartments.findOneAndDelete({
                Role: args.role,
            });
        },
        updateRoleByRoleName: async (parent: any, args: any) => {
            return await RolesAndDepartments.findOneAndUpdate(
                { Role: args.role },
                { $set: { DepartmentName: args.departmentList } },
                { new: true },
            );
        },
    },
};
