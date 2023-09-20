import React, { useState, useEffect } from "react";
import {
  baseUrli,
  notificationLength,
  notificationLinks,
} from "@/utils/dataAssets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { error } from "console";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/stores/store";
import FormHeader from "@/components/units/formHeader";
import { setNotificationPanelVisibility } from "@/features/appPages";
import NotificationBox from "@/components/units/NotificationBox";
import { getAllNotifications } from "@/services/actions/notifications.action";
import { getNotification } from "@/features/notifications";
import { axios } from "@/services/axios";

function NotificationLayout(props: any) {
  const [userNotifications, setUserNotifications] = useState([]);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        await axios
          .get("/notifications/all", {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("refreshToken")!
              )}`,
            },
          })
          .then((res) => {
            console.log(res.data.data);
            setUserNotifications(res.data.data);
            dispatch(getNotification(res.data.data));
          });
      } catch (err) {
        console.log(err);
      }
    };
    getNotifications();
  }, []);

  const [notifications, setNotifications]: any[] = useState([
    {
 
      message: "There has been an unusual temperature rise",
      status: 1,
    },
    {

      message: "There has been an unusual pressure rise",
      status: 0,
    },
    {
      message: "There has been an unusual pressure rise",
      status: 1,
    },
  ]);
  const dispatch = useAppDispatch();

  const isNotificationPanelVisible = useSelector(
    (store: RootState) => store.appPages.isNotificationPanelVisible
  );
  // const userNotifications:any = useSelector((state:RootState)=>{
  //   state.notifications.notifications;
  // })

  const [selectedNotification, setSelectedNotification] = useState(
    notificationLinks[0]
  );
  const handleClick = (link: any) => {
    setSelectedNotification(link);
  };
  return (
    <div>
      {isNotificationPanelVisible && (
        <div
          id="notification"
          className="bg-white z-100 border w-[35%]   absolute right-0 z-100  rounded-2xl "
        >
          <div className="space-y-5 p-4 self-end flex flex-col border border-t-0 border-x-0 shadow-lg">
            <NotificationBox
              notifications={
                userNotifications.length == 0
                  ? notifications
                  : userNotifications
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationLayout;
