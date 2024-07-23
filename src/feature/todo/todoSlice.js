import { createSlice , nanoid } from "@reduxjs/toolkit";

const initailState =  {
    [{id:1 , text : "hello khan"}]
}


export  const todoSlice = createSlice({
    name: 'todo',
    initailState,
    reducers:{
        addTodo:(state , action)=>{
            const todo ={
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (action , payload)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }

    }
})

export  const {addTodo,removeTodo} = todoSlice.actions 

export default todoSlice.reducer