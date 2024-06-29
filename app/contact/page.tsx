import AwayArrow from '../ui/AwayArrow';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

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
        <h1 className="text-7xl font-playfair">Contact</h1>
        <p className="max-w-md tracking-wide text-center">
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
  return (
    <div className="px-28 py-10 font-mono">
      <div className="flex flex-col  border-t border-x border-gray-700">
        <ContactBox title="INSTAGRAM" name="@samala_foods" />
        <ContactBox title="EMAIL" name="info@samalafoods.com" />
        <ContactBox title="(X) TWITTER" name="@samala_foods" />
        <ContactBox title="FACEBOOK" name="samala_foods" />
        <ContactBox title="DIRECTION" name="google_maps" />
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
  url?: string;
}) {
  return (
    <div className="flex justify-between border-b border-gray-700 px-4 py-3">
      <div>{title}</div>
      <div className="inline-flex gap-3">
        <span className="">{name}</span>
        <AwayArrow className="w-6" />
      </div>
    </div>
  );
}
