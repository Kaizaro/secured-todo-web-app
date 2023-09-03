import {ITODO} from "@/pages/todo-list/entities/todo-entity";
import {IDefaultFC} from "@/types/defaultFC";

export interface ITodoCard extends IDefaultFC {
  todo: ITODO;
};
