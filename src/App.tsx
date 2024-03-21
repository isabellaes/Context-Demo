import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import ClassList from "./components/class/ClassList";
import "./app.scss";
import TeacherList from "./components/teacher/TeacherList";
import SearchTeacher from "./components/teacher/SearchTeacher";
import FilterTeacher from "./components/teacher/FilterTeacher";
import ClassContextProvider from "./context/ClassContextProvider";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

type NavItem = {
  type: "STUDENT" | "TEACHER" | "COURSES";
};

function App() {
  const [selected, setSelected] = useState({} as NavItem);

  function getContent() {
    switch (selected.type) {
      case "STUDENT":
        return (
          <>
            <StudentForm />
            <StudentList />
          </>
        );

      case "TEACHER":
        return (
          <>
            <SearchTeacher />
            <FilterTeacher />
            <TeacherList />
          </>
        );

      case "COURSES":
        return (
          <>
            <ClassList />
          </>
        );

      default:
        <ClassList />;
        break;
    }
  }
  return (
    <ClassContextProvider>
      <Header />
      <Navbar onClick={setSelected} />
      <div className="app">{getContent()}</div>
    </ClassContextProvider>
  );
}

export default App;
