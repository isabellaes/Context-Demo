import uuid from "react-uuid";

export type Student = {
  id: string;
  name: string;
  age: number;
  courses: Course[];
};

export type Course = {
  id: string;
  name: string;
  finished: boolean;
  teacher: Teacher;
  grade?: string;
};
export type Teacher = {
  id: string;
  name: string;
  age: number;
};

export const initialTeachers: Teacher[] = [
  {
    id: uuid(),
    name: "Göran",
    age: 32,
  },
  {
    id: uuid(),
    name: "Anna",
    age: 33,
  },
  {
    id: uuid(),
    name: "Olle",
    age: 34,
  },
];

export const initalCourses: Course[] = [
  {
    id: uuid(),
    name: "Javascript",
    finished: true,
    teacher: initialTeachers[0],
  },
  {
    id: uuid(),
    name: "Databaser",
    finished: false,
    teacher: initialTeachers[1],
  },
  {
    id: uuid(),
    name: "HTML & CSS",
    finished: true,
    teacher: initialTeachers[2],
  },
];

export const initialStudents: Student[] = [
  {
    id: uuid(),
    name: "Bosse",
    age: 32,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 34,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Olle",
    age: 17,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Klara",
    age: 14,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Hans",
    age: 32,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Jens",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 14,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Bosse",
    age: 32,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 34,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Bosse",
    age: 12,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 34,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Bosse",
    age: 32,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
    courses: initalCourses,
  },
  {
    id: uuid(),
    name: "Kim",
    age: 34,
    courses: initalCourses,
  },
];
