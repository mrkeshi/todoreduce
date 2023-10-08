import TodoListItem from './TodoListItem'
import { shallowEqual, useSelector } from 'react-redux'
import { selectTodos, selectTodosId } from './todosSlice'

const TodoList = () => {
    const todosId = useSelector(selectTodosId,shallowEqual)
    
    const renderedListItems =todosId ? todosId.map((id) => {
        
        return <TodoListItem key={id} id={id} />
    }) : null

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
