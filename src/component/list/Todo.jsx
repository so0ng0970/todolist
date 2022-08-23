
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import "./style.css";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  const history = useHistory();
  const{title, body } = useSelector((state)=>state.todolist.todo);
  console.log({title, body})



  return (
    
    <div className="todo-container">
     
      <div>
      <button type="button" class="btn btn-link" onClick={() => {
        history.push("/detail");
      }}>상세가기</button>
        <h2 className="todo-title">{title}</h2>
        <div>{body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() =>onEditHandler (todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
     
    </div>
  );
}



export default Todo;
