import { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import Header from '../Header';

export class App extends Component {
  render () {
    const todoItems = [
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
    ];

    return (
      <div className="app">
        <Header toDo={1} done={3}/>

        <div className="top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={todoItems}
          onDeleted={(id) => {{console.log('Deleted:', id);}}}
        />
      </div>
    );
  }
}
