import {createRoot} from 'react-dom/client';

const Header = () => {
    return <h1>My Todo List</h1>;
}

const TodoList = () => {
    const items = [
        'Drink Coffee',
        'Learn React',
        'Build Awesome App',
    ];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
        </ul>
    );
}

const SearchPanel = () => {
    const searchPlaceholder = 'Type here to search';
    const searchStyle = {
        fontSize: '20px',
    };

    return <input type="search" placeholder={searchPlaceholder} style={searchStyle}/>;
}

const App = () => {
    // const isLoggedIn = true;
    // const loginBox = <span>Log in please</span>;
    // const welcomeBox = <span>Welcome Back!</span>;
    // const value = '<script>alert("XSS!");</script>';

    return (
        <div>
            {/*{isLoggedIn ? welcomeBox : loginBox}*/}
            {/*{value}*/}
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
