'use client';
import { useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import AwayArrow from '../ui/AwayArrow';
import Footer from '../ui/Footer';
import Header from '../ui/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <ContactDirections />
      <Contacts />
      <Footer />
    </>
  );
}

function ContactDirections() {
  return (
    <div className="px-28 py-10">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-7xl font-playfair text-gray-800">Contact</h1>
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

// function Contacts() {
//   const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY;

//   // Use apiKey in your Google Maps components or API calls

//   return (
//     <div className="px-28 py-10 font-mono">
//       <div className="flex flex-col text-gray-600 border-t border-x border-gray-700">
//         <ContactBox title="INSTAGRAM" name="@samala_foods" />
//         <ContactBox title="EMAIL" name="info@samalafoods.com" />
//         <ContactBox title="(X) TWITTER" name="@samala_foods" />
//         <ContactBox title="FACEBOOK" name="samala_foods" />
//         <ContactBox title="DIRECTION" name="google_maps" />
//       </div>
//       <div id="map" className="w-full h-52"></div>
//     </div>
//   );
// }

function Contacts() {
  const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY || '';

  // const MAPS_KEY = 'AIzaSyA3Tv9W_Ngs8sIy-9uzllnRIVI5OgKAaEg';

  const mangoURL = 'https://maps.app.goo.gl/v26ZjJxermjkh4D66';

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '1rem',
  };

  const center = {
    lat: -15.3875, // Update with your latitude
    lng: 35.3175, // Update with your longitude
  };

  return (
    <div className="px-28 py-10 font-mono">
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
        <div id="map" className="w-full p-4 rounded-2xl overflow-hidden">
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
        <div className="flex justify-between border-b  tracking-tight border-gray-700 px-4 py-3">
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
