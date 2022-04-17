import './App.scss';
import { Header } from '../Header/Header';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { TodoList } from '../TodoList/TodoList';
import { ItemStatusFilter } from '../ItemStatusFilter/ItemStatusFilter';

export const App = () => {
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

      <TodoList todos={todoItems}/>
    </div>
  );
};
