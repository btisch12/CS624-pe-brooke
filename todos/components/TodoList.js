// todos/app/components/TodoList.js
import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    );
  });

  return (
    <View>
      {todos}
    </View>
  );
};

export default TodoList;

