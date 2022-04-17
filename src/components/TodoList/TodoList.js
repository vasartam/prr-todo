export const TodoList = () => {
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
