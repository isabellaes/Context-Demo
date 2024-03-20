import { useContext } from "react";
import { ClassContext } from "../../context/ClassContextProvider";
import "../student/studentList.scss";

const ClassList = () => {
  const classes = useContext(ClassContext);
  return (
    <div className="student-list">
      <h2>Class:</h2>
      <p>Name: {classes.state.name}</p>
      <p>Year: {classes.state.year}</p>
      <p>Subject: {classes.state.subject}</p>
      <p>Students: {classes.state.students.length}</p>
      <p>Teachers: {classes.state.teachers.length}</p>
    </div>
  );
};

export default ClassList;
