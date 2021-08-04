import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers:{
    // here we will write our reducer

    //adding todos 
    addTodos:(state,action) => {
        state.push(action.payload);
        return state;
    },
    //removing todos
    removeTodos: (state,action) => {
        return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state,action) => {
        return state.map( todo =>{
            if(todo.id === action.payload.id){
                return {
                    ...todo,
                    item: action.payload.item,    
                };
            }
            return todo;
        })
    }, 
    //completed todos
    isDoneTodos: (state,action) => {
        return state.map( todo =>{
            if(todo.id === action.payload){
                return {
                    ...todo,
                    isDone: true,    
                };
            }
            return todo;
        })
    },  
    },
});

export const {addTodos, removeTodos, updateTodos, isDoneTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
