import React, { useEffect, useState } from 'react'
import { useTaskStore } from '@/store/useStore'

export default function Counter() {
  const {Tasks}=useTaskStore();
    const [count, setCount] = useState<number>(0);
    
    useEffect(()=>{
      setCount(0);
      Tasks.map((item)=>{
        if(item.completed){
          setCount(pre=> pre+1);
        }
      })
    },[Tasks])

   
  return (
    <div className='flex w-[60px] h-[60px] rounded-full items-center justify-center shadow-lg bg-[#1e1e1e] border border-[#3f3f3f]  backdrop-blur-lg px-3 py-1 '>
      <p className='text-white  text-center'>{count}</p>
    </div>
  )
}
