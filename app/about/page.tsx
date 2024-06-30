/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <AboutStory />
    </>
  );
}

function AboutStory() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-10 _bg-red-400 mb-0">
      <div className=" md:grid grid-cols-2 gap-20 min-h-screen">
        <div className=" mb-10 md:mb-0">
          <h1 className="text-3xl text-orange-700 font-playfair font-bold text-center">
            SAMALA
          </h1>
          <div>
            <div className="space-y-4 mt-8 text-gray-500 text-balance text-center">
              <p>
                Welcome to Samala Foods, your perfect spot for memorable meals
                and great company. Nestled in the heart of Zomba, our restaurant
                is the ideal place to meet up with friends and family over a
                delicious meal.
              </p>
              <p>
                At Samala Foods, we take pride in serving the finest dishes made
                from the freshest ingredients. Our talented chefs craft each
                meal with passion and precision, ensuring every bite is a
                delight. We strive to create a warm and inviting atmosphere
                where everyone feels at home.
              </p>
              <p>
                Our founders, Mr Kenedy Samala and Agla Samala, believe in
                running an honest and transparent business. Their commitment to
                excellence and integrity is reflected in every aspect of our
                restaurant, from our welcoming service to our carefully curated
                menu.
              </p>
              <p>
                Come and experience the charm of Samala Foods. Enjoy good food,
                great music, and the company of your loved ones in a place where
                every meal is a celebration
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] flex justify-center flex-row _shrink-0 sm:h-[400px] md:h-auto w-full mt-14 lg:mt-0 rounded-xl overflow-hidden">
          <img
            className="absolute md:relative inset-0 shrink-0 object-cover object-center _md:h-full md:w-full"
            src="/images/about-3.jpg"
            alt=""
            height="1400px"
          />
        </div>
      </div>
    </div>
  );
}
