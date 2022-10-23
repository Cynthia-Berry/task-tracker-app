import {gql} from "@apollo/client";

export const LOGIN = gql `
mutation{
  login(email: email, password: password){_id firstName lastName email phoneNumber role verified}
}
`;
