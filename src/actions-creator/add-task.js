import * as consts from '../constants/constants';

const AddTask = (title) => ({
    type: consts.ADD_TASK,
    title,
});
export default AddTask;