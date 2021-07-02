function StatementBreakdown(props) {
    const borderStyle = "2px solid" + props.color;

    const styles = { border: borderStyle, display: "inline", borderRadius: "3px"};
    return <div style={styles}>{props.data}</div>;
  }
  
  export default StatementBreakdown;