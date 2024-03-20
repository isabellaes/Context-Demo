import uuid from "react-uuid";

export type Student = {
  id: string;
  name: string;
  age: number;
  courses: Course[];
};

export type Course =
  | {
      type: "teacher";
      id: string;
      name: string;
      finished: boolean;
      teacher: Teacher;
    }
  | {
      type: "student";
      id: string;
      name: string;
      finished: boolean;
      teacher: Teacher;
      grade: string;
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
    type: "teacher",
    id: uuid(),
    name: "Javascript",
    finished: true,
    teacher: initialTeachers[0],
  },
  {
    type: "teacher",
    id: uuid(),
    name: "Databaser",
    finished: false,
    teacher: initialTeachers[1],
  },
  {
    type: "teacher",
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
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
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
  {
    id: uuid(),
    name: "Kim",
    age: 34,
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
  {
    id: uuid(),
    name: "Olle",
    age: 17,
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
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
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
  {
    id: uuid(),
    name: "Klara",
    age: 14,
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
  {
    id: uuid(),
    name: "Hans",
    age: 32,
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
  {
    id: uuid(),
    name: "Jens",
    age: 33,
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
  {
    id: uuid(),
    name: "Kim",
    age: 14,
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
  {
    id: uuid(),
    name: "Bosse",
    age: 32,
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
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
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
  {
    id: uuid(),
    name: "Kim",
    age: 34,
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
  {
    id: uuid(),
    name: "Bosse",
    age: 12,
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
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
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
  {
    id: uuid(),
    name: "Kim",
    age: 34,
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
  {
    id: uuid(),
    name: "Bosse",
    age: 32,
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
  {
    id: uuid(),
    name: "Lisa",
    age: 33,
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
  {
    id: uuid(),
    name: "Kim",
    age: 34,
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
];
