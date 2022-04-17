import {TodoListItem} from "../TodoListItem/TodoListItem";

export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map((item, index) => (
                <li key={index}>
                    <TodoListItem {...item}/>
                </li>
            ))}
        </ul>
    );
}
