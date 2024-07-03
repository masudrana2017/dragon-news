import { useLoaderData } from "react-router-dom";
import AllNewsCard from "../AllNewsCard/AllNewsCard";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const AllNews = () => {
    const news=useLoaderData()
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <h2>{news.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    news.map(item=><AllNewsCard key={item._id} item={item}></AllNewsCard>)
                }
            </div>
        </div>
    );
};

export default AllNews;