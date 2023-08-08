import React, { useState, useEffect } from "react";
import {
  baseUrli,
  notificationLength,
  notificationLinks,
} from "@/utils/dataAssets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { error } from "console";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/stores/store";
import FormHeader from "@/components/units/formHeader";
import { setNotificationPanelVisibility } from "@/features/appPages";

function NotificationLayout(props: any) {
  const dispatch = useAppDispatch();
  const isNotificationPanelVisible = useSelector(
    (store: RootState) => store.appPages.isNotificationPanelVisible
  );
  const [notifications, setNotifications]: any[] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(
    notificationLinks[0]
  );

  //   const getNotifications = async () => {
  //     await axios
  //       .get(`${baseUrli}/notifications/loggedIn-company-notifications`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("authKey")}`,
  //         },
  //       })
  //       .then((response) => {
  //         setNotifications(response.data.notifications);
  //       })
  //       .catch((error) => {
  //         console.log("Error : " + error);
  //       });
  //   };
  //   useEffect(() => {
  //     getNotifications();
  //     const getFilteredNotifications = () => {
  //       if (selectedNotification.name === "All") {
  //         getNotifications();
  //         return notifications;
  //       } else if (selectedNotification.name === "Users & employees") {
  //         return notifications.filter(
  //           (notification: any) =>
  //             notification.nofiticationType === "USER_AND_EMPLOYEES"
  //         );
  //       } else if (selectedNotification.name === "Companies & Reports") {
  //         return notifications.filter(
  //           (notification: any) =>
  //             notification.nofiticationType === "COMPANIES_AND_REPORTS"
  //         );
  //       } else if (selectedNotification.name === "Minesites & Incidents") {
  //         return notifications.filter(
  //           (notification: any) =>
  //             notification.nofiticationType === "MINESITES_AND_INCIDENTS"
  //         );
  //       } else {
  //         return [];
  //       }
  //     };

  //     if (selectedNotification) {
  //       const filteredNotifications = getFilteredNotifications();
  //       setNotifications(filteredNotifications);
  //     }
  //   }, [notifications, selectedNotification]);

  const handleClick = (link: any) => {
    setSelectedNotification(link);
  };
  return (
    <div>
      {isNotificationPanelVisible && (
        <div
          id="notification"
          className="bg-white z-100 border w-[35%]   absolute right-0 z-100 h-[80%] shadow-2xl rounded-2xl shadow-gray-500"
        >
          <div className="space-y-5 p-4 self-end  flex flex-col border border-t-0 border-x-0 shadow-lg">
            <FormHeader
              title="Notifications"
              hideComponent={() =>
                dispatch(setNotificationPanelVisibility({ type: "close" }))
              }
            />
            <div
              className={
                "flex  w-[100%]  justify-center  space-x-3 flex-row items-center "
              }
            >
              {notificationLinks.map((link, index) => {
                return (
                  <button
                    id="para"
                    onClick={() => handleClick(link)}
                    className={
                      selectedNotification.id === link.id
                        ? "text-sm hover:font-bold border-x-0 border-t-0 border-4 border-black-900 relative hover:cursor-pointer"
                        : "text-sm hover:font-bold relative hover:cursor-pointer"
                    }
                    key={index}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div
            id="over"
            className="h-[78%] relative mt-7 overflow-scroll  flex flex-col space-y-2"
          >
            {notifications != null &&
              notifications.map((notification: any, index: any) => {
                return (
                  <div
                    // id="para"
                    className={
                      "flex p-4  hover:cursor-pointer border  space-x-7 flex-row items-center justify-start"
                    }
                    key={index}
                  >
                    <p
                      className={
                        notification.message.length > notificationLength.length
                          ? "h-[34px] rounded-full border w-[11%] bg-black-500"
                          : "h-[34px] rounded-full border w-[7%] bg-black-500"
                      }
                    ></p>

                    <p>
                      {notification.message.length > notificationLength.length
                        ? notification.message.slice(
                            0,
                            notificationLength.length
                          ) + "....."
                        : notification.message}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationLayout;
