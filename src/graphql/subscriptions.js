/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomers = /* GraphQL */ `
  subscription OnCreateCustomers {
    onCreateCustomers {
      id
      name
      phone
      email
    }
  }
`;
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
      id
      customerId
      orderDate
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      id
      ins_dt
      upd_dt
      office_id
      first_name
      last_name
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
