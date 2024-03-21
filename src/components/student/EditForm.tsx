import { useContext, useState } from "react";
import { Student } from "../../Types";
import { ClassContext } from "../../context/ClassContextProvider";

type EditFormProps = {
  student: Student;
  onClose: () => void;
};

const EditForm = (student: EditFormProps) => {
  const [age, setAge] = useState(student.student.age);
  const [name, setName] = useState(student.student.name);

  const { dispatch } = useContext(ClassContext);

  function handleSubmit() {
    dispatch({
      type: "EditStudent",
      payload: {
        id: student.student.id,
        name: name,
        age: age,
        courses: student.student.courses,
      },
    });
    student.onClose();
  }
  return (
    <div className="edit-modal">
      <div className="component">
        <button onClick={student.onClose}>Close Form</button>
        <h2>Edit student</h2>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          value={age}
          id="age"
          onChange={(e) => setAge(Number(e.currentTarget.value))}
        />
        <button onClick={handleSubmit}>Save Edit</button>
      </div>
    </div>
  );
};

export default EditForm;
