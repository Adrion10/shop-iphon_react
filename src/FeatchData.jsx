import { useState } from "react";

const FeatchData = () => {
  const [data, setData] = useSteate();

    fetch("http://localhost:8087/iphone");
    
    .then(response => response.json())
  .then(data => console.log(data));
  return <div>FeatchData</div>;
};

export default FeatchData;
