/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

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

function Header() {
  return (
    <div className="bg-orange-500 font-medium text-base py-4">
      <div className="px-28">
        <nav className="flex justify-between">
          <div>
            <span>Samala</span>
          </div>
          <div className="flex gap-8">
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="px-28">
      <div className="py-16">
        <h1 className="max-w-lg text-5xl font-thin italic font-playfair [color:#bb4b36]">
          Samala Foods, Where Every Bite is a Delight!
        </h1>
        <p className="text-gray-500 mt-4 italic">
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
      <p className="text-gray-500 text-balance text-base">
        "Grace is a gem in the culinary world. The ambiance exudes
        sophistication, while the service is attentive and warm. The dishes?
        Pure artistry on a plate, crafted with the finest ingredients. It's a
        haven for anyone who appreciates gourmet dining."
      </p>
      <p className="text-orange-400 font-medium font-playfair mt-2">
        ~ David Martinez
      </p>
      <p className="text-gray-400 font-thin mt-1 text-sm/7">
        Food Enthusiast and Connoisseur
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="px-28 py-16">
      <div className="md:flex gap-4">
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
    <div className="flex gap-5 justify-center _bg-yellow-500">
      <div className="relative flex ml-0 overflow-hidden w-96 shrink-0 aspect-square">
        <img
          src={img}
          className="absolute inset-x-0 top-0 object-cover w-full aspect-square"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between _bg-lime-400">
        <div>
          <h2 className="font-medium text-3xl py-4 font-playfair">{title}</h2>
          <p className="wrap">{children}</p>
        </div>
        <div>
          <div className="inline-flex py-3 px-4 text-white bg-gray-950">
            <a className="text-sm font-light font-mono">see menu</a>
            <AwayArrow className="size-4 -mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
function FeaturedMenus() {
  return (
    <div className="px-28 _bg-red-700 py-10">
      <div className="flex flex-col gap-10">
        <MenuOverview
          title="Enjoy Dates with Your Loved Ones"
          img="images/feature-4.jpg"
          alt="alt"
        >
          Make plans for your dinner at Samala Foods, where every meal is a
          celebration of flavors and memories.
        </MenuOverview>
        <MenuOverview
          title="Breakfast Delights"
          img="images/feature-2.jpg"
          alt="alt"
        >
          Start your day with our delicious breakfast options, featuring fresh
          ingredients and delightful combinations.
        </MenuOverview>
        <MenuOverview
          title="Lunch Favorites"
          img="images/feature-3.jpg"
          alt="alt"
        >
          Discover our lunch specials that bring together the best of culinary
          creativity and seasonal ingredients.
        </MenuOverview>
        <MenuOverview
          title="Dinner Extravaganza"
          img="images/feature-4.jpg"
          alt="alt"
        >
          Indulge in our dinner offerings, perfect for romantic evenings, family
          gatherings, or special celebrations.
        </MenuOverview>
        <MenuOverview
          title="Desserts & Drinks"
          img="images/feature-5.jpg"
          alt="alt"
        >
          End your meal on a sweet note with our decadent desserts and
          refreshing drinks, crafted to perfection.
        </MenuOverview>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-14">
      <div
        id="contact"
        className="px-28 py-12 bg-orange-400 text-white flex justify-end gap-24"
      >
        <div className="">
          <h3 className="font-bold">contact</h3>
          <div className="space-y-1 mt-3">
            <p className="text-xs font-mono">info@samalafoods.com</p>
            <p className="text-xs font-mono">(265) 889-9955-88</p>
            <p className="text-xs font-mono">(265) 983-2285-22</p>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold">social</h3>
          <div className="space-y-1 mt-3">
            <div className="text-xs font-mono flex gap-[2px]">
              <span>(X) twitter</span>
              <AwayArrow className="size-2" />
            </div>
            <div className="text-xs font-mono flex gap-[2px]">
              <span>instagram</span>
              <AwayArrow className="size-2" />
            </div>

            <div className="text-xs font-mono flex gap-[2px]">
              <span>facebook </span>
              <AwayArrow className="size-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-28 text-xs py-4 text-white bg-orange-500">
        <span>
          <a href="#" className="font-mono">
            &copy; Joel Mwala 2024
          </a>
        </span>
      </div>
    </div>
  );
}

function AwayArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
