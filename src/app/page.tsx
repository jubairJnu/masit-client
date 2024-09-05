import Achievement from "./component/Achievement";
import Banner from "./component/Banner";
import TopClients from "./component/TopClients";
import WhyChooseUs from "./component/WhyChooseUs";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <TopClients />
      <WhyChooseUs />
      <Achievement />
    </div>
  );
};

export default Homepage;
