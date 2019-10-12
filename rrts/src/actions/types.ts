import { FetchTodoAction, DeleteTodoAction } from "./todo";

export enum ActionTypes {
  fetchTodo,
  deleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction;
