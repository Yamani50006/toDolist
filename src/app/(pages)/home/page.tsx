"use client"
import Task from '@/components/Task';
import React, { useState } from 'react'
import { useTaskStore } from '@/store/useStore';
import Counter from '@/components/counter';

export default function HomeList() {
    const [title,setTitle] = useState<string>('');
  const {addTask,Tasks,}=useTaskStore();
    const handleAddTask = () => {
       addTask(title);
      setTitle('');
    }
  return (
    <div className='max-h-screen h-screen px-4 py-2  flex justify-center items-center '>
      <div className='bg-[rgb(30,30,30)]  backdrop-blur-md shadow-lg rounded-md border border-[#1f1f1f1] ' >
        <div className='flex   flex-col items-center p-4 justify-center'>
            <h2 className='text-2xl font-bold text-white'>Home List</h2>
            <div className='w-full flex justify-start items-center mt-10' >
               <Counter/>
            </div>
           
            <div className='flex flex-warp flex-row w-80 lg:w-180 mt-10' >
                <input type="text" placeholder='Adding Task' className='w-full py-2 px-4  rounded-md bg-[#2e2e2e] text-white border border-[#3f3f3f] focus:outline-none' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <button className='ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700' onClick={handleAddTask} >Add</button>
            </div>
            <div className='flex flex-col w-80 lg:w-180 mt-10 overflow-y-auto max-h-96' >
                {Tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
              
            </div>

        </div>
      </div>

    </div>
  )
}
