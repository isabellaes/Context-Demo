import { useContext, useState } from "react";
import { ClassContext } from "../../context/ClassContext";
import "../../components/student/studentList.scss";

const FilterTeacher = () => {
  const [teacher, setTeacher] = useState("");
  const classes = useContext(ClassContext);

  function handleOption(name: string) {
    const course = classes.courses.find((c) => c.name === name);
    if (course) {
      setTeacher(course.teacher.name);
    }
  }

  return (
    <div className="student-list">
      <select onChange={(e) => handleOption(e.target.value)}>
        <option value="">--Please choose an option--</option>
        {classes.courses.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
      <p>{teacher ? `Teacher: ${teacher}` : ""}</p>
    </div>
  );
};

export default FilterTeacher;
