import {connect} from 'react-redux';
import Todo from "../components/todo/todo.component";

const mapStateToProps = ({tasks}) => ({
    tasks
});


export default connect(
    mapStateToProps,
    null
)(Todo);