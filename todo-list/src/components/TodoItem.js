import React, { useRef } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDoneAll, MdDeleteSweep, MdDone } from "react-icons/md";



const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, isDoneTodo} = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id, value, e) => {
        if (e.which === 13) {
            //here 13 is key code for enter key 
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;
        }
    };

    
    return (
        <li key={item.id} className="card">
            <textarea 
                ref={inputRef} 
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div className="btns">
            <AiFillEdit 
            style={{ color:'black',marginLeft:'15px'}} 
            onClick={() => changeFocus(item.id)}/>
            
            {item.isDone === false && (
                <MdDoneAll
                style={{ color: '#c5b796'}} 
                onClick={() => isDoneTodo(item.id)}/>
            )}
            
            <MdDeleteSweep 
            style={{ color: '#c5b796'}} 
            onClick={() => removeTodo(item.id)}/>{" "}
            </div>
            {item.isDone && <span className="isDone"><MdDone style={{ color: '#c5b796'}}/></span>}
        </li>
    )
}

export default TodoItem;
