import { useContext } from "react";
import { LocalStateContext } from "../../contexts/LocalStateContext";




export default function Notification() {

    const [state] = useContext(LocalStateContext);
    const { notification } = state;

    return notifications.map((notification) => (
        <Alert key={notification.id} variant="filled" severity={notification.type}>
            {notification.description}
        </Alert>
    ))
}