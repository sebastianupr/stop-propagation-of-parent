import { useRef } from "react";
import "./styles.css";

export default function App() {
  const parentRef = useRef({});

  const handleParentClick = () => {
    if (!parentRef.current.stopPropagation) {
      alert("PARENT CLICK");
    } else {
      parentRef.current.stopPropagation = false;
    }
  };

  const handleChildClick = () => {
    if (parentRef.current) {
      parentRef.current.stopPropagation = true;
    }
    alert("CHILD CLICK");
  };

  return (
    <div className="App">
      <h1>Disabled parent clik when clik in child</h1>

      <div className="parent" ref={parentRef} onClick={handleParentClick}>
        <div className="child" onClick={handleChildClick} />
      </div>
    </div>
  );
}
