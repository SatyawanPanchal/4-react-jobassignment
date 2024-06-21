import { useEffect, useState } from "react";
import Menu from './Menu'
import JobsCurrently from './JobsCurrently'
import Duties from "./Duties";
import './style.css'

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {



  const [jobs,setJobs]=useState([])
  const[loading,setLoading]=useState(true)
  const [currentItem,setCurrentItem]=useState(1)

  useEffect( ()=> {
    async function  fetchJobs()
    {
      const response= await fetch(url);
      const newJobs= await response.json();
      setLoading(false)     
      setJobs(newJobs);
    };   
    fetchJobs();
  },[])
  console.log("item",currentItem);


  if(loading)
    {
      return<div>Loading...</div>
    }else{
  return<>
  <div className="title">
  <h1>Satyawan App (Jobs company wise)</h1>
  </div>
  
<Menu jobs={jobs} setCurrentItem={setCurrentItem}/>
<JobsCurrently jobs={jobs} currentItem={currentItem}/>
  
  
  </>;
};}
export default App;
