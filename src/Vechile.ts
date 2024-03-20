export type Vechile = {
  name: string;
  color: string;
  type: Car | MotorBike | Boat | Bus;
};

type Car = {
  type: "car";
  doors: number;
  wheels: number;
  towbar: boolean;
  carType: "petrol" | "diesel" | "hybrid" | "electric";
};

type MotorBike =
  | {
      type: "motorbike";
      wheels: 2;
      offroad: boolean;
    }
  | {
      type: "motorbike";
      wheels: 3;
      offroad: false;
    };

type Boat =
  | {
      type: "sailboat";
      engine: boolean;
      sail: number;
    }
  | {
      type: "motorboat";
      engines: number;
      engineType: "inside" | "outside";
    };

type Bus = {
  type: "bus";
  wheels: 6;
  fuel: "diesel";
};

const vechile: Vechile = {
  name: "lkdfja",
  color: "blue",
  type: {
    type: "car",
    doors: 4,
    wheels: 4,
    towbar: true,
    carType: "hybrid",
  },
};

const boat: Vechile = {
  name: "lkdfja",
  color: "blue",
  type: {
    type: "sailboat",
    engine: true,
    sail: 5,
  },
};

export const vechiles: Vechile[] = [
  {
    name: "lkdfja",
    color: "blue",
    type: {
      type: "sailboat",
      engine: true,
      sail: 5,
    },
  },
  {
    name: "lkdfja",
    color: "blue",
    type: {
      type: "car",
      doors: 4,
      wheels: 4,
      towbar: true,
      carType: "hybrid",
    },
  },
];
