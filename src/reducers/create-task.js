import * as consts from '../constants/constants';

const tasks = [
    {id: 0, title: 'Hello'}
];

const CreateTask = (state = tasks, action) => {
  switch (action.type) {
      case consts.ADD_TASK:
          return [
              ...state,
              {
                  id: action.id,
                  title: action.title,
              }
          ];
      default:
          return state
  }
};
export default CreateTask;