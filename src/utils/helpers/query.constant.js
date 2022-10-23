export const AUTH_QUERY = `{
	_id
	token
	userId
	createdAt
  updatedAt
}`;

export const USER_QUERY = `{
   _id
   firstName
   lastName
   email
   phoneNumber
   password
   role
   verified
   createdAt
   updatedAt
}`

export const PROJECT_QUERY = `{
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
         	_id
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
    	createdAt
      updatedAt
}`;

export const TASK_QUERY = `{
    _id
    name
    description
    assignee{
       _id
	    firstName
	    lastName
	    email
	    phoneNumber
	    password
	    role
	    verified
    }
    reporter{
       _id
	    firstName
	    lastName
	    email
	    phoneNumber
	    password
	    role
	    verified
		}
    dueDate
    priority
    status
    createdAt
    updatedAt
}`;

export const STATUS_QUERY = `{
	name
	createdAt
  updatedAt
}`;
