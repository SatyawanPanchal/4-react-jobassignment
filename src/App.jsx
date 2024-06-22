import { useEffect, useState } from "react";
import Menu from './Menu'
import JobsCurrently from './JobsCurrently'
import Duties from "./Duties";
import './style.css'
import Title from "./Title";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {



  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(1)

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch(url);
      const newJobs = await response.json();
      setLoading(false)
      setJobs(newJobs);
    };
    fetchJobs();
  }, [])
  console.log("item", currentItem);


  if (loading) {
    return <div>Loading...</div>
  } else {
    return <>

      <div className="main_container">


        <Title />
        <div className="app_container"> 

        <div className="menudiv">
          <Menu jobs={jobs} setCurrentItem={setCurrentItem} />
        </div>
        <div className="jobdiv">
          <JobsCurrently jobs={jobs} currentItem={currentItem} />
        </div>
      </div>
      </div>

    </>;
  };
}
export default App;
