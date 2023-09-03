import React, {FC} from "react";
import {ITodoCard} from "./todo-card.types";
import './todo-card.styles.css';

const TodoCard: FC<ITodoCard> = ({todo}) => {
  return (
    <div className="todoCard">
      <b className="todoCardLabel">Content: </b>
      <b className="todoCardTODOText">{todo.text}</b>
    </div>
  );
}

export default TodoCard;
