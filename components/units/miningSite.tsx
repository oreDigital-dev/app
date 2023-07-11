import Image from "next/image";
import SectionHead from "../ui/sectionHead";
import StatusView from "../ui/status";
import { Status } from "@/@types/status";
import { MiningSite } from "@/@types/interfaces";

interface MiningSiteProps extends MiningSite {
  isSelected: boolean;
  setSelectedSite: React.Dispatch<React.SetStateAction<string>>;
}

export default function MiningSite(props: MiningSiteProps) {
  return (
    <div className={`flex items-center p-3 min-w-[300px]  gap-4 border cursor-pointer rounded-lg shadow-sm  ${props.isSelected ? 'bg-app/10 border-2 border-app' : 'border-black-100'}`} onClick={() => props.setSelectedSite(props.id)}>
      {/* <Image src={props.img} alt={props.name} width={100} height={100} className="w-auto" /> */}
      <div>
        <SectionHead title={props.name} desc={props.location} />
        <StatusView status={props.status} />
      </div>
    </div>
  );
}
