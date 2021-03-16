import React, { useRef, useState } from "react";
import { useFocusWithin } from "./hooks";

const SampleInput = ({ text, keyboard }) => {
  const targetRef = useRef(null);
  const isFocusWithin = useFocusWithin(targetRef, { keyboard });
  const [value, setValue] = useState(text);

  return (
    <div
      ref={targetRef}
      style={{
        width: "200px",
        margin: "10px 30px",
        padding: "10px",
        background: `${isFocusWithin ? "lightgreen" : "white"}`,
      }}
    >
      <p>{`focusWithin: ${isFocusWithin ? "true" : "false"}`}</p>
      <input value={value} onChange={({ value }) => setValue(value)}></input>
    </div>
  );
};

function App() {
  return (
    <div>
      <h3
        style={{
          margin: "40px 20px",
          padding: "10px",
          textAlign: "center",
          fontSize: "22px",
        }}
      >
        Demo of useFocusWithin hook
      </h3>

      {/* first demo */}
      <h4
        style={{
          marginTop: "50px",
          marginBottom: "5px",
          padding: "5px 10px",
          textAlign: "center",
        }}
      >
        Focus change on Mouse and Keyboard events.
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SampleInput text="Sample Input 1" />
        <SampleInput text="Sample Input 2" />
        <SampleInput text="Sample Input 3" />
      </div>

      {/* second demo */}
      <h4
        style={{
          marginTop: "50px",
          marginBottom: "5px",
          padding: "5px 10px",
          textAlign: "center",
        }}
      >
        Focus change on Mouse events only.
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SampleInput text="Sample Input 4" keyboard={false} />
        <SampleInput text="Sample Input 5" keyboard={false} />
        <SampleInput text="Sample Input 6" keyboard={false} />
      </div>
    </div>
  );
}

export default App;
