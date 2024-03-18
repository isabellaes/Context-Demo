import { createContext } from "react";
import uuid from "react-uuid";
import {
  Teacher,
  Student,
  Course,
  initialStudents,
  initialTeachers,
  initalCourses,
} from "../Types";

type Class = {
  id: string;
  name: string;
  year: string;
  subject: string;
  students: Student[];
  teachers: Teacher[];
  courses: Course[];
};

export const initalClass: Class = {
  id: uuid(),
  name: "Frontendutvecklare, React",
  year: "2023",
  subject: "programmering",
  students: initialStudents,
  teachers: initialTeachers,
  courses: initalCourses,
};

export const ClassContext = createContext({} as Class);
