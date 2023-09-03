import {List} from "@mui/material";
import React, {useEffect} from "react";
import './todo-list.styles.css';
import TodoCard from "@/components/todo-card/todo-card";
import {useTODOList} from "./hooks/useTODOList";

export default function TodoList() {
  const {fetchTODOList} = useTODOList();

  useEffect(() => {
    fetchTODOList();
  }, [fetchTODOList]);

  return (
    <div className="todoListContainer">
      <p className="todoListTitle">TODO List</p>
      <List>
        <TodoCard todo={{text: 'ds'}} />
      </List>
    </div>
  );
};
