import Image from 'next/image';
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
      <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 _bg-orange-800">
        <div id="breakfast" className="mt-8">
          <h2 className="mb-6 text-4xl font-medium text-orange-500 font-playfair">
            Break Fast
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            <MenuCard
              img="/images/menu/menu-img-01.jpg"
              name="Sunrise Delight"
              price="4,200"
            >
              A delicious blend of scrambled eggs, crispy bacon, and buttery
              toast to start your day.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-02.jpg"
              name="Tropical Fruit Bowl"
              price="3,800"
            >
              A refreshing mix of seasonal fruits topped with a dollop of Greek
              yogurt and honey.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-03.jpg"
              name="Malawian Porridge"
              price="2,400"
            >
              Traditional Malawian porridge made from maize flour, served with a
              side of sugar and milk.
            </MenuCard>
          </div>
        </div>

        <div id="lunch" className="mt-16">
          <h2 className="mb-6 text-4xl font-medium text-orange-500 font-playfair">
            Lunch
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            <MenuCard
              img="/images/menu/menu-img-04.jpg"
              name=" Chambo Delight"
              price="14,500"
            >
              Fresh Chambo fish grilled to perfection, served with rice and
              fresh seasonal vegetables.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-05.jpg"
              name="Beef Stir-Fry"
              price="12,000"
            >
              Tender strips of beef stir-fried with colorful bell peppers and
              onions, served with jasmine rice.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-06.jpg"
              name="Veggie Wrap"
              price="8,500"
            >
              A healthy wrap filled with grilled vegetables, hummus, and a hint
              of spice.
            </MenuCard>
          </div>
        </div>

        <div id="dinner" className="mt-16">
          <h2 className="mb-6 text-4xl font-medium text-orange-500 font-playfair">
            Dinner
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            <MenuCard
              img="/images/menu/menu-img-07.jpg"
              name="Chicken Khwasu"
              price="22,000"
            >
              Spicy chicken curry made with local spices, served with rice and a
              side of naan.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-08.jpg"
              name="Grilled Lamb Chops"
              price="28,000"
            >
              Succulent lamb chops grilled to your liking, served with mashed
              potatoes and steamed vegetables.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-09.jpg"
              name="Vegetarian Lasagna"
              price="15,000"
            >
              Layers of pasta, fresh vegetables, and creamy cheese baked to
              golden perfection.
            </MenuCard>
          </div>
        </div>

        <div id="drinks" className="mt-16">
          <h2 className="mb-6 text-4xl font-medium text-orange-500 font-playfair">
            Drinks
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            <MenuCard
              img="/images/menu/menu-img-10.jpg"
              name="Mango Smoothie"
              price="3,500"
            >
              A refreshing smoothie made with fresh locally grown mangoes,
              yogurt, and a hint of honey.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-11.jpg"
              name="Espresso"
              price="2,400"
            >
              A strong, extravagant and rich espresso made from freshly ground
              beans here in Malawi.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-12.jpg"
              name=" Fresh Lemonade"
              price="3,000"
            >
              A zesty lemonade made with fresh lemons mint, and a touch of
              sweetness from our organic farms.
            </MenuCard>
          </div>
        </div>

        <div id="desserts" className="mt-16">
          <h2 className="mb-6 text-4xl font-medium text-orange-500 font-playfair">
            Desserts
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            {/*NOTE: */}
            <MenuCard
              img="/images/menu/menu-img-13.jpg"
              name="Banana Fritters"
              price="5,000"
            >
              Sweet banana fritters drizzled with honey and served with vanilla
              ice cream.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-14.jpg"
              name="Chocolate Lava Cake"
              price="8,000"
            >
              A warm chocolate cake with a gooey center, served with a scoop of
              vanilla ice cream.
            </MenuCard>
            <MenuCard
              img="/images/menu/menu-img-15.jpg"
              name="Fresh Fruit Salad"
              price="4,200"
            >
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
  children,
  name,
  img,
  price,
  alt,
}: {
  name?: string;
  img: string;
  alt?: string;
  children: React.ReactNode;
  price?: string;
}) {
  return (
    <div className="flex flex-col gap-5 bg-white _justify-center ring ring-black/5">
      <div className="relative flex flex-shrink-0 ml-0 overflow-hidden _w-96 md:shrink-0 aspect-square">
        <Image src={img} alt="alt" quality={50} fill />

        {/* <img
          src={img}
          className="absolute inset-0 top-0 object-cover w-full aspect-square"
          alt=""
        /> */}
      </div>

      <div className="flex flex-col justify-between px-3 pb-4 _bg-lime-400">
        <div>
          <h2 className="pb-1 text-lg font-medium md:pt-1 md:pb-2 md:text-3xl _leading-5 max-w-72 font-playfair">
            {name}
          </h2>
          <p className="text-xs text-gray-500 wrap max-w-72">{children}</p>
        </div>
        <div className="mt-4">
          <div className="inline-flex px-2 py-1 text-white md:px-4 md:py-3 bg-gray-950">
            <span className="font-mono text-sm font-light">MWK {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
