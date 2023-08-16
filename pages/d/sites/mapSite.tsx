import React from "react";
import SectionHead from "@/components/ui/sectionHead";
import Link from "next/link";
function MapSite() {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_GOOGLE_MAP_API_KEY,
  // });

  // if (!isLoaded) {
  //   return <p>Loading....</p>;
  // }

  // const center = { lat: 47.444, lng:  -122.176 }; // Replace with your desired coordinates

  return (
    <div className="m-[20px]  rounded-md ">
      <div className=" bg-white p-[20px] rounded-md shadow-sm shadow-neutal-300">
        <div className="flex items-start justify-between">
          <SectionHead
            title="Zuba miners plots distribution"
            desc="Geographical representation of mine sites"
          />
          {/* <div style={{ width: '100%', height: '100%' }}>
      <GoogleMap 
        center={center} 
        zoom={15} 
        mapContainerStyle={{ width: '100%', height: '100%' }}
      />
    </div> */}
        </div>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.21099342983!2d29.6349943871582!3d-1.930947899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcc33fdcaad757%3A0x1da0bf271ca82f15!2sNMC(Ngororero%20mining%20conception)!5e0!3m2!1sen!2sin!4v1691511041982!5m2!1sen!2sin"
            width="100%"
            height="620"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapSite;
