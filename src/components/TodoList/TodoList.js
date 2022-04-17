import {TodoListItem} from "../TodoListItem/TodoListItem";

export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map((item) => (
                <li key={item.id}>
                    <TodoListItem {...item}/>
                </li>
            ))}
        </ul>
    );
}
