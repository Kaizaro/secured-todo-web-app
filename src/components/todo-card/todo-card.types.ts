import {ITODO} from "@/pages/todo-list/todo-entity";
import {IDefaultFC} from "@/types/defaultFC";

export interface ITodoCard extends IDefaultFC {
  todo: ITODO;
};
