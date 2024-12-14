import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">Should be Home going</Link>
        <Link className="mr-12" to="/">Should be Home going</Link>
        <Link className="mr-12" to="/">Should be Home going</Link>
        <Link className="mr-12" to="/">Welcome to the Home</Link>
        <Link className="mr-12" to="/">Das Wetter is schon</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
