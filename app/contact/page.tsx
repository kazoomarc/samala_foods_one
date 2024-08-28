"use client";
import { useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import AwayArrow from "../ui/AwayArrow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ContactDirections />
      <Contacts />
    </>
  );
}

function ContactDirections() {
  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-gray-800 text-7xl font-playfair">Contact</h1>
        <p className="max-w-md tracking-wide text-center text-gray-600">
          You can find us at 123 Culinary Street, Zomba City, close to the
          University of Malawi offices. As we are conveniently located near the
          university, the best way to reach us is by taxi or on foot. If you
          would like to visit us by car, parking space is available nearby.
        </p>
      </div>
    </div>
  );
}

function Contacts() {
  const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY || "";

  const mangoURL = "https://maps.app.goo.gl/v26ZjJxermjkh4D66";

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "1rem",
  };

  const center = {
    lat: -15.3875, // Update with your latitude
    lng: 35.3175, // Update with your longitude
  };

  return (
    <div className="px-4 py-10 font-mono sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <div className="text-gray-600 border border-gray-700">
        <div className="flex flex-col ">
          <ContactBox
            title="INSTAGRAM"
            name="@samala_foods"
            url="https://www.instagram.com"
          />
          <ContactBox
            title="EMAIL"
            name="info@samalafoods.com"
            url="https://www.x.com"
          />
          <ContactBox
            title="TWITTER"
            name="@samala_foods"
            url="https://www.x.com"
          />
          <ContactBox
            title="FACEBOOK"
            name="samala_foods"
            url="https://www.x.com"
          />
          <ContactBox title="DIRECTION" name="google_maps" url={mangoURL} />
        </div>
        <div id="map" className="w-full p-4 overflow-hidden rounded-2xl">
          <LoadScript googleMapsApiKey={MAPS_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

function ContactBox({
  title,
  name,
  url,
}: {
  title: string;
  name: string;
  url: string;
}) {
  return (
    <div>
      <Link href={url} target="_blank">
        <div className="flex justify-between px-4 py-3 tracking-tight border-b border-gray-700">
          <div>{title}</div>
          <div className="inline-flex gap-3">
            <span className="">{name}</span>
            <AwayArrow className="w-6" />
          </div>
        </div>
      </Link>
    </div>
  );
}
