import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import ClassList from "./components/class/ClassList";
import "./app.scss";
import TeacherList from "./components/teacher/TeacherList";
import SearchTeacher from "./components/teacher/SearchTeacher";
import FilterTeacher from "./components/teacher/FilterTeacher";
import ClassContextProvider from "./context/ClassContextProvider";

function App() {
  return (
    <ClassContextProvider>
      <h1>Student-teacher context demo</h1>
      <div className="app">
        <ClassList />
        <SearchTeacher />
        <StudentForm />
        <FilterTeacher />
        <TeacherList />
        <StudentList />
      </div>
    </ClassContextProvider>
  );
}

export default App;
