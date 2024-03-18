import uuid from "react-uuid";

type Teacher = {
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
