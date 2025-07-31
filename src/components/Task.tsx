"use client"
import { TaskType } from '@/store/useStore'
import React from 'react'
import { useTaskStore } from '@/store/useStore'
import { FaDeleteLeft,FaTrash,FaCreditCard } from 'react-icons/fa6';
import Editing from './editing';


export default function Task({task}: {task: TaskType}) {
    const { complateTask, deleteTask }=useTaskStore();
  return (
    <div className='border-b-gray-600 border-b-2 px-4  h-14 rounded-md shadow-lg  flex items-center justify-between' >
                 <p className={`px-4 py-2 text-white font-medium text-lg mt-3 ${task.completed ? 'line-through' : ''}`}>{task.title}</p>
                 <div className=' flex  gap-5 items-center w-40 justify-end '>
                     <input type="checkbox" className='w-4 h-4' checked={task.completed} onChange={() => {complateTask(task.id)}} />
                     <Editing id={task.id} titlee={task.title} />
                     <FaTrash className='text-white ' size={20} onClick={()=>{
                        deleteTask(task.id)
                     }} />

                 </div>
                
                </div>
  )
}
