import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    #Types

    type RolesAndDepartments {
        id: ID!
        Role: String!
        DepartmentName: [String!]!
    }

    #Queries

    type Query {
        getAllRoles: [RolesAndDepartments]
        getRoleDataByRoleName(role: String!): [RolesAndDepartments]
    }

    #Inputs

    input RoleInput {
        Role: String!
        DepartmentName: [String!]!
    }

    #Mutations

    type Mutation {
        AddRoleAndDepartments(role: RoleInput): RolesAndDepartments
    }
`;
