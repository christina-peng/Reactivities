import axios from "axios";
import { useEffect, useState } from "react"
import { Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(res => {
      setActivities(res.data);
    })
  }, []);

  return (
    <div>
      <NavBar/>
      <List>
        {activities.map((act) => (
          <List.Item key={act.id}>
            {act.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
