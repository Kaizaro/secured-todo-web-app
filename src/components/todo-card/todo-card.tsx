import React, {FC} from "react";
import {ITodoCard} from "./todo-card.types";
import './todo-card.styles.css';

const TodoCard: FC<ITodoCard> = ({todo}) => {
  return (
    <div className="todoCard">
      <p className="todoCardLabel">Content: </p>
      <p className="todoCardTODOText">{todo.text}</p>
    </div>
  );
}

export default TodoCard;
