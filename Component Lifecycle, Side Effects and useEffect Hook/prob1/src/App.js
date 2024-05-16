import './App.css';
import {useEffect, useState} from "react"


function App() {
  const [data,setData]=useState()
  
  useEffect(()=>{
    // async function fetchdata(){
    //   try {
    //     const res=await fetch("https://fakestoreapi.com/products")
    //     const final=await res.json()
    //     setData(final)
    //     console.log(final)
    //   } catch (error) {
        
    //   }
    // }
    // fetchdata()
    handleClick()
    return (()=>setData(null))
  },[])

  async function handleClick(){
    try {
      const res=await fetch("https://fakestoreapi.com/products")
      const final=await res.json()
      setData(final)
      console.log(final)
    } catch (error) {
      
    }
  }
  
  return (
    <div className="App">
      <h1>
        hello react
      </h1>
      <button onClick={handleClick}>get the data</button>
      {data?.map((ele,i)=>{
        return <li key={i}>
          <h1>{ele.title}</h1>
        </li>
      })}
    </div>
  );
  
}

export default App;
