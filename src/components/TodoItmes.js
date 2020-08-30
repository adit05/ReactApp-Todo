import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItmes extends Component {
    getStyle = () =>{
        return{
            background:'#f4f4f4',

            padding:'10px',

            textDecoration: this.props.todo.completed ? 'line-through' : 'none',

            borderBottom:'1px #ccc dotted'
    }
    }

    
    render() {

        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle()}>
                <p>
                    <input type= "checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnstyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnstyle={
    background:'#008000',
    padding:'5px 7px',
    borderRadius:'30%',
    cursor:'pointer',
    float:'right',
    color:'#fff'
}
TodoItmes.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
} 

export default TodoItmes

