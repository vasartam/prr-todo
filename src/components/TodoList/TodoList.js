import {TodoListItem} from "../TodoListItem/TodoListItem";

export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(({id, ...props}) => (
                <li key={id}>
                    <TodoListItem {...props}/>
                </li>
            ))}
        </ul>
    );
}
