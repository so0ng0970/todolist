// todolist.js
import uuid from 'react-uuid'
// Actions

const CREATE = 'todolist/CREATE';
const DELETE= 'todolist/DELETE';
const REMOVE = 'my-app/widgets/REMOVE';


const initialState = { todo:{
title:["밥먹기"],
body:["잠자기"],
id:uuid,
isDone:false

}
};

// Action Creators
export function createTodolist(todolist){
  console.log("todo리스트확인",todolist)
     return{type:CREATE,todolist};
}




export function deleteTodolist(todolist_index) {

  return { type:DELETE,todolist_index};
}



export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// Reducer


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
   case CREATE : {
     const new_todos_list = [...state.todo,action.todolist];
   return { todo:new_todos_list }
   
    }


case "todolist/DELETE":{
  return state;
}

    default: return state;
  }
}
