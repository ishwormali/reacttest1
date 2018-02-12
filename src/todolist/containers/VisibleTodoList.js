import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

import {toggleTodo} from '../actions';



const mapStateToProps=(state)=>{
    return {todos:state.todoApp.todos}
}

const mapDispatchToProps=dispatch=>{
    return {
        onTodoClick:id=>{
            console.log('onTodoClick ',id);
             dispatch(toggleTodo(id));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);