import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Success() {
  let history = useHistory();
  const redirect = () => {
    history.push("/");
  };
  useEffect(() => {
    setTimeout(redirect, 1000 * 3);
  });

  return (
    <div>
      <p style={{ textAlign: "center", marginTop: 30, fontSize: 40 }}>
        ALL GOOD!
      </p>
      <p style={{ textAlign: "center", marginTop: 30, fontSize: 20 }}>
        We will contact you in few days
      </p>
    </div>
  );
}

export default Success;
