import { ACTIONS } from './actions'

export function reducer(state, action){
    switch(action.type){
        case ACTIONS.UNDO_TODO: {
            if (state.prevTodo && state.activeTasks.length > 0 && state.prevTodo.id == state.activeTasks[state.activeTasks.length - 1].id) {
                return {
                    ...state, 
                    activeTasks: state.activeTasks.slice(0, state.activeTasks.length - 1),
                }
            }
            if (state.deleteTodo && (state.activeTasks.length  == 0 || (state.activeTasks.length  > 0 && state.deleteTodo.id != state.activeTasks[state.activeTasks.length - 1].id))) {
                return {
                    ...state, 
                    activeTasks: [...state.activeTasks, state.deleteTodo],
                }
            }
            return state;
        }
        case ACTIONS.RDDO_TODO: {
            if (state.prevTodo) {
                const findTodo = state.activeTasks.find((todo) => todo.id == state.prevTodo.id);
                return {
                    ...state, 
                    activeTasks: findTodo ? state.activeTasks : [...state.activeTasks, state.prevTodo],
                    prevTodo: null
                }
            }
            if (state.deleteTodo) {
                const findTodo = state.activeTasks.find((todo) => todo.id == state.deleteTodo.id);
                return {
                    ...state, 
                    activeTasks: findTodo ? state.activeTasks.slice(0, state.activeTasks.length - 1) : state.activeTasks,
                    deleteTodo: null
                }
            }
            return state;
        }
        case ACTIONS.ADD_TODO:
            const newtodo = newTodo(action.payload.value, action.payload.priority, action.payload.category)
            return {
                ...state,
                activeTasks: [...state.activeTasks, newtodo],
                prevTodo: newtodo,
                deleteTodo: null
            }
        case ACTIONS.DELETE_TODO:
            const deleteTask = state.activeTasks.find((task) => task.id == action.payload.id);
            return {
                ...state,
                activeTasks: state.activeTasks.filter(
                    (task) => task.id !== action.payload.id
                ),
                prevTodo: null,
                deleteTodo: deleteTask,
            }    
        case ACTIONS.COMPLETE_TODO:
            const completedTask = state.activeTasks.find(
              (task) => task.id === action.payload.id
            );
            const completedTaskWithDate = {
              ...completedTask,
              endDate: Date.now(),
            };
            return {
              ...state,
              activeTasks: state.activeTasks.filter(
                (task) => task.id !== action.payload.id
              ),
              completedTasks: [...state.completedTasks, completedTaskWithDate],
              prevTodo: null,
              deleteTodo: null
            };
        case ACTIONS.EDIT_TODO:
            const updatedTasks = state.activeTasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        value: action.payload.newValue
                    };
                }
                return task;
            });
            return {
                ...state,
                activeTasks: updatedTasks,
                prevTodo: null,
                deleteTodo: null
            };
        case ACTIONS.SET_STATE:
            return action.payload;
        default:
            return state;
    }
}

function newTodo(value, priority, category){
    return{
        id: Date.now(),
        value: value,
        priority: priority,
        category: category,
    }
}