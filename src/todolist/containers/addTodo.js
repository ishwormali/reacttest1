import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';


class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch({type:'ADD_TODO',payload:{text:this.todotext.value}});
        console.log(this.todotext.value);
    }

    render(){
        return (

            <form onSubmit={this.handleSubmit}>

                <input type="text" ref={(input)=>this.todotext=input} />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default connect()(AddTodo);