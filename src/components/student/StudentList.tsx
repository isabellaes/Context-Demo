import { ClassContext } from "../../context/ClassContextProvider";
import { useContext, useEffect, useState } from "react";
import { Student } from "../../Types";
import "../style.scss";
import EditForm from "./EditForm";

const StudentList = () => {
  const [result, setResult] = useState([] as Student[]);
  const { state, dispatch } = useContext(ClassContext);
  const [edit, setEdit] = useState({} as Student);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setResult(state.students);
  }, [state]);

  function handleDelete(id: string) {
    dispatch({
      type: "RemoveStudent",
      payload: id,
    });
  }

  function handleEdit(student: Student) {
    setEdit(student);
    setModalOpen(true);
  }

  function handleChange(checked: boolean, value: string) {
    if (checked && value === "all") {
      setResult(state.students);
    }
    if (checked && value === "minor") {
      const filtered = state.students.filter((s) => s.age < 18);
      setResult(filtered);
    }
    if (checked && value === "adult") {
      const filtered = state.students.filter((s) => s.age > 18);
      setResult(filtered);
    }
  }

  return (
    <div className="component">
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
            <p style={{ fontWeight: "bold" }}>Student:</p>
            Name: {student.name}, Age: {student.age}
            <p style={{ fontWeight: "bold" }}>Courses:</p>
            {student.courses.map((c) => {
              if (c.type === "student") {
                if (c.finished) {
                  return (
                    <p key={c.id}>
                      Namn: {c.name}, Grade: {c.grade}
                    </p>
                  );
                } else {
                  return <p key={c.id}>Namn: {c.name}</p>;
                }
              }
            })}
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(student.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {modalOpen ? (
        <EditForm student={edit} onClose={() => setModalOpen(false)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default StudentList;
