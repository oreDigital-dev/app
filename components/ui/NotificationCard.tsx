import Image from "next/image";

export interface NotificationCardProps {
  notificationOwner: string;
  notificationMessage: string;
  notificationStatus: string;
}
const NotificationCard = (props: NotificationCardProps) => {
  return (
    <div className="bg-white flex items-center justify-evenly w-full p-4 gap-4 rounded-md shadow-md">
      {props.notificationStatus == "read" &&(
        <div className="w-4 h-4 bg-white rounded-full border border-app " />
      ) }
      {props.notificationStatus == 'unread' &&(
       
        <div className="w-4 h-4 bg-app rounded-full border border-app animate-ping" />
      )}
      {
        props.notificationStatus == 'archieved' &&(
       
            <div className="w-4 h-4 bg-green-400 rounded-full border border-green-400" />
          )
      }
      <div>
        <p className="text-gray-500">{props.notificationMessage}</p>
        <p className="text-app font-medium">{props.notificationOwner}</p>
      </div>
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-400/20 relative">
<Image src={"/backGround.jpg"} alt="image" fill className="rounded-full" />
      </div>
    </div>
  );
};
export default NotificationCard;
