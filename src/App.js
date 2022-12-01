import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  return (
    <div className="wrap">
      <div className="center">
        <div>
          <input
            type="text"
            placeholder="입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={() => {
              setInputs([...inputs, input]);
              setInput("");
            }}
          >
            추가하기
          </button>
        </div>
        <h1>ToDo List</h1>
      </div>
      <div className="boxs">
        {inputs.map((input, i) => {
          return <Box input={input} key={`input+${i}`} />;
        })}
      </div>
    </div>
  );
}

function Box({ input }) {
  return <div className="box">{input}</div>;
}

export default App;
