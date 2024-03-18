import { createContext } from "react";
import uuid from "react-uuid";
import { initialStudents } from "./Student";
import { initialTeachers } from "./Teatcher";

type Class = {
  id: string;
  name: string;
  year: string;
  subject: string;
  students: Student[];
  teachers: Teacher[];
};

type Student = {
  id: string;
  name: string;
  age: number;
};

type Teacher = {
  id: string;
  name: string;
  age: number;
};

export const initalClass: Class = {
  id: uuid(),
  name: "Frontendutvecklare, React",
  year: "2023",
  subject: "programmering",
  students: initialStudents,
  teachers: initialTeachers,
};

export const ClassContext = createContext({} as Class);
