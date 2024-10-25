import { useLayoutEffect,useRef } from "react";
import {gsap} from 'gsap';


function Sequential(){
    const box1Ref=useRef(null);
    const box2Ref=useRef(null);
    const box3Ref=useRef(null);
    useLayoutEffect(()=>{
      const tl=gsap.timeline({defaults :
        {duration:1,ease:'power2.out'}});
        tl.to(box1Ref.current,{x:100,opacity:1})
        tl.to(box2Ref.current,{x:100,opacity:1},"-=0.5")
        tl.to(box3Ref.current,{x:100,opacity:1},"-=0.5")
    })
    return(
        <>
        <div style={wrap}>
            <div ref={box1Ref} style={boxStyle}></div>
            <div ref={box2Ref} style={boxStyle}></div> 
            <div ref={box3Ref} style={boxStyle}></div>
        </div>
        
        </>
    )
}
const wrap={
    display:'flex',
    gap:'20px'
}

const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#03a9f4',
    opacity: 0,  // Initially set opacity to 0 for fade-in
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    position: 'relative'
  };

     
export default Sequential