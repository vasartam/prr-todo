import {Header} from "../Header/Header";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {TodoList} from "../TodoList/TodoList";

export const App = () => {
    const todoItems = [
        {
            label:'Drink Coffee',
            important: false,
        },
        {
            label:'Build Awesome App',
            important: true,
        },
        {
            label:'Have a lunch',
            important: false,
        },
    ];

    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList todos={todoItems}/>
        </div>
    )
}
