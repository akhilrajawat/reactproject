let name= 'Mohan';
function CheckEvenOrOddBySwitch(num){
  switch(num3%2)
  {
    case 0:
      return <div>Even</div>
      break;
      case 1:
        return <div>Odd</div>
  }
}

function CheckEvenOrOdd(num){
if (num % 2 == 0){
  return <div>Even</div>
}let name='Ram';
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
  else {
         return <div>Odd</div>
  }
}

const users=[
  {name: 'MOHAN', age: 25},
  {name: 'RAM', age: 26},
  {name: 'ROHAN', age: 29}
]
let num = 6;
let num2 =5;
let num3 = 67;
function Jsx() {
  return (
    <div>
    <h2>Hello {name} </h2>
    <div>
      {
      CheckEvenOrOdd(6)
      }
      {
      num%2===0 
      ? <div>Even Number</div>
      : <div>Odd Number</div>
      }  

      <h3>If statement</h3> 
        {
          num%2===0&&<div>Even Number</div>
        }
        <h4>LOOP</h4>
        {
          users.map((item,index) =>{
            return <div key={index}>
              {item.name} - {item.age}
            </div>
          })
        }
        
          <h5>Switch case</h5>
       {
          CheckEvenOrOddBySwitch(num3)
       } 
          

         
      </div>
    </div>
  );
}

export default Jsx;


export function Greet(){
  return <h1>Hello Akhil</h1>
}