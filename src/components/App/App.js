import { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import Header from '../Header';
import ItemAddForm from '../ItemAddForm';

export class App extends Component {
  todoItemAutoIncrement = 4;

  state = {
    todoItems: [
      {
        id: 1,
        label: 'Drink Coffee',
        important: false,
      },
      {
        id: 2,
        label: 'Build Awesome App',
        important: true,
      },
      {
        id: 3,
        label: 'Have a lunch',
        important: false,
      },
    ],
  };

  addItem = (text) => {
    this.setState(({ todoItems }) => {
      const newItem = {
        id: this.todoItemAutoIncrement++,
        label: text,
        important: false,
      };

      return {
        todoItems: [
          ...todoItems,
          newItem
        ],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoItems }) => {
      const idx = todoItems.findIndex((el) => el.id === id);

      const newArray = [
        ...(todoItems.slice(0, idx)),
        ...(todoItems.slice(idx + 1))
      ];

      return {
        todoItems: newArray,
      };
    });
  };

  render () {
    return (
      <div className="app">
        <Header toDo={1} done={3}/>

        <div className="top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={this.state.todoItems}
          onDeleted={this.deleteItem}
        />

        <ItemAddForm
          onItemAdded={this.addItem}
        />
      </div>
    );
  }
}
