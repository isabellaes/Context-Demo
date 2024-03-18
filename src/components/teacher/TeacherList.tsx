import { ClassContext } from "../../context/ClassContext";
import { useContext } from "react";
import "../student/studentList.scss";

const TeacherList = () => {
  const teachers = useContext(ClassContext);
  return (
    <div className="student-list">
      <h2>Teachers:</h2>
      <ul>
        {teachers.teachers.map((t) => (
          <li key={t.id}>
            Name: {t.name}, Age: {t.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
