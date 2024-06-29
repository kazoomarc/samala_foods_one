/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import Header from './ui/Header';
import AwayArrow from './ui/AwayArrow';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Testimonials />
      <FeaturedMenus />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <div className="px-28">
      <div className="py-16">
        <h1 className="max-w-lg text-5xl italic font-thin text-orange-500 font-playfair ">
          Samala Foods, Where Every Bite is a Delight!
        </h1>
        <p className="mt-4 italic text-gray-500">
          Discover culinary excellence at Samala Foods, where every dish is
          crafted with fresh ingredients and passion. Join us for an
          unforgettable dining experience in a cozy, welcoming atmosphere.
        </p>
      </div>

      <div className="w-full [height:400px] overflow-hidden rounded-lg">
        <Image
          src="/images/hero-image.jpg"
          alt="People eating at and enjoying samala foods."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
          width={1200}
          height={1000}
        />
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="italic">
      <p className="text-base text-gray-500 text-balance">
        "Grace is a gem in the culinary world. The ambiance exudes
        sophistication, while the service is attentive and warm. The dishes?
        Pure artistry on a plate, crafted with the finest ingredients. It's a
        haven for anyone who appreciates gourmet dining."
      </p>
      <p className="mt-2 font-medium text-orange-400 font-playfair">
        ~ David Martinez
      </p>
      <p className="mt-1 font-thin text-gray-400 text-sm/7">
        Food Enthusiast and Connoisseur
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="py-16 px-28">
      <div className="gap-4 md:flex">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

function MenuOverview({
  children,
  title,
  img,
  link,
  alt,
}: {
  children: React.ReactNode;
  title?: string;
  img?: string;
  link?: string;
  alt?: string;
}) {
  return (
    <div className="flex justify-center gap-5  _bg-yellow-500">
      <div className="relative flex ml-0 overflow-hidden w-96 shrink-0 aspect-square">
        <img
          src={img}
          className="absolute inset-x-0 top-0 object-cover w-full aspect-square"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between _bg-lime-400">
        <div>
          <h2 className="pt-4 pb-2 text-3xl font-medium max-w-72 font-playfair">
            {title}
          </h2>
          <p className="wrap text-gray-500 max-w-72">{children}</p>
        </div>
        <div>
          <div className="inline-flex px-4 py-3 text-white bg-gray-950">
            <a className="font-mono text-sm font-light" href={link}>
              see menu
            </a>
            <AwayArrow className="-mb-1 size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
function FeaturedMenus() {
  return (
    <div className="py-10 px-28 _bg-red-700">
      <div className="flex  flex-col gap-10">
        <MenuOverview
          title="Enjoy Dates with Your Loved Ones"
          img="images/feature-4.jpg"
          link="/menu"
          alt="alt"
        >
          Make plans for your dinner at Samala Foods, where every meal is a
          celebration of flavors and memories.
        </MenuOverview>
        <MenuOverview
          title="Breakfast Delights"
          img="images/feature-2.jpg"
          link="/menu#breakfast"
          alt="alt"
        >
          Start your day with our delicious breakfast options, featuring fresh
          ingredients and delightful combinations.
        </MenuOverview>
        <MenuOverview
          title="Lunch Favorites"
          img="images/feature-3.jpg"
          link="/menu#lunch"
          alt="alt"
        >
          Discover our lunch specials that bring together the best of culinary
          creativity and seasonal ingredients.
        </MenuOverview>
        <MenuOverview
          title="Dinner Extravaganza"
          img="images/feature-4.jpg"
          link="/menu#dinner"
          alt="alt"
        >
          Indulge in our dinner offerings, perfect for romantic evenings, family
          gatherings, or special celebrations.
        </MenuOverview>
        <MenuOverview
          title="Desserts & Drinks"
          img="images/feature-5.jpg"
          link="/menu#desserts"
          alt="alt"
        >
          End your meal on a sweet note with our decadent desserts and
          refreshing drinks, crafted to perfection.
        </MenuOverview>
      </div>
    </div>
  );
}
