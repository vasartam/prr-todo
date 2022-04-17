import {createRoot} from 'react-dom/client';

const Header = () => {
    return <h1>My Todo List</h1>;
}

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
}

const SearchPanel = () => {
    return <input type="search" placeholder="search"/>;
}

const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
