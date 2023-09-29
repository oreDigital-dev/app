import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import NotificationCard, {
  NotificationCardProps,
} from "../ui/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { setNotificationPanelVisibility } from "@/features/appPages";

import { ThreeDotsIcon } from "../icons";

export interface NotificationBoxProps {
  notifications: NotificationCardProps[];
}

const NotificationBox = (props: NotificationBoxProps) => {
  const handleReadMore = () => {
    setStartIndex(startIndex+1);
  };
  const [startIndex, setStartIndex] = useState(0);
  const dispatch = useDispatch();
  const handleClosePanel = () => {
    dispatch(setNotificationPanelVisibility({ type: "close" }));
  };
  return (
    <div className="  rounded-md space-y-4 px-4">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">Notifications</p>
        <button onClick={() => handleClosePanel()}>
          <GiCancel />
        </button>
      </div>
      
      {props.notifications.slice(startIndex, startIndex+4).map((notification, index) => {
        return <NotificationCard key={index} {...notification} />;
      })}
 
      {props.notifications.length > 3 && (
        <button
          onClick={handleReadMore}
          className="flex items-center gap-4 text-[#5160B3]"
        >
          <span>

            <ThreeDotsIcon />

          </span>
          Read More
        </button>
      )}
           {
        props.notifications.length == 0 && (
          <p>No new notifications !</p>
        )
      }
    </div>
  );
};
export default NotificationBox;
