import { useState } from "react";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

const Todo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
    //{ id: 1, title: "제목입니다", content: "내용입니다", isDone: false },
    //{ id: 2, title: "스파르타", content: "할수있다", isDone: false },
  ]);

  // state = 상태
  // setState = 이 상태를 변경시켜주는 함수

  const onAddTodo = () => {
    if (title === "" && content === "") return;
    let newData = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    let copy = [...todo, newData];
    setTodo(copy);
  };

  const onDeleteTodo = (id) => {
    const newArray = todo.filter((td) => td.id !== id);
    setTodo(newArray);
    console.log(id);
  };

  const onFinishTodo = (id) => {
    const idx = todo.findIndex((td) => td.id === id);
    let copy = [...todo];
    copy[idx].isDone = !copy[idx].isDone;
    setTodo(copy);
  };

  return (
    <div>
      <div>My Todo List</div>
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          background: "lightgrey",
          margin: "auto",
        }}
      >
        <h1>제목</h1>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{
            marginRight: "20px",
          }}
        />
        <h1>내용</h1>
        <input
          value={content}
          onChange={(event) => setContent(event.target.value)}
          style={{
            marginRight: "200px",
          }}
        />
        <button onClick={onAddTodo} style={{ background: "lightblue" }}>
          추가하기
        </button>
      </div>

      <br />

      <div>
        <div>
          <h1>working..</h1>
          <div style={{ display: "flex" }}>
            {todo.map((td) =>
              td.isDone === false ? (
                <TodoCard
                  td={td}
                  onDeleteTodo={onDeleteTodo}
                  onFinishTodo={onFinishTodo}
                />
              ) : null
            )}
          </div>
        </div>
        <div>
          <h1>done..</h1>
          <div style={{ display: "flex" }}>
            {todo.map((td) =>
              td.isDone === true ? (
                <TodoCard
                  td={td}
                  onDeleteTodo={onDeleteTodo}
                  onFinishTodo={onFinishTodo}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoCard = (props) => {
  const { td, onDeleteTodo, onFinishTodo } = props;
  return (
    <div
      style={{
        border: "1px solid blue",
        width: "300px",
        height: "180px",
      }}
    >
      <h2>{td.title}</h2>
      <p>{td.content}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => onFinishTodo(td.id)}>완료하기</button>
        <button onClick={() => onDeleteTodo(td.id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default App;
