import React, { useEffect } from "react";
import SwiperSlider from "../Components/SwiperSlider/SwiperSlider";

import Container from "../Components/Container/Container";

import useLoadData from "../Hooks/useLoadData";
import PopularCard from "../Components/Home/PopularCard";
import LoadingComponent from "../Components/Loading/LoadingComponent";

import LoadingPage from "../Components/Loading/LoadingPage";
import { useLocation } from "react-router";
import PlantCareTips from "../Components/Home/PlantCareTips";
import GreenExpart from "../Components/Home/GreenExpart";
import PlantWeek from "../Components/Home/PlantWeek";

const HomePage = () => {
  const { data, loading } = useLoadData();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <>
      <title>GreenNest - Home</title>
      <div>
        <Container className="mt-5">
      

          <SwiperSlider></SwiperSlider>
        </Container>

        <section className="bg-gray-50 py-12">
          <Container>
            <h3 className="text-center text-2xl lg:text-4xl font-semibold pb-8 text-accent">
              Top Rated Indoor Plants
            </h3>

            {loading ? (
              <LoadingComponent></LoadingComponent>
            ) : (
              <section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {data.map((tree) => (
                  <PopularCard
                    key={tree.plantId}
                    tree={tree}
                    loading={loading}
                  ></PopularCard>
                ))}
              </section>
            )}
          </Container>
        </section>

        <PlantCareTips></PlantCareTips>

        <PlantWeek></PlantWeek>

        <GreenExpart></GreenExpart>
      </div>
    </>
  );
};

export default HomePage;
