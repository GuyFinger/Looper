import React,{ useState,useEffect } from 'react'
import Pad from './Pad'
import '../CSS/container.css'
import sounds from '../assets/sounds'
import Button from '@material-ui/core/Button';


export default function Looper() {
const [isPlaying, setIsPlaying] = useState(false)
const [isPauseForced, setIsPauseForced] = useState(false)
const [looperStatus, setLooperStatus] = useState([false,false,false,false,false,false,false,false,false,])
const [loopCounter, setLoopCounter] = useState(0)
 
useEffect(() => {  
    if(looperStatus.every(item => !item)){
        setIsPlaying(false)
    }    
    else if(!isPauseForced && !isPlaying){
        playAll()
    } 
}, [looperStatus])

//looping activated sounds 
useEffect(() => {  
    if (!isPauseForced && isPlaying && !looperStatus.every(item => !item) ){
        playAll()
    }
}, [loopCounter])
//play single iteration of activated sounds
const playAll = () => {
    setIsPlaying(true)
    setIsPauseForced(false)
    let activePads = looperStatus.flatMap((bool, index) => bool ? index : [])
    for (const activePad of activePads) {
        sounds[activePad].currentTime = 0;
        sounds[activePad].play();   
    }   
    const loopDuration = 8010
        return setTimeout(() => {                    
            setLoopCounter(loopCounter+1)
        }, loopDuration);    
}
//update the clicked pad as active
const playPad= (id)=>{
    const newState = [...looperStatus];
    newState[id] = true;
    setLooperStatus(newState)
   
}
//update the clicked pad as inactive
const pausePad = (id) => {
    const newState = [...looperStatus];
    newState[id] = false;
    setLooperStatus(newState);
    sounds[id].pause()
    sounds[id].currentTime = 0
}

 const pauseAll = () =>{
    for (const sound of sounds) {
        sound.pause()
        sound.currentTime = 0;  
    }
    setIsPauseForced(true)
    setIsPlaying(false)
}

    return (
        <div className='looper'>
        <div className="btn">
        <Button onClick={playAll} variant="contained" color="primary">
        Play
        </Button>
        <Button onClick={pauseAll} variant="contained" color="secondary">
        Pause
        </Button>
            </div>

            <div className='pad-container'>
            {sounds.map((sound,index)=>(<Pad pausePad={pausePad}
                                             playPad={playPad} 
                                             key={index} 
                                              id={index} 
                                             />))}
            </div>
        </div>
    )
}