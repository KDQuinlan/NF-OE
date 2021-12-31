import { gql } from 'apollo-server-express';

const typeDefs = gql`
    #Types

    type RolesAndDepartments {
        id: ID!
        Role: String!
        DepartmentName: [String!]!
    }

    #Queries

    type Query {
        healthCheck: String!

        getAllRoles: [RolesAndDepartments]
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

export default typeDefs;
