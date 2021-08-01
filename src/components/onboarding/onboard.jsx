import "../../styles/internal-styles/onboarding.css";
import NavigateLink from "./navlink";

function Onboard(props) {
  //embed link from props?
  // again, you handle db side so this upto you
  return (
    <div className="container">
      <div className="video-embed">
        <iframe
          //   width="560"
          //   height="315"
          src="https://www.youtube.com/embed/73vRi5CS81M" // link here
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="nav-pane">
        Nav pane
        {/* show list of links... here*/}
        <NavigateLink description="go fuck yoself" duration="6 mins" />
        {/* "description" and "duration" values from YT api i think */}
      </div>
    </div>
  );
}

export default Onboard;
