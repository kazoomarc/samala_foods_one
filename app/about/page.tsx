import Footer from '../ui/Footer';
import Header from '../ui/Header';

export default function Home() {
  return (
    <>
      <Header />
      <AboutStory />
      <Footer />
    </>
  );
}

function AboutStory() {
  return (
    <div className="px-28 py-10">
      <div>
        <h1>SAMALA</h1>
        <p>
          Welcome to Samala Foods, your perfect spot for memorable meals and
          great company. Nestled in the heart of Zomba, our restaurant is the
          ideal place to meet up with friends and family over a delicious meal.
        </p>
        <p>
          At Samala Foods, we take pride in serving the finest dishes made from
          the freshest ingredients. Our talented chefs craft each meal with
          passion and precision, ensuring every bite is a delight. We strive to
          create a warm and inviting atmosphere where everyone feels at home.
        </p>
        <p>
          Our founders, Mr Kenedy Samala and Agla Samala, believe in running an
          honest and transparent business. Their commitment to excellence and
          integrity is reflected in every aspect of our restaurant, from our
          welcoming service to our carefully curated menu.
        </p>
        <p>
          Come and experience the charm of Samala Foods. Enjoy good food, great
          music, and the company of your loved ones in a place where every meal
          is a celebration.
        </p>
      </div>
    </div>
  );
}
