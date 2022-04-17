import {Header} from "../Header/Header";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {TodoList} from "../TodoList/TodoList";

export const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}
