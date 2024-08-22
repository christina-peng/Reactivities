import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(res => {
      setActivities(res.data);
    })
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id? handleSelectedActivity(id) : handleCancelActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEdit(activity: Activity) {
    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  return (
    <Fragment>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEdit}
        />
      </Container>
    </Fragment>
  )
}

export default App
