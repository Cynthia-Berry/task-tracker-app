import { gql } from "@apollo/client";

export const FETCH_ALL_PROJECTS = gql `
query{
  getAllProject{
        _id
    name
    description
    tasks {
      _id
      description
      assignee {
        _id
        firstName
        lastName
        email
        phoneNumber
        role
        verified
      }
      reporter {
        \t_id
        firstName
        lastName
        email
        phoneNumber
        role
        verified
      }
      dueDate
      priority
      status
    }
    users {
      _id
      firstName
      lastName
      email
      phoneNumber
      role
      verified
    }
   status {
   _id
  }
  }
}
`;
export const FETCH_PROJECT = gql `
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
