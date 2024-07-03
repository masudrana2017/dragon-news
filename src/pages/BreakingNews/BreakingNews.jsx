import Marquee from "react-fast-marquee"
const BreakingNews = () => {
    return (
        <div className="container mx-auto bg-slate-300">
            <div className="flex gap-4 items-center p-2">
                <button className="btn btn-secondary border-none">Latest</button>
                <Marquee pauseOnHover={true}>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;