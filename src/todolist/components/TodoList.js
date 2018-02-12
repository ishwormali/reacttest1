import React from 'react';

import TodoItem from './TodoItem';

import PropTypes from 'prop-types';

const TodoList=({todos,onTodoClick}) => {
    return (
        <ul>
            {todos.map(todo=>{
              return <TodoItem key={todo.id} {...todo} onClick={()=>{
                  if(onTodoClick)
                    onTodoClick(todo.id);
                }}  /> 
            })}

        </ul>


    )
}

TodoList.propTypes={
    todos:PropTypes.array,
    onTodoClick:PropTypes.func
}

export default TodoList;