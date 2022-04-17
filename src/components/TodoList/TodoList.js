import {TodoListItem} from "../TodoListItem/TodoListItem";

export const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee"/></li>
            <li><TodoListItem label="Learn React"/></li>
            <li><TodoListItem label="Build Awesome App" important/></li>
        </ul>
    );
}
