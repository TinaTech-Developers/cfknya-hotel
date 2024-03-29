import HeroSection from "../components/HeroSection";
import RoomCard from "../components/RoomCard";
import View from "../components/View";
import Layout from "../components/Layout";

function Rooms() {
  return (
    <Layout>
      <div className="pt-16">
        <HeroSection title={"Our Accomodation"} subtitle={""} />
        <div className="flex flex-wrap items-center justify-center gap-10 py-20">
          <RoomCard />
        </div>

        <View />
      </div>
    </Layout>
  );
}

export default Rooms;
