import DealsOfTheDay from "../components/DealsOfTheDay"
import Hero from "../components/Hero"
import PopularProducts from "../components/PopularProducts"
import RecentlyAdded from "../components/RecentlyAdded"
import ShopByCategories from "../components/ShopByCategories"
import TopRated from "../components/TopRated"
import TopSelling from "../components/TopSelling"
import TrendingProducts from "../components/TrendingProducts"


const Home = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <DealsOfTheDay />
      <ShopByCategories />
      <div className="flex gap-5">
        <TopSelling />
        <TrendingProducts />
        <RecentlyAdded />
        <TopRated />
      </div>
    </>
  )
}

export default Home