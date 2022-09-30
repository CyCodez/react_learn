import * as React from "react";

function useFetch(value) {
  const [state, setstate] = React.useState(value || 0);

  const addition = () => setstate((prev) => prev + 1);

  const subtraction = () => setstate((prev) => prev - 1);

  const reset = () => setstate(value || 0);

  return { state, setstate, addition, subtraction, reset };
}

export default useFetch;
