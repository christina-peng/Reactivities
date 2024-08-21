import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity"

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity } : Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(act => (
                    <Item key={act.id}>
                        <Item.Content>
                            <Item.Header as="a">{ act.title }</Item.Header>
                            <Item.Meta>{ act.date }</Item.Meta>
                            <Item.Description>
                                <div>{ act.description }</div>
                                <div>{ act.city }, { act.venue }</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(act.id)} floated="right" content="View" color="blue"/>
                                <Label basic content={act.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}