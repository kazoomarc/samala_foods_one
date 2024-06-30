/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import Header from './ui/Header';
import AwayArrow from './ui/AwayArrow';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <FeaturedMenus />
    </main>
  );
}

function Hero() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <div className="py-6 md:py-16">
        <h1 className="max-w-lg text-3xl sm:text-5xl italic font-thin text-orange-600 font-playfair ">
          Samala Foods, Where Every Bite is a Delight!
        </h1>
        <p className="mt-4 italic text-gray-500">
          Discover culinary excellence at Samala Foods, where every dish is
          crafted with fresh ingredients and passion. Join us for an
          unforgettable dining experience in a cozy, welcoming atmosphere.
        </p>
      </div>

      <div className="w-full [_height:400px] overflow-hidden rounded-lg">
        <Image
          src="/images/hero-image.jpg"
          alt="People eating at and enjoying samala foods."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
          width={2200}
          height={1000}
        />
      </div>
    </div>
  );
}

function TestimonialCard({
  children,
  name,
  title,
}: {
  children?: React.ReactNode;
  name?: string;
  title?: string;
}) {
  return (
    <div className="mt-6 md:mt-0 md:px-2 italic">
      <p className="text-base text-gray-500 text-balance">"{children}"</p>
      <p className="sm:mt-2 text-base font-medium text-orange-400 font-playfair">
        ~ {name}
      </p>
      <p className="-mt-2 md:-mt-1 font-thin text-gray-400 text-xs/7">
        {title}
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className=" pb-0 md:pb-16 py-6 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      <h2 className="text-xl sm:text-4xl italic font-medium text-orange-600 font-playfair -mb-3 md:mb-6">
        Testimonials
      </h2>
      <div className="md:gap-4 sm:flex">
        <TestimonialCard
          name="David Banda"
          title="Food Enthusiast and Connoisseur"
        >
          Grace is a gem in the culinary world. The ambiance exudes
          sophistication, while the service is attentive and warm. The dishes?
          Pure artistry on a plate, crafted with the finest ingredients. It's a
          haven for anyone who appreciates gourmet dining.
        </TestimonialCard>
        <TestimonialCard name="Chisomo Johnson" title="Travel Writer">
          Having experienced dining at numerous top-notch establishments, Grace
          is a standout. The atmosphere is both inviting and refined,
          complemented perfectly by flawless service. The culinary experience
          surpassed all expectations—each dish a masterpiece of flavor and
          presentation.
        </TestimonialCard>
        <TestimonialCard name="Emily Bango" title="Food Critic and Blogger">
          I've been fortunate to dine at many fine restaurants, but Grace stands
          out as truly exceptional. The attention to detail, from the elegant
          ambiance to the impeccable service, is unparalleled. And the food?
          Absolutely divine. A must-visit for any food enthusiast.
        </TestimonialCard>
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
    <div className="flex flex-col _justify-center gap-5 ring ring-black/5 bg-white">
      <div className="relative flex ml-0 overflow-hidden _w-96 flex-shrink-0 md:shrink-0 aspect-square">
        <img
          src={img}
          className="absolute inset-0 top-0 object-cover w-full aspect-square"
          alt=""
        />
      </div>

      <div className="flex flex-col px-3 pb-4 justify-between _bg-lime-400">
        <div>
          <h2 className="md:pt-1 pb-1 md:pb-2 text-lg md:text-3xl font-medium _leading-5 max-w-72 font-playfair">
            {title}
          </h2>
          <p className="wrap text-gray-500  text-xs max-w-72">{children}</p>
        </div>
        <div className="mt-4">
          <div className="inline-flex px-2 py-1 md:px-4 md:py-3 text-white bg-gray-950">
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
    <div className="py-10 px-4 _hidden sm:block sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 _bg-gray-100/95">
      <h2 className="text-xl sm:text-4xl italic font-medium text-orange-600 font-playfair mb-6">
        Featured Menus
      </h2>

      <div className="_flex _flex-col grid grid-cols-1 md:grid-cols-2 gap-10">
        <MenuOverview
          title="Shared Moments"
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
          ingredients and delightful dishes.
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
