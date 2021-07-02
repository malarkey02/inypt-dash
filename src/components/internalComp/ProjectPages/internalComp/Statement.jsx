import "./styles/statement.css";
import StatementBreakdown from "./StatementBreakdown";


function Statement(props) {
  //problem passing gradient
  return (
    <div className="project-statement">
        <h2 className="statement-header">Project Statement</h2>
        <div className="proj-smt-content">
        {props.data[0]} 
        <StatementBreakdown data={props.breakdownData[0]} color="#F2994A" />
        {props.data[1]} 
        <StatementBreakdown data={props.breakdownData[1]} color="#27AE60" />
        {props.data[2]} 
        <StatementBreakdown data={props.breakdownData[2]} color="#7000FF" />
      </div>
    </div>
  );
}

export default Statement;