// TODO: 할 일 항목 하나 씩
// 상태(`todos`)는 `App.jsx`에서 관리합니다

function TodoItem({ todo, onToggle }) {
    return (
      <li>
        <span>{todo.title}</span>
        <button onClick={() => onToggle(todo.id)}>
          {todo.completed ? '취소' : '완료'}
        </button>
        {/* TODO: 삭제 버튼 로직 구현 */}
        <button>삭제</button>
      </li>
    );
  }
  
  export default TodoItem;