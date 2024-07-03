import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import img1 from "../../../assets/image/1.png"
import img2 from "../../../assets/image/2.png"
import img3 from "../../../assets/image/3.png"
import { CiCalendar } from "react-icons/ci";
const LeftSide = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className="bg-slate-400">
                <h2 className="text-center p-4">Latest News</h2>
            </div>
            <div className="p-2">
                {
                    categories.map(category=><Link to={`/category/${category.id}`} key={category.id}><h2 className="ml-6 mt-4 font-bold" key={category.id}>{category.name}</h2></Link>)
                }
            </div>
            <div className="mt-6">
                <img src={img1} alt=""/>
                <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-3">
                    <p>Sports</p>
                    <div className="flex gap-2">
                    <CiCalendar />
                    <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <img src={img2} alt=""/>
                <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-3">
                    <p>Sports</p>
                    <div className="flex gap-2">
                    <CiCalendar />
                    <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <img src={img3} alt=""/>
                <h2>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className="flex gap-3">
                    <p>Sports</p>
                    <div className="flex gap-2">
                    <CiCalendar />
                    <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;