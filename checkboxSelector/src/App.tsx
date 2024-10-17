import Checkbox from "./Components/Checkbox";
import { list } from "./list";
import { useState } from "react";
function App() {
  const [checkedItems, setCheckedItems] = useState(list.reduce((result:Record<string,boolean>,currentItem)=>{
    result[currentItem.id.toString()] = false
    return result
  },{}));
console.log(checkedItems)

const handleChange = (id:string)=>{
  setCheckedItems(prev=>( {...prev ,[id] : !prev[id]}) ) // use State takes previous state as input to call back  function 
}

const handleSelectAll = () => {
  const allChecked = list.reduce((result: Record<string, boolean>, currentItem) => {
    result[currentItem.id.toString()] = true;
    return result;
  }, {});
  setCheckedItems(allChecked);
  console.log(allChecked);
};
const allChecked = Object.values(checkedItems).every(Boolean) //checking every element is checked or not
  return (
    <div className="flex flex-col  space-y-2  w-screen h-screen items-center justify-center">
     <div className ="flex flex-col ">
     <h1> Checkbox</h1>
      <Checkbox label="selectAll" checked={allChecked} onChange={()=>handleSelectAll()} ></Checkbox>
      <div className="flex flex-col justify-center item-center">
        {list.map((item) => (
          <Checkbox key={item.id} label={item.name} checked={checkedItems[item.id.toString()] }onChange ={()=>handleChange(item.id.toString())}  ></Checkbox>
        ))}
      </div>
     </div>
    </div>
  );
}

export default App;
