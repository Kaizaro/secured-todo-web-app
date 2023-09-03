import {List} from "@mui/material";
import React from "react";
import './todo-list.styles.css';
import TodoCard from "@/components/todo-card/todo-card";

export default function TodoList() {
  return (
    <div className="todoListContainer">
      <p className="todoListTitle">TODO List</p>
      <List>
        <TodoCard todo={{text: 'ds'}} />
      </List>
    </div>
  );
};
