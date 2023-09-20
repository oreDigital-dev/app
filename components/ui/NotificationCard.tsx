import Image from "next/image";

export interface NotificationCardProps {

  message: string;
  status: number;
}
const NotificationCard = (props: NotificationCardProps) => {
  return (
    <div className="bg-white flex items-center justify-evenly w-full p-4 gap-4 rounded-md shadow-md">
   
      {props.status == 0 &&(
       
        <div className="w-4 h-4 bg-app rounded-full border border-app animate-ping" />
      )}
      {
        props.status ==1 &&(
       
            <div className="w-4 h-4 bg-green-400 rounded-full border border-green-400" />
          )
      }
      <div>
        <p className="text-gray-500 w-3/4 ">{props.message}</p>

      </div>
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-400/20 relative">
<Image src={"/backGround.jpg"} alt="image" fill className="rounded-full" />
      </div>
    </div>
  );
};
export default NotificationCard;
