
let todoId=1;
 export const todos=(state=[],action)=>{
   
    switch(action.type){
        case 'ADD_TODO':
            console.log('add_todo');
            // let newList=state.list.push()
            // state.list.push(payload);
            return [...state.slice(0,state.length),{id:todoId++,text:action.payload.text,completed:false}];

        case 'TOGGLE_TODO':
            
            return state.map(todo =>
                
                (todo.id === action.payload) 
                ? Object.assign({},todo,{completed:!todo.completed})
                : todo
            )
        default:
            return state;
    }
    
}

//  export default todos;