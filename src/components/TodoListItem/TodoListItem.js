import './TodoListItem.scss'

export const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  }

  return (
    <span
      className="todo-list-item"
      style={style}
    >
      {label}
    </span>
  )
}
