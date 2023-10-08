const initState = {
    entities: {
        1:{ id: 1, text: 'Deign ui', completed: true, color: 'red' },
        2:{ id: 2, text: 'discover state', completed: false },
        3:{ id: 3, text: 'discover actions', completed: false },
        4:{ id: 4, text: 'implement reducer', completed: false, color: 'blue' },
        5:{ id: 5, text: 'Complete patterns', completed: false, color: 'red' },
}
}

export default function todosReducer(state = initState, action) {
    switch (action.type) {
        case 'todos/todoAdded':
            const todo = action.payload
            return {
                ...state,
                entities: {
                    ...state.entities,
                   [todo.id]:todo
                }
                
            }

        case 'todos/todoToggled':
            const toggledTodoId = action.payload
            let todoToggled=state.entities[toggledTodoId]
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [toggledTodoId]: {
                        ...todoToggled,
                        completed: !todoToggled.completed
                    }
                }
                }
                // ...state,
                // entities: state.entities.map(todo => {
                //     if (todo.id === toggledTodoId) {
                //         return {
                //             ...todo,
                //             completed: !todo.completed
                //         }
                //     }

                //     return todo
                // })
            
        case 'todos/todoDeleted':
            const deletedTodoId = action.payload
            // return {
            //     ...state,
            //     entities: state.entities.filter(todo => todo.id !== deletedTodoId)
            // }
            const entities = { ...state.entities }
            delete entities[deletedTodoId]
            return {
                ...state,
                entities
            }
        default:
            return state
    }
}

export const selectTodos = state => state.todos.entities
export const selectTodosId= state =>Object.keys(state.todos.entities)
export const todoAdded = (text) => ({
    type: 'todos/todoAdded',
    payload: { id: 6, text, completed: false }
})
export const todoDeleted=(id)=>{
    return{
        type:'todos/todoDeleted',
        payload:id
    }
}
export const todoToggled = (todoId) => ({
    type: 'todos/todoToggled',
    payload: todoId
})