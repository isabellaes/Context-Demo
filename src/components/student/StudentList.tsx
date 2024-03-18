import { ClassContext } from "../../context/ClassContext";
import { useContext, useEffect, useState } from "react";
import "./studentList.scss";

type Student = {
  id: string;
  name: string;
  age: number;
};

const StudentList = () => {
  const [result, setResult] = useState([] as Student[]);
  const students = useContext(ClassContext);

  useEffect(() => {
    setResult(students.students);
  }, []);

  function handleChange(checked: boolean, value: string) {
    if (checked && value === "all") {
      setResult(students.students);
    }
    if (checked && value === "minor") {
      const filtered = students.students.filter((s) => s.age < 18);
      setResult(filtered);
    }
    if (checked && value === "adult") {
      const filtered = students.students.filter((s) => s.age > 18);
      setResult(filtered);
    }
  }

  return (
    <div className="student-list">
      <h2>Students:</h2>
      <fieldset>
        <legend>Select:</legend>
        <div>
          <label htmlFor="all">All students</label>
          <input
            type="radio"
            name="student"
            id="all"
            value="all"
            onChange={(e) =>
              handleChange(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </div>
        <div>
          <label htmlFor="minor">Age under 18</label>
          <input
            type="radio"
            name="student"
            id="minor"
            value="minor"
            onChange={(e) =>
              handleChange(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </div>
        <div>
          <label htmlFor="adult">Age over 18</label>
          <input
            type="radio"
            name="student"
            id="adult"
            value="adult"
            onChange={(e) =>
              handleChange(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </div>
      </fieldset>
      <ul>
        {result.map((student) => (
          <li key={student.id}>
            Name: {student.name}, Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
