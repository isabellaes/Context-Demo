import { useContext, useRef, useState } from "react";
import { ClassContext } from "../../context/ClassContextProvider";
import "../style.scss";

type Teacher = {
  id: string;
  name: string;
  age: number;
};

const SearchTeacher = () => {
  const [searchResult, setSearchresult] = useState([] as Teacher[]);
  const { state } = useContext(ClassContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    if (inputRef.current) {
      const result = state.teachers.filter(
        (t) =>
          t.name.toLocaleLowerCase() ===
          inputRef.current?.value.toLocaleLowerCase()
      );
      if (result) {
        setSearchresult(result);
      }
    }
  }
  return (
    <div className="component">
      <h2>Search teacher by name</h2>
      <input type="text" placeholder="Name..." ref={inputRef} />
      <button onClick={handleSearch}>Search</button>

      <div className="result">
        <ul>
          {searchResult.map((t) => (
            <p>{t.name}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchTeacher;
