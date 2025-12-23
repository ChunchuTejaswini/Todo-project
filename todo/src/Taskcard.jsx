import React from 'react'
import "./Taskcard.css"
import Tag from './Tag'
import deleteicon from "./assets/delete.png"

const Taskcard = ({title,tags,handledelete,index,setactivecard}) => {
  return (
    <article className='task_card' draggable  onDragStart={()=>setactivecard(index)}  onDragEnd={()=>setactivecard(null)}>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                 {
                    tags.map((tag,index)=>
                    <Tag key={index} tagName={tag}/>
                    )
                 }
            </div>
            <div className='task_card_delete'>
             <img onClick={()=>handledelete(index)} className="deleteicon" src={deleteicon} alt="delete"/>
            </div>
        </div>
    </article>
  )
}

export default Taskcard