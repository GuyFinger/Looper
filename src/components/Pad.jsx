import React,{useState} from 'react'
import '../CSS/box.css'



export default function Pad({id,playPad,pausePad}) {

const [padStatus, setPadStatus] = useState(false)
    const playBtn = (id) => {
        playPad(id)
        setPadStatus(true)
        
      }
    const pauseBtn = (id) => {
        pausePad(id)
        setPadStatus(false)
       }
    return (

        <div className={!padStatus ? `sound-box-off id${id}`: `sound-box-on id${id}`} onClick={(e)=> !padStatus ? playBtn(e.target.id) : pauseBtn(e.target.id)} id={id}>  
        </div>
    )
}
