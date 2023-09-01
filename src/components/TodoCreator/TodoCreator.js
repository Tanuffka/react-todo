import { useState } from "react";

import "./styles.css";


// const sayHi = (arr) => {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     // const separator = i < arr.length - 1 ? ' ' : '';
//     const separator = i > 0 ? ' ' : '';
//     result = result + separator + arr[i];
//   }

//   return result;
// };
// console.log('Test line...');
// console.log(sayHi(["Hello", "Maksym", "and", "Tanya"]) + 'test');


// ! TASK 01
// Write a function which will return an array with only names whos age is more than 30
// eg: ['Name1', 'Name2', 'Name3']
// const getResult = (arr) => {
  // const result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].age >= 30) {
  //     result.push(arr[i].name);
  //   }
  // }

  // return arr
  //   .filter((elem) => elem.age >= 30)
  //   .map((elem) => elem.name);

  // return arr.reduce((prevValue, currValue) => {
  //   if (currValue.age >= 30) {
  //     prevValue.push(currValue.name);
  //     return prevValue;
  //   }

  //   return prevValue;
  // }, []);
// };

// console.log(getResult([
//   { name: 'Maksym', age: 32 },
//   { name: 'Tanya', age: 27 },
//   { name: 'Nastya', age: 32 },
//   { name: 'Marcel', age: 2 },
//   { name: 'Armen', age: 40 },
// ]));

// ! TASK 2
// Write a function which will return an object with keys as value from array (they should not repeat) 
// and inside value should be number (how much it does repeat in the array)
// Function receives: ['string1', 'string2', 'string1', 'string3']
// Result: {
//   'string1': 2,
//   'string2': 1,
//   'string3': 1
// }
// const getRepeatCount = (arr) => {
//   const counts = arr.reduce((obj, elem) => {
//     obj[elem] = (obj[elem] || 0) + 1;
//     return obj;
//   }, {});
//   return counts;
// };
  
// console.log(getRepeatCount(['string1', 'string2', 'string1', 'string3', 'string1', 'string2']));

export default function TodoCreator({ onCreateTodo }) {
  const [text, setText] = useState("");
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    onCreateTodo(text);
  };

  return (
    <div className="todocreator">
      <input 
        type="text"
        placeholder="Create your todo..."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );

  }
