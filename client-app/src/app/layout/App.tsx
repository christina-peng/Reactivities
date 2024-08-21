import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, Header, List } from "semantic-ui-react";
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
    <Fragment>
      <NavBar/>
      <Container style={{marginTop: "7em"}}>
        <List>
          {activities.map((act) => (
            <List.Item key={act.id}>
              {act.title}
            </List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  )
}

export default App
