import { ADD_TODO, DELETE_TODO} from '../constants';
let titleID = 0;
export const newTodo = (title) => ({
    type: ADD_TODO,
    id: titleID++,
    title,
});
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});
// export const openModal = (isOpen) => ({
//     type: MODAL_TOGGLE,
//     isOpen,
// });
