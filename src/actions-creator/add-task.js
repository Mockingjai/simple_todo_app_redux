import * as consts from '../constants/constants';
let titleID = 0;
const AddTask = (title) => ({
    type: consts.ADD_TASK,
    id: titleID++,
    title,
});
export default AddTask;