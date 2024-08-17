import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(res => {
      setActivities(res.data);
    })
  }, []);

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((act: any) => (
          <li key={act.id}>
            {act.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
