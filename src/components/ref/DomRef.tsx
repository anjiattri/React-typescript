import React, { useEffect, useRef } from "react";

function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!); //NOT NULL

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default DomRef;
