const Square = (props) => {
  const squareStyle = {
    animation: props.isWinningSquare ? "blink 1s infinite" : "none",
  };
  return (
    <>
      <div className="square" onClick={props.onClick} style={squareStyle}>
        <h4>{props.value}</h4>
      </div>
    </>
  );
};

export default Square;
