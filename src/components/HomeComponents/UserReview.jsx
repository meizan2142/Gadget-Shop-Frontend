import Review from "./Review";

const UserReview = () => {
    return (
        <div className="2xl:flex 2xl:justify-around md:grid md:grid-cols-2 md:gap-4 md:justify-evenly">
            <Review/>
            <Review/>
            <Review/>
            <Review/>
        </div>
    );
};

export default UserReview;