import { Link, useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData()
    return (
        <div className="container mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className="col-span-2">
                    <h2>Dragon News Home</h2>

                    <div className="flex flex-col gap-6">
                        {
                            news.slice(0, 2).map(item => <NewsCard key={item._id} item={item}></NewsCard>)
                        }
                    </div>
                    <div className="flex flex-col items-center mt-6">
                        <Link to="/allNews">
                        <button className="btn bg-green-600">
                            See All News
                            </button></Link>
                    </div>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;