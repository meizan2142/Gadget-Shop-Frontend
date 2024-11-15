import Accordion from "../../components/HomeComponents/Accordion";
import FetaturedProducts from "../../components/HomeComponents/FetaturedProducts";
import Hero from "../../components/HomeComponents/Hero";
import UserReview from "../../components/HomeComponents/UserReview";

const Home = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div className="my-24 mx-10">
                <h1 className="my-16 text-3xl font-bold text-center">Fetured Products</h1>
                <FetaturedProducts/>
            </div>
            <div className="my-24 mx-10">
                <h1 className="my-16 text-3xl font-bold text-center">User Review</h1>
                <UserReview/>
            </div>
            <div className="my-24 mx-10">
                <h1 className="my-16 text-3xl font-bold text-center">Frequently Asked Question</h1>
                <Accordion/>
            </div>
        </div>
    );
};

export default Home;