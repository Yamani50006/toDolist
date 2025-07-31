import { create } from 'zustand'


export  type TaskType = {
    id: string,
    title: string,
    completed: boolean
}

interface TaskState {
  Tasks: TaskType[],
  addTask:(title:string)=>void,
  complateTask:(id:string)=>void,
  deleteTask:(id:string)=>void,
  editTask:(id:string, title:string)=>void,
 

  
}  

export  const useTaskStore = create<TaskState>()((set) => ({
  Tasks: [], 
  addTask:(title)=>{
    
set((state)=>({
     Tasks:[...state.Tasks,{id:Date.now().toString(), title, completed: false}] 
}))
    
  },
  complateTask:(id)=>{
    set((state)=>({
        Tasks:state.Tasks.map((task)=>{
            if(task.id === id){
                return {...task, completed:!task.completed}
            }
            return task
        })
    }))
            
     
  } ,
  deleteTask:(id)=>{
    set((state)=>({
        Tasks:state.Tasks.filter((task)=>task.id !==id)
    }))

},
editTask:(id, title)=>{
set((state)=>({
  Tasks:state.Tasks.map((task)=>{
    if(task.id===id){
      return {...task, title}
    }
    return task
  })
    
  })
  
)

}


}
))

  
