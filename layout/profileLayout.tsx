import React, { useState, useEffect } from "react";
import {
  baseUrli,
  notificationLength,
  notificationLinks,
  profileLinks,
} from "@/utils/dataAssets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { NofiticationsIcon, SettingsIcon, helpIcon } from "@/components/icons";
import CurrentUser from "@/components/units/currentUser";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/stores/store";
import { setProfilePanelVisibility } from "@/features/appPages";

function ProfileLayout(props: any) {
  const dispatch = useAppDispatch();
  const isProfilePanelVisibile = useSelector(
    (store: RootState) => store.appPages.isProfilePanelVisibile
  );
  const [notifications, setNotifications]: any[] = useState([]);

  const [selectedNotification, setSelectedNotification] = useState(
    notificationLinks[0]
  );

  const getNotifications = async () => {
    await axios
      .get(`${baseUrli}/notifications/loggedIn-company-notifications`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authKey")}`,
        },
      })
      .then((response) => {
        setNotifications(response.data.notifications);
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };
  useEffect(() => {
    getNotifications();
    const getFilteredNotifications = () => {
      if (selectedNotification.name === "All") {
        getNotifications();
        return notifications;
      } else if (selectedNotification.name === "Users & employees") {
        return notifications.filter(
          (notification: any) =>
            notification.nofiticationType === "USER_AND_EMPLOYEES"
        );
      } else if (selectedNotification.name === "Companies & Reports") {
        return notifications.filter(
          (notification: any) =>
            notification.nofiticationType === "COMPANIES_AND_REPORTS"
        );
      } else if (selectedNotification.name === "Minesites & Incidents") {
        return notifications.filter(
          (notification: any) =>
            notification.nofiticationType === "MINESITES_AND_INCIDENTS"
        );
      } else {
        return [];
      }
    };

    if (selectedNotification) {
      const filteredNotifications = getFilteredNotifications();
      setNotifications(filteredNotifications);
    }
  }, [notifications, selectedNotification]);

  const handleClick = (link: any) => {
    setSelectedNotification(link);
  };
  return (
    <div>
      {isProfilePanelVisibile && (
        <div className="bg-white border  absolute right-0 z-100 h-[58%] shadow-2xl rounded-tl-2xl rounded-bl-2xl shadow-gray-500">
          <div className="space-y-5 p-4 self-end  flex flex-col border border-t-0 border-x-0 shadow-lg">
            <div className="flex border w-[100%] pb-1  border-x-0 border-t-0 flex-row justify-between">
              <h1 className="font-bold text-xl">Profile</h1>
              <AiOutlineCloseCircle
                className="text-2xl hover:cursor-pointer"
                onClick={() =>
                  dispatch(setProfilePanelVisibility({ type: "close" }))
                }
              />
            </div>
            <div
              className={
                "flex  w-[100%]  justify-center  space-x-3 flex-row items-center "
              }
            >
              <div className="flex items-center hover:cursor-pointer gap-6 ">
                <CurrentUser
                  email={localStorage.getItem("loggedInUser")?.toString()}
                />
              </div>
            </div>
          </div>
          <div className="h-[70%]  relative mt-7   flex flex-col space-y-2">
            {profileLinks != null &&
              profileLinks.map((notification: any, index: any) => {
                return (
                  <div
                    // id="para"
                    className={
                      "flex p-4  hover:cursor-pointer border  space-x-7 flex-row items-center justify-start"
                    }
                    key={index}
                  >
                    <SettingsIcon />
                    <p>
                      {notification.name.length > notificationLength.length
                        ? notification.message.slice(
                            0,
                            notificationLength.length
                          ) + "....."
                        : notification.name}
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

export default ProfileLayout;
