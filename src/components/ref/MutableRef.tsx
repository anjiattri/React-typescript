import React, { useEffect, useRef, useState } from "react";

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => stopTimer(); // cleanup function
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => stopTimer()}>stop timer</button>
    </div>
  );
}

export default MutableRef;
