import Image from "next/image";
import SectionHead from "../ui/sectionHead";
import StatusView from "../ui/status";
import { Status } from "@/@types/status";
import { MiningSite } from "@/@types/interfaces";
import { useDispatch } from "react-redux";
import { setSelectedMineSite } from "@/features/minesitesSlice";
import minesiteImage from "../../assets/images/images.jpeg";

interface MiningSiteProps extends MiningSite {
  isSelected: boolean;
  setSelectedSite: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiningSite(props: MiningSiteProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center p-3 min-w-[300px]  gap-4 border cursor-pointer rounded-lg shadow-sm  ${
        props.isSelected ? "border-2 border-app" : "border-black-100"
      }`}
      onClick={() => dispatch(setSelectedMineSite({ mineSite: props }))}
    >
      <Image
        src={minesiteImage}
        alt={props.minesiteName}
        width={100}
        height={100}
        className="w-auto"
      />
      <div>
        <SectionHead
          title={props.minesiteName}
          desc={"Jenda" + "," + "Nyabihu"}
        />
        <StatusView status={"0"} />
      </div>
    </div>
  );
}
