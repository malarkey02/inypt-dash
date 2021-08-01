import "../../styles/internal-styles/onboard-nav-links.css";

function NavigateLink(props) {
  return (
    <div className="link-container">
      <input type="checkbox" name="" id="" />
      <div className="desc">{props.description}</div>
      <div className="meta">
        <div className="duration">
          {/* <img src="D:/Anupam/Web Dev docs/inypt-dash/src/img-assets/play-btn.svg" alt="durn" /> */}
          {props.duration}
        </div>
      </div>
    </div>
  );
}

export default NavigateLink;
