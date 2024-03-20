import { Vechile } from "../../Vechile";

interface Props {
  vechiles: Vechile[];
}

const VechileList = (props: Props) => {
  return (
    <div>
      <ul>
        {props.vechiles.map((v) => {
          if (v.type.type === "car") {
            return (
              <>
                <p>
                  Name: {v.name}, Color: {v.color}, Vechile: {v.type.type},
                  Doors: {v.type.doors},
                </p>
              </>
            );
          }

          if (v.type.type === "bus") {
            return (
              <p>
                {v.type.fuel}, {v.color}, {v.name}, {v.type.type}
              </p>
            );
          }

          if (v.type.type === "motorbike") {
            return (
              <p>
                {v.color}, {v.type.offroad}
              </p>
            );
          }

          if (v.type.type === "sailboat") {
            return <p>Vechile: {v.type.type}</p>;
          }

          if (v.type.type === "motorboat") {
            return <p>Vechile: {v.type.type}</p>;
          }
        })}
      </ul>
    </div>
  );
};

export default VechileList;
