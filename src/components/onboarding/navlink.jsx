import "../../styles/internal-styles/onboard-nav-links.css";

function NavigateLink(props) {
  return (
    <div className="link-container">
      <input type="checkbox" name="" id="" />
      <div className="column-wrap">
        <a className="desc" href={props.src} target="onboarding-video">
          {props.description}
        </a>
        <div className="meta">
          <div className="duration">
            <img src="D:/Anupam/Web Dev docs/inypt-dash/src/img-assets/play-btn.svg" />
            {props.duration}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigateLink;
