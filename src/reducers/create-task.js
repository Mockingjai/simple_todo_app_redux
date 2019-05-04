import * as consts from '../constants/constants';

const initialState = {
  title: '',
};
const CreateTask = (state = initialState, action) => {
  switch (action.type) {
      case consts.ADD_TASK:
          return {
              ...state,
              title: action.title,
          };
      default:
          return {...state}
  }
};
export default CreateTask;