import { ClassContext } from "../../context/ClassContextProvider";
import { useContext } from "react";
import "../style.scss";

const TeacherList = () => {
  const { state } = useContext(ClassContext);
  return (
    <div className="component">
      <h2>Teachers:</h2>
      <ul>
        {state.teachers.map((t) => (
          <li key={t.id}>
            Name: {t.name}, Age: {t.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
