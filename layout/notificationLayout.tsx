import React, { useState, useEffect } from "react";
import { notificationLength, notificationLinks } from "@/utils/dataAssets";

function NotificationLayout() {
  const [notifications, setNotifications] = useState([
    {
      _id: 0,
      message:
        "Hello your minesite has quired the highest temperature  highest temperature  highest temperature temperature temperature",
      nofiticationType: "USER_AND_EMPLOYEES",
      notificationStatus: "UNREAD",
    },
    {
      _id: 0,
      message: " has quired the highest temperature",
      nofiticationType: "DANGER_TEMPERATURE",
      notificationStatus: "UNREAD",
    },
    {
      _id: 3,
      message: "Hello your minesite has quired the highest temperature",
      nofiticationType: "COMPANIES_AND_REPORTS",
      notificationStatus: "READ",
    },
    {
      _id: 13,
      message: " your minesite has quired the highest temperature",
      nofiticationType: "COMPANIES_AND_REPORTS",
      notificationStatus: "READ",
    },
    {
      _id: 14,
      message: "Hello your minesite has quired the highest temperature",
      nofiticationType: "USER_AND_EMPLOYEES",
      notificationStatus: "READ",
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(
    notificationLinks[0]
  );

  useEffect(() => {
    let filteredNotifications: any;
    if (selectedNotification.name == "All") {
      filteredNotifications = notifications;
      setNotifications(filteredNotifications);
    } else if (selectedNotification.name == "Users & employees") {
      filteredNotifications = notifications.filter(
        (notification: any) =>
          notification.nofiticationType != "USER_AND_EMPLOYEES"
      );
      console.log(filteredNotifications);
      setNotifications(filteredNotifications);
    } else if ((selectedNotification.name = "Companies & resports")) {
      filteredNotifications = notifications.filter(
        (notification: any) =>
          notification.nofiticationType == "COMPANIES_AND_REPORTS"
      );
      setNotifications(filteredNotifications);
    } else {
      setNotifications(notifications);
      console.log(selectedNotification);
    }
  });

  const handleClick = (link: any) => {
    setSelectedNotification(link);
  };
  return (
    <div className="bg-white border w-[35%]   absolute right-0 z-100 h-[80%] shadow-2xl rounded-2xl shadow-gray-500">
      <div className="space-y-5 p-4 self-end  flex flex-col border border-t-0 border-x-0 shadow-lg">
        <h1 className="font-bold text-xl">Notifications</h1>
        <div
          className={
            "flex  w-[100%]  justify-center  space-x-3 flex-row items-center "
          }
        >
          {notificationLinks.map((link, index) => {
            return (
              <button
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
      <div className="h-[78%] relative mt-7 overflow-scroll  flex flex-col space-y-2">
        {notifications.map((notification, index) => {
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
                  ? notification.message.slice(0, notificationLength.length) +
                    "....."
                  : notification.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NotificationLayout;
