import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:"Todo Msg",
            complete: false,
        }
    ],
    addTodo :(todo)=>{},
    updateTodo : (id,todo) => {},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}


})

export const UseTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider