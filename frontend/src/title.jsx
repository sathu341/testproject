import {useState,useEffect} from 'react'
import axios from 'axios'
function Title(){
    const [title,setTitle]=useState("")
    useEffect(()=>{
      const api="http://localhost:9000/userrouter/fetch"
        axios.get(api)
        .then((res)=>{
            setTitle(res.data)
        })
        .catch(err=>console.log(err))
     
    },[])
    return(
        <>
        <h2>{title}</h2>
        
        </>
    )
}

export default Title