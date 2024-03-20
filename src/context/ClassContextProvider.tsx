import { ReactNode, createContext, useReducer } from "react";
import {
  Student,
  initialStudents,
  initialTeachers,
  initalCourses,
  Class,
} from "../Types";
import uuid from "react-uuid";

export const initalClass: Class = {
  id: uuid(),
  name: "Frontendutvecklare, React",
  year: "2023",
  subject: "programmering",
  students: initialStudents,
  teachers: initialTeachers,
  courses: initalCourses,
};

export const ClassContext = createContext<InitalClasState>({
  state: initalClass,
  dispatch: () => null,
});

export type InitalClasState = {
  state: Class;
  dispatch: React.Dispatch<Action>;
};

type Action = { type: "AddStudent"; payload: Student };

const reducer = (state: Class, action: Action) => {
  switch (action.type) {
    case "AddStudent":
      return {
        id: state.id,
        name: state.name,
        year: state.year,
        subject: state.subject,
        students: [...state.students, action.payload],
        teachers: state.teachers,
        courses: state.courses,
      };

    default:
      return state;
  }
};

type ClassContextProviderType = {
  children: ReactNode;
};
function ClassContextProvider({ children }: ClassContextProviderType) {
  const [state, dispatch] = useReducer(reducer, initalClass);
  return (
    <ClassContext.Provider value={{ state, dispatch }}>
      {children}
    </ClassContext.Provider>
  );
}

export default ClassContextProvider;