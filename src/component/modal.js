import { useEffect } from "react";

function Mymodal({ modal, closeModals }) {
  useEffect(() => {
    setTimeout(() => {
      closeModals();
    }, 2000);
  });
  return (
    <div>
      <p>{modal}</p>
    </div>
  );
}

export default Mymodal;
