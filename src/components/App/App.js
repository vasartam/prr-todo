import { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import Header from '../Header';

export class App extends Component {
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

  onItemDeleted = (id) => {
    this.setState(({todoItems}) => {
      const idx = todoItems.findIndex((el) => el.id === id);

      const newArray = [
        ...(todoItems.slice(0, idx)),
        ...(todoItems.slice(idx + 1))
      ];

      return {
        todoItems: newArray,
      }
    })
  }

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
          onDeleted={this.onItemDeleted}
        />
      </div>
    );
  }
}
