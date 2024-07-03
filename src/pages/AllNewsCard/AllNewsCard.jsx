import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllNewsCard = ({item}) => {
    const {_id, image_url, author, details, title,rating,total_view } = item;
    return (
        <div>
            <div className="bg-slate-200 flex justify-between">
                <div className="p-2 flex gap-4">
                    <img src={author.img} alt="" className="w-16 rounded-full" />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center text-3xl">
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className="card bg-base-100  shadow-xl p-2">
                <h2>{title}</h2>
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>
                        {
                            details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className="text-violet-600"> Read More...</Link></p> : <p>{details}</p>
                        }
                    </p>
                    <hr />
                    <div className="flex justify-between items-center mt-2">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <p className="ml-4">{rating.number}</p>
                        </div>
                        <div className="flex gap-2">
                        <FaEye />
                        <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllNewsCard;