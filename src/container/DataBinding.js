import React, { useState } from "react"
function DataBinding() {
  const handleChange=(event)=>{
    let value = event.target.value;
    setData({
      ...data,name:value
    });
  }
  const [data,setData] = useState({
    name: "Mohan",
    age: 25,
  });
  return (
    <div>
      <h2>DataBinding</h2>
      <h4>
        One way Binding:{data.name}
        {data.age}
      </h4>
      <div>
        <input type="text" value={data.name} onChange={handleChange}/>
      </div>
    </div>
  );
}
export default DataBinding;
