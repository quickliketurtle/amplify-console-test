/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers($id: Int!) {
    deleteCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers($createCustomersInput: CreateCustomersInput!) {
    createCustomers(createCustomersInput: $createCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers($updateCustomersInput: UpdateCustomersInput!) {
    updateCustomers(updateCustomersInput: $updateCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders($id: Int!) {
    deleteOrders(id: $id) {
      id
      customerId
      orderDate
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders($createOrdersInput: CreateOrdersInput!) {
    createOrders(createOrdersInput: $createOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders($updateOrdersInput: UpdateOrdersInput!) {
    updateOrders(updateOrdersInput: $updateOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
