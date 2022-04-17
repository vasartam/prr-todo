import { Header } from '../Header/Header';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { TodoList } from '../TodoList/TodoList';

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
    <div>
      <Header/>
      <SearchPanel/>
      <TodoList todos={todoItems}/>
    </div>
  );
};
