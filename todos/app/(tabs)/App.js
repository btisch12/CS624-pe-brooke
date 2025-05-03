// todos/app/(tabs)/App.js

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';



import Heading   from '../../components/Heading';
import Input     from '../../components/Input';
import TodoList  from '../../components/TodoList';
import Button  from '../../components/Button';

let todoIndex = 0;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      filter: 'All',   // "All" | "Active" | "Complete"
    };
  }

  // Controlled input handler
  inputChange = inputValue => {
    this.setState({ inputValue });
  };

  // Add a new todo
  submitTodo = () => {
    const { inputValue, todos } = this.state;
    const trimmed = inputValue.trim();
    if (!trimmed) return;     // guard empty

    const newTodo = {
      title: trimmed,
      todoIndex: todoIndex++,
      complete: false,
    };

    this.setState({
      todos: [...todos, newTodo],
      inputValue: '',
    });
  };

  // Toggle complete/incomplete
  toggleComplete = todoIndex => {
    const todos = this.state.todos.map(todo =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    this.setState({ todos });
  };

  // Remove a todo
  deleteTodo = todoIndex => {
    const todos = this.state.todos.filter(t => t.todoIndex !== todoIndex);
    this.setState({ todos });
  };

  // Change the bottom‐tab filter
  setFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { inputValue, todos, filter } = this.state;

    // Compute which todos to show based on filter
    const visibleTodos = todos.filter(todo => {
      if (filter === 'Active')   return !todo.complete;
      if (filter === 'Complete') return  todo.complete;
      return true; // "All"
    });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="always"
        >
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />

          <TodoList
            todos={visibleTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />

          <Button submitTodo={this.submitTodo} />
        </ScrollView>

        {/* Bottom tab bar */}
        <View style={styles.filterBar}>
          {['All', 'Active', 'Complete'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => this.setFilter(tab)}
              style={[
                styles.filterButton,
                filter === tab && styles.filterButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === tab && styles.filterTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fafafa',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  filterButtonActive: {
    borderBottomWidth: 2,
    borderColor: '#333',
  },
  filterText: {
    color: '#666',
    fontSize: 16,
  },
  filterTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
});