let name='Ram';
function CheckEvenOrOdd(num){
  if(num%2===0){
     return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}
  function CheckEvenOddBySwitch(num){
  switch(num3%2)
  {
    case 0:
      return <div>Even</div>
      break;
    case 1:
      return <div>Odd</div>
  }
}
const users=[
  { name:'Ram',age:32},
  { name:'Sham',age:22},
  { name:'Mohan',age:25},
  { name:'Pratap',age:24}
]

let num1=17;
let num2=8
let num3=67;
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p></p>
      <div>
        {
        CheckEvenOrOdd(10)
        } 
        {
          num1%2===0?<div>Even</div>:<div>Odd</div>
        }
        {
          num2%2===0&&<div>Even</div>
        }
        <h4>List of peoples</h4>
        {
          users.map((item,index)=> {return<div key={index}>{item.name}-{item.age}</div>})
        }
        <h4>Switch case</h4>
        {
          CheckEvenOddBySwitch(num3)
        }
        {
          
        }
      </div>
    </div>
  );
}

export default Jsx;