"use client"
import React, { useState } from 'react'
import { useTaskStore } from '@/store/useStore'
import { Dialog, DialogContent,DialogClose ,DialogTrigger, DialogTitle} from './ui/dialog'
import { BiEdit } from "react-icons/bi";
export default function Editing({id,titlee}:{id:string,titlee:string}) {
    const[title,setTitle]=useState<string>(titlee);
    const {editTask}=useTaskStore();
    const handelEditing=()=>{
        editTask(id,title)
    }

  return (
    <Dialog>
        <DialogTrigger>
            <DialogClose>
                <BiEdit  className='text-white' size={20}  />
            </DialogClose>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
             Editing
          </DialogTitle>
            <input placeholder='editing title ' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='px-3 py-2 border rounded-lg  '  />
           
            <button onClick={()=>handelEditing()}className='bg-[#1f1f1f] py-2 rounded-lg text-white hover:bg-gray-600 '>
              Edit
            </button>

                {/* <DialogClose  >
                    Save 
                </DialogClose>
                */}
               
        </DialogContent>
      
    </Dialog>
  )
}
