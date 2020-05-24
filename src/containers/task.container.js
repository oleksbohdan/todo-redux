import {connect} from 'react-redux';
import Task from "../components/task/task.component";
import markAsDone from "../action-creators/mark_as_done";
import deleteTask from "../action-creators/delete-task";

const mapDispatchToProps = dispatch => ({
    doneHandler: id => dispatch(markAsDone(id)),
    deleteHandler: id => dispatch(deleteTask(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Task)