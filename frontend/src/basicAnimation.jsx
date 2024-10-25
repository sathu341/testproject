import { useLayoutEffect,useRef,useState } from "react";
import { gsap } from "gsap"; 

function BasicAnimation(){
   
    //useState 
  
    const [count,setCount]=useState(0)
     //useRef 
     const refElement=useRef(null);
     useLayoutEffect(()=>{
        gsap.to(refElement.current,{y:300,duration:3,ease:'elastic.in'})
     },[])

     const btn={
        position:'relative',
        
        
     }
    return(
        <>
        <div>
            <button ref={refElement} onClick={()=>{
                setCount(count+1)
            }} style={btn}>
               Basic Animation
            </button>
        </div>
        
        </>
    )

}

export default BasicAnimation