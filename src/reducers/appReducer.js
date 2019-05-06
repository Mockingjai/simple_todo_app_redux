import { ADD_TODO, DELETE_TODO } from '../constants';
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
            ...state,
            {
                id: action.id,
                title: action.title,
            }
        ];
        case DELETE_TODO:
            return [...state].filter((item) => item.id !== action.id);
        default:
            return state;
    }
};
export default todos;