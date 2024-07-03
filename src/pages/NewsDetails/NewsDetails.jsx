import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSide from "../Shared/RightSide/RightSide";
import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
    const news=useLoaderData()
    const [data,setData]=useState({})
    useEffect(()=>{
        const singleData=news.find(item=>item._id==id)
        setData(singleData)
    },[id,news])
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h2>Dragon News</h2>
                    <div className="card card-compact bg-base-100 shadow-xl p-3">
                        <figure>
                            <img
                                src={data.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data.details}</p>
                            <div className="card-actions justify-end">
                                <Link to={-1}><button className="btn btn-primary">Go Back Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;