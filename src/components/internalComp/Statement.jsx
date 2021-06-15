import "../../styles/internal-styles/statement.css";
import StatementBreakdown from "./statementBreakdown";
import ProjectStatementHead from "../compText/projectstatementhead";

function Statement(props) {
  //problem passing gradient
  return (
    <div className="project-statement">
      <ProjectStatementHead />
      <div className="proj-smt-content">
        {props.data} <StatementBreakdown color="#F2994A" />{" "}
        <StatementBreakdown color="linear-gradient(218.17deg, #7000FF 14.96%, rgba(44, 183, 226, 0) 116.11%)" />{" "}
        <StatementBreakdown color="#27AE60" />
      </div>
    </div>
  );
}

export default Statement;
