function StatementBreakdown(props) {
    const borderStyle = "1.5px solid" + props.color;

    const styles = { border: borderStyle, display: "inline"};
    return <div style={styles}>{props.data}</div>;
  }
  
  export default StatementBreakdown;