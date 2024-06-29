import Footer from '../ui/Footer';
import Header from '../ui/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Menu() {
  return (
    <div>
      <div className="px-28 py-10 _bg-orange-800">
        <div id="breakfast" className="mt-8">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Break Fast
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        <div id="lunch" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Lunch
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        <div id="dinner" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Dinner
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        <div id="drinks" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Drinks
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        <div id="desserts" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Desserts
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuCard({
  name,
  children,
  price,
}: {
  name?: string;
  children?: React.ReactNode;
  price?: string;
}) {
  return (
    <div className=" mt-5 border-2 _border-slate-400 shadow-sm ring ring-black/5 flex flex-col relative overflow-hidden">
      {/* image here */}
      <div className="relative h-80 shrink-0">
        <img src="/images/breakfast-1.jpg" alt="alt text here" />
      </div>
      <div className="relative bg-slate-400 px-4 py-3">
        <h3 className="text-2xl">Sunrise Delight</h3>
        <p>
          A delicious blend of scrambled eggs, crispy bacon, and buttery toast.
        </p>
        <div className="inline-flex mt-4 px-4 py-3 text-white bg-gray-950">
          <span className="font-mono text-sm font-light">MWK 4,200</span>
        </div>
      </div>
    </div>
  );
}
