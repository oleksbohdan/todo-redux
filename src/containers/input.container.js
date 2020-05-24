import {connect} from 'react-redux';
import InputWithButton from "../components/input-with-button/input-with-button.component";
import addTask from "../action-creators/add-task";

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTask(task))
});

export default connect(
    null,
    mapDispatchToProps
)(InputWithButton)