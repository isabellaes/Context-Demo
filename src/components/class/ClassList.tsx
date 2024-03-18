import { useContext } from "react";
import { ClassContext } from "../../context/ClassContext";
import "../student/studentList.scss";

const ClassList = () => {
  const classes = useContext(ClassContext);
  return (
    <div className="student-list">
      <h2>Classes:</h2>
      <p>Name: {classes.name}</p>
      <p>Year: {classes.year}</p>
      <p>Subject: {classes.subject}</p>
      <p>Students: {classes.students.length}</p>
      <p>Teachers: {classes.teachers.length}</p>
    </div>
  );
};

export default ClassList;
