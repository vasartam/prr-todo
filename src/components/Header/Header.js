import './Header.scss';

export const Header = ({ toDo, done }) => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <p>{toDo} more to do, {done} done</p>
    </header>
  );
};
