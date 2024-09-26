"use client";

import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask]:[]|any = useState([]);
  const submitHandler = (param: any) => {
    param.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }

const deleteHandler = (idx:any) => {
  let copyArr = [...mainTask]
  copyArr.splice(idx,1)
  setmainTask(copyArr)
}

  let rendering = <h2>No task available</h2>
  if(mainTask.length>0){
    rendering = mainTask.map((value:any,idx:any) => {return(
      <li key={idx} className="flex items-center justify-between mb-5">
      <div className="flex items-center justify-between w-2/3  ">
        <h5 className="text-2xl font-">{value.title}</h5>
        <h6 className="text-lg font-medium">{value.desc}</h6> 
      </div>
      <button className="bg-sky-400 px-5 py-2 text-2xl rounded font-bold text-white" onClick={() => {deleteHandler(idx)}}>Delete</button>
      <button className="bg-sky-400 px-5 py-2 text-2xl rounded font-bold text-white" onClick={() => {deleteHandler(idx)}}>Completed</button>
      </li>
    )})

  }



  return (
    <div>
      <h1 className="bg-sky-900 text-5xl text-white text-center font-extrabold py-3">Ahmed's ToDo List</h1>
      <form onSubmit={submitHandler} >
        <input type="text"
          value={title}
          onChange={(text) => { settitle(text.target.value) }}
          placeholder="Enter title here"
          className="border-4 px-4 py-2 border-zinc-950 m-8 text-2xl font-medium " />

        <input type="text"
          value={desc}
          onChange={(text) => { setdesc(text.target.value) }}
          placeholder="Enter description  here"
          className="border-4 px-4 py-2 border-zinc-950 m-8 text-2xl font-medium" />
        <button className="bg-sky-600 px-5 py-2 text-white text-2xl font-bold rounded m-5">Add task</button>

      </form>
      <hr />
<div className="bg-gray-300 p-8 text-2xl">{rendering}</div>
    </div>
  );
}
