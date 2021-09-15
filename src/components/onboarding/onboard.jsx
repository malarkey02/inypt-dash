import "../../styles/internal-styles/onboarding.css";
import NavigateLink from "./navlink";

function Onboard(props) {
  //embed link from props?
  // again, you handle db side so this upto you
  return (
    <div className="container">
      <div className="video-embed">
        <iframe
          name="onboarding-video"
          id="onboarding-video"
          // width="560"
          // height="315"
          // src="https://www.youtube.com/embed/oHdliuRaP04"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="nav-pane">
        {/* show list of links... here*/}
        <NavigateLink
          description="Your absence is required"
          duration="6 mins"
          src="https://www.youtube.com/embed/oHdliuRaP04?autoplay=1"
        />

        <NavigateLink
          description="Dont click plis"
          duration="6 mins"
          src="https://www.youtube.com/embed/7rE_FG2xauA?autoplay=1&start=8"
        />
        {/* "description" and "duration" values from YT api i think */}
      </div>
    </div>
  );
}

export default Onboard;
