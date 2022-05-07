import './TodoList.scss';
import TodoListItem from '../TodoListItem';

export const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, search }) => {
  const todosFiltered = todos;

  if (search) {

  }

  return (
    <ul className="todo-list list-group">
      {todos.map(({ id, ...props }) => (
        <li className="todo-list__item list-group-item" key={id}>
          <TodoListItem
            {...props}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      ))}
    </ul>
  );
};
