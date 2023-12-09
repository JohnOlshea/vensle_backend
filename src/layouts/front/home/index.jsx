import Header from "components/front/header/Header";
import Hero from "components/front/hero/Hero";
import Categories from "components/front/categories/Categories";
import Best from "components/front/best/Best";

const Home = () => {
    return (
        <div className="min-h-full">
            <Header />
            <Hero />
            <Categories />
            <Best />
        </div>
    )
}

export default Home;