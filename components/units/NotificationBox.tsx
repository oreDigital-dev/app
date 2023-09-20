import {GiCancel} from 'react-icons/gi';
import NotificationCard, {
  NotificationCardProps,
} from "../ui/NotificationCard";
import { useDispatch } from 'react-redux';
import { setNotificationPanelVisibility } from '@/features/appPages';
export interface NotificationBoxProps {
  notifications: NotificationCardProps[];
}

const NotificationBox = (props: NotificationBoxProps) => {
    const dispatch = useDispatch();
    const handleClosePanel = ()=>{
        dispatch(setNotificationPanelVisibility({type:"close"}))
    }
  return (
    <div className="  rounded-md space-y-4 px-4">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">Notifications</p>
        <button onClick={()=>handleClosePanel()}><GiCancel /></button>
      </div>
      {props.notifications.map((notification, index) => {
        return <NotificationCard key={index} {...notification} />;
      })}
    </div>
  );
};
export default NotificationBox;
