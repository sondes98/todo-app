import { connect } from 'react-redux';
import React, { useState } from 'react'
import { 
    addTodos, 
    removeTodos, 
    updateTodos, 
    isDoneTodos, 
} from '../redux/reducer';
import TodoItem from './TodoItem';


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        isDoneTodo: (id) => dispatch(isDoneTodos(id)),
    };
};

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={()=>setSort("active")}>In progress</button>
                <button onClick={()=>setSort("completed")}>Done</button>
                <button onClick={()=>setSort("all")}>All</button>
            </div>
            <ul>
                {props.todos.length > 0 && sort === "active" 
                ? props.todos.map((item) => {
                        return (
                            item.isDone === false && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                isDoneTodo={props.isDoneTodo}
                            />
                        )
                        );
                    })
                    : null}
            {/* for completed items*/}
            {props.todos.length > 0 && sort === "completed" 
                ? props.todos.map((item) => {
                        return (
                            item.isDone === true && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                isDoneTodo={props.isDoneTodo}
                            />
                        )
                        );
                    })
                    : null}
            {/*for all items*/}
            {props.todos.length > 0 && sort === "all" 
                ? props.todos.map((item) => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                isDoneTodo={props.isDoneTodo}
                            />
                        
                        );
                    })
                    : null}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
