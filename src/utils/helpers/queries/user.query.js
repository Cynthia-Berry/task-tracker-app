import { gql } from "@apollo/client";

export const FETCH_ALL_USERS = gql `
query{
  getAllUsers{_id firstName lastName email phoneNumber role verified}
}
`;
export const FETCH_ALL_ADMINS = gql `
query{
  getAllAdmins{
    _id
    firstName
    lastName
    email
    phoneNumber
    role
    verified
  }
}
`;
export const FETCH_ALL_CLIENTS = gql `
query{
  getAllClients{
    _id
    firstName
    lastName
    email
    phoneNumber
    role
    verified
  }
}
`;

export const FETCH_USER = gql `
query{
  getAllUsers(_id: string){_id firstName lastName email phoneNumber role verified}
}
`;
export const FETCH_ADMIN = gql `
query{
  getAllAdmins{
    _id
    firstName
    lastName
    email
    phoneNumber
    role
    verified
  }
}
`;

export const FETCH_CLIENT = gql `
query{
  getAllClients{
    _id
    firstName
    lastName
    email
    phoneNumber
    role
    verified
  }
}
`;
