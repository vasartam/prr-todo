import { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import Header from '../Header';
import ItemAddForm from '../ItemAddForm';

export class App extends Component {
  todoItemAutoIncrement = 1;

  state = {
    todoItems: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem (label) {
    const newItem = {
      id: this.todoItemAutoIncrement++,
      label: label,
      important: false,
      done: false,
    };

    console.log('New item!', newItem);

    return newItem;
  }

  addItem = (text) => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: [
          ...todoItems,
          this.createTodoItem(text),
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

  onToggleImportant = (id) => {
    console.log('Toggle important:', id);

    // this.setState(({ todoItems }) => {
    //   return {
    //     todoItems: !done,
    //   };
    // });
  };

  onToggleDone = (id) => {
    this.setState(({ todoItems }) => {
      const idx = todoItems.findIndex((el) => el.id === id);

      const oldItem = todoItems[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      };

      const newArray = [
        ...(todoItems.slice(0, idx)),
        newItem,
        ...(todoItems.slice(idx + 1))
      ];

      console.log('Toggle done:', id);
      // console.log('All items:', todoItems);

      return {
        todoItems: newArray,
      };
    });
  };

  // onMarkImportant = () => {
  //   this.setState(({ important }) => {
  //     return {
  //       important: !important,
  //     };
  //   });
  // };

  render () {
    const { todoItems } = this.state;
    const doneCount = todoItems.filter((item) => item.done).length;
    const todoCount = todoItems.length - doneCount;

    return (
      <div className="app">
        <Header toDo={todoCount} done={doneCount}/>

        <div className="top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={this.state.todoItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm
          onItemAdded={this.addItem}
        />
      </div>
    );
  }
}
