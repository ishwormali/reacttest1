import React from 'react';
import AddTodo from './containers/addTodo';
import TodoList from './containers/VisibleTodoList';

const App=()=>{
    return (
        <div>
            TODO list
            <AddTodo />
            <br/>
            <TodoList />
        </div>
    );
}

export default App;