import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";

const HomePage = () => {
  return (
    <div className="bg-wishquire-background">
      <div className="min-w-[500px] max-w-[1500px] m-auto">
        {<Carousel />}
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"Gifts for Gamers"}
            img={"../images/home_grid_13.jpg"}
            link={"Shop now"}
          />

          <HomePageCard
            title={"Deals on Laptops"}
            img={"../images/home_grid_10.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Affordable Tableware"}
            img={"../images/home_grid_16.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"Shop Gifts"}
            img={"../images/home_grid_12.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"New Deals"}
            img={"../images/home_grid_11.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Smartwatches"}
            img={"../images/home_grid_15.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Laptops for all needs"}
            img={"../images/home_grid_14.jpg"}
            link={"Learn more"}
          />

          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="m-auto"
            src={"../images/carousel_12.png"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
