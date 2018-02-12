import React from 'react';
import PropTypes from 'prop-types';

const TodoItem=({completed,text,onClick})=>{
    return (<li  style={{ textDecoration:completed?'line-through':'none'}}
            onClick={()=>{
                if(onClick)
                    onClick();
            }
            }>
            {text}
        </li>);
}

TodoItem.propTypes={
    onClick:PropTypes.func,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
};


export default TodoItem;