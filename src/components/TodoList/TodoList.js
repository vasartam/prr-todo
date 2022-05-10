import './TodoList.scss';
import TodoListItem from '../TodoListItem';

export const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, search }) => {
  let todosFiltered = todos;

  if (search) {
    const searchSanitized = search.toLowerCase();

    todosFiltered = todosFiltered.filter(todo => todo.label.toLowerCase().includes(searchSanitized));
  }

  return (
    todosFiltered.length ? (
      <ul className="todo-list list-group">
        {todosFiltered.map(({ id, ...props }) => (
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
    ) : (
      <p className="todo-list__message">No items matching your search!</p>
    )
  );
};
