import React, { Component } from 'react'

export default class 
Hello extends Component {

    constructor(){
        super();
        this.state={
            tasks:[{task:'check mails', id:1}, {task:'read atricle ', id:2}, {task:'complete hw', id:3}],
            currTask:''
        }
    }
    handelChange=(e)=>{
      console.log(e.target.value)
      this.setState({currTask:e.target.value})
    }
    handelSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handelDelete=(id)=>{
 let narr= this.state.tasks.filter((taskobj)=>{
    return taskobj.id!=id
 })
  this.setState({
    tasks:[...narr]
  })
    }

  render() {
    return (
      <div>
       <input onChange={this.handelChange} value={this.state.currTask} type="text" />
       <button onClick={this.handelSubmit}>Submit</button>
       <ul>
        
      
       {
        this.state.tasks.map((taskobj)=>(
            <li key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button onClick={()=>this.handelDelete(taskobj.id)}>Delete</button>
            </li>
        ))
       }
        </ul>
      </div>
    )
  }
}
