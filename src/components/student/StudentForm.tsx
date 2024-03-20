import { useContext, useState } from "react";
import { ClassContext } from "../../context/ClassContextProvider";
import uuid from "react-uuid";
import { initialTeachers } from "../../Types";
import "../student/studentList.scss";

const StudentForm = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const { dispatch } = useContext(ClassContext);

  function handleSubmit() {
    dispatch({
      type: "AddStudent",
      payload: {
        id: uuid(),
        name: name,
        age: Number(age),
        courses: [
          {
            type: "student",
            id: uuid(),
            name: "Javascript",
            finished: true,
            teacher: initialTeachers[0],
            grade: "G",
          },
          {
            type: "student",
            id: uuid(),
            name: "Databaser",
            finished: false,
            teacher: initialTeachers[1],
            grade: "-",
          },
          {
            type: "student",
            id: uuid(),
            name: "HTML & CSS",
            finished: true,
            teacher: initialTeachers[2],
            grade: "G",
          },
        ],
      },
    });
  }
  return (
    <div className="student-list">
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        placeholder="Age"
        id="age"
        onChange={(e) => setAge(e.currentTarget.value)}
      />
      <button onClick={handleSubmit}>Add student</button>
    </div>
  );
};

export default StudentForm;
