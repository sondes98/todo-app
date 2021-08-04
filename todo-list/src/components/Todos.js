import React, { useState } from 'react'
import { connect } from "react-redux";
import { addTodos } from '../redux/reducer';
import { BiMessageSquareAdd } from "react-icons/bi";


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {

        setTodo(e.target.value);

    };

    const add = () => {
        props.addTodo({
            id: Math.floor(Math.random()*1000),
            item: todo,
            isDone: false,
        })
        setTodo("");
    }
//console.log("props from store", props);

    return (
        <div className="addTodos">
            <input 
                type="text" 
                onChange={(e)=> handleChange(e)} 
                className="todo-input"
                value={todo}
            />
            <BiMessageSquareAdd className="add-btn"
            style={{ color:'#c5b796'}} onClick={() => add()}/>
        <br />
        </div>
    )
};
export default connect(mapStateToProps,mapDispatchToProps)(Todos);
