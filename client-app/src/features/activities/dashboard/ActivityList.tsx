import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {activitiesByDate} = activityStore;

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(actiivity => (
                    <ActivityListItem key={actiivity.id}  activity={actiivity} />
                ))}
            </Item.Group>
        </Segment>
    )
})