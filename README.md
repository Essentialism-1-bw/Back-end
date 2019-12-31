# Back-end

API for Essentialism.  An app that allows users to regain control over their choices about where to spend their time and energy - based on their core values.

- [Authentication](#authentication)
  - [Register user](#register-user)
  - [Login](#login)
- [Users](#users)
  - [Get all users](#get-all-users)
  - [Get user](#get-user)
  - [Update user](#update-user)
  - [Delete user](#delete-user)
  - [Get user values](#get-user-values)
  - [Add user value](#add-user-value)
  - [Delete user value](#delete-user-value)
  - [Get user reasons](#get-user-reasons)
  - [Add user reasons](#add-user-reasons)
  - [Update user reasons](#update-user-reasons)
  - [Delete user reasons](#delete-user-reasons)
  - [Get user projects](#get-user-projects)
  - [Add user project](#add-user-project)
  - [Update user project](#update-user-project)
  - [Delete user project](#delete-user-project)
- [Values](#values)
  - [Get all values](#get-all-values)
  - [Get value](#get-value)
  - [Add value](#add-value)
  - [Delete value](#delete-value)


# Authentication

## Register User

```
POST /api/auth/register
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| 					|                                      |

### Parameters


| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email		| String			|  **required** <p>User's email</p>						 	 |
| password	| String			| **required**  <p>User's password</p>					 |
| firstName | String			|  **required** <p>User's first name</p>				 |
| lastName	| String			|  **required** <p>User's last name</p>				 |
| dateOfBirth	| Date			|  **required** <p>User's date of birth</p>			 |
| countryRegion	| String	|  **required** <p>User's date of birth</p>			 |

### Examples

Post user example:

```
   axios.post('https://bw-essentialism.herokuapp.com/api/auth/register', {
    "email": "newuser@email.com",
    "password": "password",
    "firstName": "New",
    "lastName": "User",
    "dateOfBirth": "1845-10-28",
    "countryRegion": "Unknown"
   });
```
### Success Response

Register user success:
```
{
  "id": 3,
  "email": "newuser@email.com",
  "password": "$2a$12$qrBa5IwVb8gDhZvNFHXL0uWWbhB6Cs2FJNTMGvhvBFXhmBEmKZqJe",
  "firstName": "New",
  "lastName": "User",
  "dateOfBirth": "1845-10-28T07:00:00.000Z",
  "countryRegion": "Unknown"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Login

```
POST /api/auth/login
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| 					|                                      |

### Parameters


| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email		| String			|  **required** <p>User's email</p>						 	 |
| password	| String			| **required**  <p>User's password</p>					 |

### Examples

Post user login example:

```
   axios.post('https://bw-essentialism.herokuapp.com/api/auth/login', {
    "email": "newuser@email.com",
    "password": "password",
   });
```
### Success Response

Login user success:
```
{
  "message": "Welcome New",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImlhdCI6MTU3Nzc1MTM1OSwiZXhwIjoxNTc3NzY1NzU5fQ.lWZJDNX_fOxsXaSg59KJARN56MoJtQoasvEmLFMrjyo"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

# Users

## Get All Users

```
GET /api/users
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  |

### Examples

Get users example:

```
   axios.get('https://bw-essentialism.herokuapp.com/api/users');
```
### Success Response

Get users success:
```
[
    {
        "id": 1,
        "email": "john@email.com",
        "password": "$2a$12$KyLBQl9lkPor8ScrAySxquj51q76j9ye8D4WmLnbrLxPI.DB8Xwl6",
        "firstName": "John",
        "lastName": "Galt",
        "dateOfBirth": "1980-12-01T00:00:00.000Z",
        "countryRegion": "United States"
    },
    {
        "id": 2,
        "email": "mary@email.com",
        "password": "$2a$12$ZRyXGQFhDZkOfoy1f5gEOehGAWtIkPqfhoZUqEStshV/c.NXw9fE.",
        "firstName": "Mary",
        "lastName": "Anne",
        "dateOfBirth": "1982-11-14T00:00:00.000Z",
        "countryRegion": "United States"
    }
]
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Get User

```
GET /api/users/:id
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  |

### Examples

Get user example:

```
   axios.get('https://bw-essentialism.herokuapp.com/api/users/1');
```
### Success Response

Get user success:
```
{
    "id": 1,
    "email": "john@email.com",
    "password": "$2a$12$KyLBQl9lkPor8ScrAySxquj51q76j9ye8D4WmLnbrLxPI.DB8Xwl6",
    "firstName": "John",
    "lastName": "Galt",
    "dateOfBirth": "1980-12-01T00:00:00.000Z",
    "countryRegion": "United States"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Update User

```
PUT /api/users/:id
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email		| String			|  **required** <p>User's email</p>						 	 |
| password	| String			| **required**  <p>User's password</p>					 |
| firstName | String			|  **required** <p>User's first name</p>				 |
| lastName	| String			|  **required** <p>User's last name</p>				 |
| dateOfBirth	| Date			|  **required** <p>User's date of birth</p>			 |
| countryRegion	| String	|  **required** <p>User's date of birth</p>			 |

### Examples

Update user example:

```
   axios.put('https://bw-essentialism.herokuapp.com/api/users/1', {
    "email": "john@email.com",
    "password": "newpassword",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-12-01",
    "countryRegion": "Antarctica"
   });
```
### Success Response

Update user success:
```
{
    "id": 1,
    "email": "john@email.com",
    "password": "$2a$12$h6n8FGLq2I.bRbctHar5j.3VRKa1He1wjoSNj/bvqg4VKGGPgJqWu",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-12-01T08:00:00.000Z",
    "countryRegion": "Antarctica"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```
## Delete User

```
DELETE /api/users/:id
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  						 	 |

### Examples

Delete user example:

```
   axios.delete('https://bw-essentialism.herokuapp.com/api/users/1');
```
### Success Response

Delete user success:
```
{
  "message": "User successfully deleted"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Get User Values

```
GET /api/users/:id/values
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  						 	 |

### Examples

Get user values example:

```
   axios.get('https://bw-essentialism.herokuapp.com/api/users/1/values');
```
### Success Response

Get user values success:
```
[
    {
        "user_id": 1,
        "value_id": 1,
        "value_name": "Athleticism"
    },
    {
        "user_id": 1,
        "value_id": 4,
        "value_name": "Creativity"
    },
    {
        "user_id": 1,
        "value_id": 15,
        "value_name": "Sense of Humor"
    }
]
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Add User Value

```
POST /api/users/:id/values
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| value_id | Integer  | <p>The id of the value</p> 				 	 |

### Examples

Add user value example:

```
   axios.post('https://bw-essentialism.herokuapp.com/api/users/1/values', {
     value_id: 2
   });
```
### Success Response

Add user value success:
```
   Currently returns a 500 status message, but the user value is added
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Delete User Value

```
DELETE /api/users/:id/values/:valueId
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none    |        |				 	 |

### Examples

Delete user value example:

```
   axios.delete('https://bw-essentialism.herokuapp.com/api/users/1/values/2');
```
### Success Response

Get user values success:
```
{
    "message": "User value succesfully deleted"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Get User Reasons

```
GET /api/users/:id/reasons
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none    |        |				 	 |

### Examples

Get user reasons example:

```
   axios.get('https://bw-essentialism.herokuapp.com/api/users/reasons');
```
### Success Response

Get user reasons success:
```
  {
      "id": 1,
      "reason": "Just because",
      "user_id": 1
  }
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Add User Reasons

```
POST /api/users/:id/reasons
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| reason  | Text      |	<p>The user's reasons for their values</p> |

### Examples

Add user reason example:
```
   axios.post('https://bw-essentialism.herokuapp.com/api/users/1/reasons', {
     "reason": "For health, wealth and wisdom"
   });
```
### Success Response

Add user reason success:
```
{
    "id": 5,
    "reason": "For health, wealth and wisdom",
    "user_id": 1
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Update User Reasons

```
PUT /api/users/:id/reasons/
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| reason  | Text      |	<p>The user's reasons for their values</p> |

### Examples

Update user reason example:
```
   axios.put('https://bw-essentialism.herokuapp.com/api/users/1/reasons', {
     "reason": "For world domination"
   });
```
### Success Response

Update user reason success:
```
{
    "id": 5,
    "reason": "For world domination",
    "user_id": 1
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Delete User Reasons

```
DELETE /api/users/:id/reasons/:reasonId
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None    |           |     |

### Examples

Delete user reason example:
```
   axios.delete('https://bw-essentialism.herokuapp.com/api/users/1/reasons/5');
```
### Success Response

Delete user reason success:
```
{
    "message": "Reason successfully deleted"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Get User Projects

```
GET /api/users/:id/projects
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None    |           |     |

### Examples

Get user projects example:
```
   axios.get('https://bw-essentialism.herokuapp.com/api/users/1/projects');
```
### Success Response

Get user projects success:
```
[
    {
        "id": 1,
        "name": "Complete an Ironman",
        "user_id": 1
    },
    {
        "id": 2,
        "name": "Get a Senior PM Role",
        "user_id": 1
    },
    {
        "id": 5,
        "name": "New project",
        "user_id": 1
    }
]
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Add User Project

```
POST /api/users/:id/projects
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name    | String    | <p>The name of the user's project</p> |

### Examples

Add user project example:
```
   axios.post('https://bw-essentialism.herokuapp.com/api/users/1/projects', {
     "name": "Complete this README"
   });
```
### Success Response

Add user project success:
```
{
    "id": 6,
    "name": "Complete this README",
    "user_id": 1
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Update User Project

```
PUT /api/users/:id/projects/:projectid
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name    | String    | <p>The name of the user's project</p> |

### Examples

Update user project example:
```
   axios.put('https://bw-essentialism.herokuapp.com/api/users/1/projects/6', {
     "name": "Complete Essentialism Backend"
   });
```
### Success Response

Update user project success:
```
{
    "name": "Complete Essentialism Backend",
    "user_id": "1"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Delete User Project

```
DELETE /api/users/:id/projects/:projectid
```

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization	| String 	| <p>The token given to the user at login</p> |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None    |           |                                      |

### Examples

Delete user project example:
```
   axios.delete('https://bw-essentialism.herokuapp.com/api/users/1/projects/1');
```
### Success Response

Delete user project success:
```
{
    "message": "Project successfully deleted"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

# Values

## Get All Values

```
GET /api/values
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None	  |           |                                      |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  |

### Examples

Get values example:

```
   axios.get('https://bw-essentialism.herokuapp.com/api/values');
```
### Success Response

Get values success:

```
[
    {
        "id": 1,
        "name": "Athleticism"
    },
    {
        "id": 2,
        "name": "Art"
    },
    ...
    {
        "id": 16,
        "name": "Career Success"
    },
    {
        "id": 17,
        "name": "Health"
    }
]
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Get Value

```
GET /api/values/:id
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None	  |           |                                      |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| none		| |  |

### Examples

Get value example:
```
   axios.get('https://bw-essentialism.herokuapp.com/api/values/1');
```
### Success Response

Get value success:
```
{
    "id": 1,
    "name": "Athleticism"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Add Value

```
POST /api/values
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None	  |           |                                      |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Name		| String    | <p>Name of the value</p>  |

### Examples

Add value example:
```
   axios.post('https://bw-essentialism.herokuapp.com/api/values',{
     "name": "Freedom"
   });
```
### Success Response

Add value success:
```
{
    "id": 18,
    "name": "Freedom"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

## Delete Value

```
DELETE /api/values/:id
```
### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None	  |           |                                      |

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| None		|           |   |

### Examples

Delete value example:
```
   axios.delete('https://bw-essentialism.herokuapp.com/api/values/18');
```
### Success Response

Delete value success:
```
{
    "message": "Value successfully deleted"
}
```

### Error Response

Error example:
```
{
  "status": xxx,
  "message": "Some error message"
}
```

