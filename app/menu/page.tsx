import { title } from 'process';

export default function Home() {
  return (
    <>
      <Menu />
    </>
  );
}

function Menu() {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-10 _bg-orange-800">
        <div id="breakfast" className="mt-8">
          <h2 className="text-4xl font-medium font-playfair text-orange-500 mb-6">
            Break Fast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <MenuCard name="Sunrise Delight" price="4,200">
              A delicious blend of scrambled eggs, crispy bacon, and buttery
              toast to start your day.
            </MenuCard>
            <MenuCard name="Tropical Fruit Bowl" price="3,800">
              A refreshing mix of seasonal fruits topped with a dollop of Greek
              yogurt and honey.
            </MenuCard>
            <MenuCard name="Malawian Porridge" price="2,400">
              Traditional Malawian porridge made from maize flour, served with a
              side of sugar and milk.
            </MenuCard>
          </div>
        </div>

        <div id="lunch" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500 mb-6">
            Lunch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <MenuCard name=" Chambo Delight" price="14,500">
              Fresh Chambo fish grilled to perfection, served with rice and
              fresh seasonal vegetables.
            </MenuCard>
            <MenuCard name="Beef Stir-Fry" price="12,000">
              Tender strips of beef stir-fried with colorful bell peppers and
              onions, served with jasmine rice.
            </MenuCard>
            <MenuCard name="Veggie Wrap" price="8,500">
              A healthy wrap filled with grilled vegetables, hummus, and a hint
              of spice.
            </MenuCard>
          </div>
        </div>

        <div id="dinner" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500 mb-6">
            Dinner
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <MenuCard name="Chicken Khwasu" price="22,000">
              Spicy chicken curry made with local spices, served with rice and a
              side of naan.
            </MenuCard>
            <MenuCard name="Grilled Lamb Chops" price="28,000">
              Succulent lamb chops grilled to your liking, served with mashed
              potatoes and steamed vegetables.
            </MenuCard>
            <MenuCard name="Vegetarian Lasagna" price="15,000">
              Layers of pasta, fresh vegetables, and creamy cheese baked to
              golden perfection.
            </MenuCard>
          </div>
        </div>

        <div id="drinks" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500 mb-6">
            Drinks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <MenuCard name="Mango Smoothie" price="3,500">
              A refreshing smoothie made with fresh locally grown mangoes,
              yogurt, and a hint of honey.
            </MenuCard>
            <MenuCard name="Espresso" price="2,400">
              A strong, extravagant and rich espresso made from freshly ground
              beans here in Malawi.
            </MenuCard>
            <MenuCard name=" Fresh Lemonade" price="3,000">
              A zesty lemonade made with fresh lemons mint, and a touch of
              sweetness from our organic farms.
            </MenuCard>
          </div>
        </div>

        <div id="desserts" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500  mb-6">
            Desserts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {/*NOTE: */}
            <MenuCard name="Banana Fritters" price="5,000">
              Sweet banana fritters drizzled with honey and served with vanilla
              ice cream.
            </MenuCard>
            <MenuCard name="Chocolate Lava Cake" price="8,000">
              A warm chocolate cake with a gooey center, served with a scoop of
              vanilla ice cream.
            </MenuCard>
            <MenuCard name="Fresh Fruit Salad" price="4,200">
              A mix of seasonal fruits including pears, tamalind served with a
              light syrup and a sprinkle of mint.
            </MenuCard>
          </div>
        </div>
        {/** */}
      </div>
    </div>
  );
}

function _MenuCard({
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
      <div className="relative h-72 shrink-0">
        <img src="/images/breakfast-1.jpg" alt="alt text here" />
      </div>
      <div className="relative left-0 bottom-0 bg-slate-400 px-4 py-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="font-thin _font-medium">{children}</p>
        <div className="inline-flex mt-4 px-4 py-3 text-white bg-gray-950">
          <span className="font-mono text-sm font-light">MWK {price}</span>
        </div>
      </div>
    </div>
  );
}

function MenuCard({
  children,
  name,
  img,
  price,
  alt,
}: {
  name?: string;
  img?: string;
  alt?: string;
  children: React.ReactNode;
  price?: string;
}) {
  return (
    <div className="flex flex-col _justify-center gap-5 ring ring-black/5 bg-white">
      <div className="relative flex ml-0 overflow-hidden _w-96 flex-shrink-0 md:shrink-0 aspect-square">
        <img
          src="/images/breakfast-1.jpg"
          className="absolute inset-0 top-0 object-cover w-full aspect-square"
          alt=""
        />
      </div>

      <div className="flex flex-col px-3 pb-4 justify-between _bg-lime-400">
        <div>
          <h2 className="md:pt-1 pb-1 md:pb-2 text-lg md:text-3xl font-medium _leading-5 max-w-72 font-playfair">
            {name}
          </h2>
          <p className="wrap text-gray-500  text-xs max-w-72">{children}</p>
        </div>
        <div className="mt-4">
          <div className="inline-flex px-2 py-1 md:px-4 md:py-3 text-white bg-gray-950">
            <span className="font-mono text-sm font-light">MWK {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
