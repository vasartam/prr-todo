import './TodoList.scss';
import TodoListItem from '../TodoListItem';
import { todoItemStatuses } from '../App/App';

export const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, search, currentStatusFilter }) => {
  let todosFiltered = todos;

  if (search) {
    const searchSanitized = search.toLowerCase();

    todosFiltered = todosFiltered.filter(todo => todo.label.toLowerCase().includes(searchSanitized));
  }

  if (currentStatusFilter !== todoItemStatuses['all']) {
    todosFiltered = todosFiltered.filter(todo => {
      if (currentStatusFilter === todoItemStatuses['active']) {
        return !todo.done;
      } else if (currentStatusFilter === todoItemStatuses['done']) {
        return todo.done;
      }

      return true;
    });
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
