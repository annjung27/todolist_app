import React, { useState } from 'react'
import styles from './Addform.module.css'

const Addform = (props) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    
    

    const handleSubmit = (e) => {    // what happens when I click the Add button
        e.preventDefault();

        if(task.length ==0){        // to prevent creating empty task
            return null;
        }

        const taskObject = {         // make tasks list to object to update it
            text: task,
            isChecked: false
        }

        setTasks([...tasks, taskObject])
        // const copyTasks= [...tasks]
        // copyTasks.push(taskObject)
        // setTasks(copyTasks)

        setTask("")    // to clear task after submit the form
        
    }

   const handleDelete= (idx) => {                    // what happends when I click Delete button
    const filterTasks = tasks.filter((task, i)=> {    
        return i !== idx;
    }); 
    setTasks(filterTasks)
   }  //filter tasks to return only the tasks that are not clicked delete button

    const handleCheckBox = (idx) => {             //what happens when I check a checkbox
        const checkedTasks = tasks.map((task,i)=> {
            if(idx == i){
                task.isChecked = !task.isChecked;   // toggle the checkbox(on and off)
            }

            return task;
        })

        setTasks(checkedTasks)
    }

    return (
    <div>
        
        <h3>Add Todo</h3>
        
        <form onSubmit={ handleSubmit }>
            <input type='text' onChange={(e)=>{setTask(e.target.value)}} value={task} style={{marginRight:'5px'}}/>
            <button>Add</button>
        </form>

        <div>
            <h3>All Todo List</h3>
            <div>
                {
                    tasks.map((task, i) => {                    
                        return (
                            <div>                            
                                <input onChange={(e)=>{handleCheckBox(i)}} checked={task.isChecked} type='checkbox' key={i} />
                                <span className={task.isChecked? `${styles.line}`: `${styles.none}`} style={{marginRight:'5px'}}>{task.text}</span>
                                <button onClick={(e)=> {handleDelete(i)}}>Delete</button>
                            </div>
                            
                        )
                    }

                    )
                }
            </div>
            
        </div>
        
    </div>
    )
}

export default Addform