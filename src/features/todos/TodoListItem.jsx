import { ReactComponent as TimesSolid } from './times-solid.svg'
import {useDispatch, useSelector} from 'react-redux'
import { selectTodos, todoDeleted, todoToggled } from './todosSlice'

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ id }) => {
    const dispatch=useDispatch()
    const { text, completed, color } = useSelector(state=>state.todos.entities[id])
    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))
        function handelDeleteTodo(){
            dispatch(todoDeleted(id))
        }
        function handelToogle(){
            dispatch(todoToggled(id))
        }
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        onClick={handelToogle}
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}

                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={handelDeleteTodo} >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
