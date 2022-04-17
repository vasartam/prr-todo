import './TodoList.scss';
import TodoListItem from '../TodoListItem';

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list list-group">
      {todos.map(({ id, ...props }) => (
        <li className="todo-list__item list-group-item" key={id}>
          <TodoListItem {...props}/>
        </li>
      ))}
    </ul>
  );
};
