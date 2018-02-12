

let nextTodoId=1;

export const addTodo=(text)=>{
    return {
        type:'ADD_TODO',
        payload:{
            id:nextTodoId++,
            text:text
        }
    }
};

export const toggleTodo=(id)=>{
    return {
        type:'TOGGLE_TODO',
        payload:id
    }
}