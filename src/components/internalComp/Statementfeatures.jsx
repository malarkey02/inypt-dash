import "../../styles/internal-styles/statement-features.css";

function StatementFeature(props) {
  return (
    <div className="feature-card">
      <div
        className="feat-banner"
        style={{ backgroundColor: props.banner }}
      ></div>
      <span className="feat-title">{props.title}</span>
      <span className="feat-desc">{props.desc}</span>
    </div>
  );
}

export default StatementFeature;
