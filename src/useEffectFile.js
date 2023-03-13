import { useEffect, useState } from "react"


export default function Dummy () {

    const [count , setCount] = useState(0)

    // useEffect -/> Api call ,

    // SNTAX -/> function , dependency
    
    // useEffect 
    // [EMPTY ARRAY] -/> USEeFFEXT WILL GET EXICUTES ONLY ONCE AFTER RENDERING OF PAGE/COMPONENT

    useEffect(()=>{
        // alert('I am here ...')

        //  with out keeping anydependencies (1000)
        // Api call to fetch the data ...
        //  will take all the data ...
        // all data is on screen now ..

        //  with dependency 
        //  api call will fetch the 100 video 

        //  return statement 

        // alert('i am from useEffect ...')

    },[count])



    return (
        <button onClick={()=>setCount(count+1)}>Click</button>
    )



}