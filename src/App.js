import React, { useState } from "react";
import "./App.css";
import {Item} from "./components/item";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [list, setList] = useState(initList)
  const [editable, setEditable] =  useState(false)

  const removeItemHandle = (e) => {
    //logic goes here
   console.log(e.target.name)
  let filteredData = list.filter(i => i.name !== e.target.name)
   setList(filteredData)
  }

const isEditable = () => {
   setEditable(true)
}

function keyPressHandle(e, i) {
  if (e.key === "Enter") {
    setEditable(!editable);
    const copyList = [...list];
    copyList[i].name = e.target.value;
  }
}
  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {
          list.map((v, k)=>{
            return <Item
            key={`${k}${v.name}${v.calorie}`}
            item={v}
            isEditable = {editable}
            onClick={removeItemHandle}
            onDoubleClick = {isEditable}
            onKeyPress = {keyPressHandle}
            index= {k}
          />
          })
        }
      
      </header>
    </div>
  );
}

export default App;