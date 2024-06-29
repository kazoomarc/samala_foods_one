import { title } from 'process';
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
            <MenuCard name="Sunrise Delight">
              A delicious blend of scrambled eggs, crispy bacon, and buttery
              toast to start your day.
            </MenuCard>
            <MenuCard name="Tropical Fruit Bowl">
              A refreshing mix of seasonal fruits topped with a dollop of Greek
              yogurt and honey.
            </MenuCard>
            <MenuCard name="Malawian Porridge">
              Traditional Malawian porridge made from maize flour, served with a
              side of sugar and milk.
            </MenuCard>
          </div>
        </div>

        <div id="lunch" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Lunch
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard name=" Chambo Delight">
              Fresh Chambo fish grilled to perfection, served with rice and
              fresh seasonal vegetables from our gardens.
            </MenuCard>
            <MenuCard name="Beef Stir-Fry">
              Tender strips of beef stir-fried with colorful bell peppers and
              onions, served with jasmine rice.
            </MenuCard>
            <MenuCard name="Veggie Wrap">
              A healthy wrap filled with grilled vegetables, hummus, and a hint
              of spice.
            </MenuCard>
          </div>
        </div>

        <div id="dinner" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Dinner
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard name="Malawian Chicken Curry">
              Spicy chicken curry made with local spices, served with rice and a
              side of naan.
            </MenuCard>
            <MenuCard name="Grilled Lamb Chops">
              Succulent lamb chops grilled to your liking, served with mashed
              potatoes and steamed vegetables.
            </MenuCard>
            <MenuCard name="Vegetarian Lasagna">
              Layers of pasta, fresh vegetables, and creamy cheese baked to
              golden perfection.
            </MenuCard>
          </div>
        </div>

        <div id="drinks" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Drinks
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <MenuCard name="Mango Smoothie">
              A refreshing smoothie made with fresh locally grown mangoes,
              yogurt, and a hint of honey.
            </MenuCard>
            <MenuCard name="Espresso">
              A strong, extravagant and rich espresso made from freshly ground
              beans here in Malawi.
            </MenuCard>
            <MenuCard name=" Fresh Lemonade">
              A zesty lemonade made with fresh lemons mint, and a touch of
              sweetness from our organic farms.
            </MenuCard>
          </div>
        </div>

        <div id="desserts" className="mt-16">
          <h2 className="text-4xl font-medium font-playfair text-orange-500">
            Desserts
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {/*NOTE: */}
            <MenuCard name="Malawian Banana Fritters">
              Sweet banana fritters drizzled with honey and served with vanilla
              ice cream.
            </MenuCard>
            <MenuCard name="Chocolate Lava Cake ">
              A warm chocolate cake with a gooey center, served with a scoop of
              vanilla ice cream.
            </MenuCard>
            <MenuCard name="Fresh Fruit Salad">
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
      <div className="relative h-72 shrink-0">
        <img src="/images/breakfast-1.jpg" alt="alt text here" />
      </div>
      <div className="relative left-0 bottom-0 bg-slate-400 px-4 py-3">
        <h3 className="text-2xl">{name}</h3>
        <p>{children}</p>
        <div className="inline-flex mt-4 px-4 py-3 text-white bg-gray-950">
          <span className="font-mono text-sm font-light">MWK 4,200</span>
        </div>
      </div>
    </div>
  );
}
