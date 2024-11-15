import ProductCard from "./ProductCard";

const FetaturedProducts = () => {
    return (
        <div className="2xl:flex 2xl:justify-around md:grid md:grid-cols-2 md:gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FetaturedProducts;