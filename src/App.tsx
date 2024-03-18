import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import { ClassContext, initalClass } from "./context/ClassContext";
import ClassList from "./components/class/ClassList";
import "./app.scss";
import TeacherList from "./components/teacher/TeacherList";
import SearchTeacher from "./components/teacher/SearchTeacher";

function App() {
  return (
    <ClassContext.Provider value={initalClass}>
      <h1>Student-teacher context demo</h1>
      <div className="app">
        <StudentList />
        <TeacherList />
        <ClassList />
        <SearchTeacher />
        <StudentForm />
      </div>
    </ClassContext.Provider>
  );
}

export default App;
