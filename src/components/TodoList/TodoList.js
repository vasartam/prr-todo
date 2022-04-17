import './TodoList.scss';
import { TodoListItem } from '../TodoListItem/TodoListItem'

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map(({ id, ...props }) => (
        <li className="list-group-item" key={id}>
          <TodoListItem {...props}/>
        </li>
      ))}
    </ul>
  )
}
