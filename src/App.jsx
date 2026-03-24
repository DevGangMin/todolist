import "./App.css";

function App() {
  // TODO: State 관리 용 로직

  // TODO: Create
  // 텍스트 입력창과 "추가" 버튼이 있어야 합니다
  // 입력창에 할일을 입력하고 "추가" 버튼을 클릭하면 새로운 할일이 목록에 추가됩니다
  // 추가 후 입력창은 비워져야 합니다
  // 빈 문자열은 추가할 수 없어야 합니다

  // TODO: Update (todos.map 사용)
  // 할 일 목록의 항목에는 "완료" 버튼이 있어야 합니다
  // "완료" 버튼을 누르면 해당 항목이 완료 목록으로 이동합니다
  // 완료 목록의 항목에는 "취소" 버튼이 있어야 합니다
  // "취소" 버튼을 누르면 해당 항목이 다시 할일 목록으로 이동합니다

  // TODO: Delete (todos.filter 사용 - 해당 id를 제외한 새 배열을 set)
  // 각 할일에 "삭제" 버튼이 있어야 합니다
  // "삭제" 버튼을 누르면 해당 할일이 목록에서 제거됩니다
  return (
    <div>
      <h1>Todo List</h1>
      {/* TODO: TodoForm 컴포넌트 배치 */}
      {/* - TodoForm 컴포넌트에 할 일 추가 함수를 props로 전달하여 상태를 변경 */}

      {/* TODO: 할 일 목록 */}
      {/* - 제목 : <h2>할 일 목록</h2>
      - 생성 시간
      - todos.filter를 써서 completed가 false 인 것만 추출하여 TodoList 컴포넌트로 전달
      - props로 '완료/취소 함수' 와 '삭제 함수' 전달 */}

      {/* TODO: 완료 목록 */}
      {/* - 제목 : <h2>완료 목록</h2>
      - 생성 시간
      - todos.filter를 써서 completed가 true 인 것만 추출하여 TodoList 컴포넌트로 전달
      - props로 '완료/취소 함수' 와 '삭제 함수' 전달 */}
    </div>
  );
}

export default App;
