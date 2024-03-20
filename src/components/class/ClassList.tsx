import { useContext } from "react";
import { ClassContext } from "../../context/ClassContextProvider";
import "../style.scss";

const ClassList = () => {
  const { state } = useContext(ClassContext);
  return (
    <div className="component">
      <h2>Class:</h2>
      <p>Name: {state.name}</p>
      <p>Year: {state.year}</p>
      <p>Subject: {state.subject}</p>
      <p>Students: {state.students.length}</p>
      <p>Teachers: {state.teachers.length}</p>
      <p>Courses: {state.courses.length}</p>
    </div>
  );
};

export default ClassList;
