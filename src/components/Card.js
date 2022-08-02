const Card = (props) => {
  const classes = "card" + props.className;
  return <div className={classes}>{props.children}</div>;
  //   insert css here for resuable css, white bg a top border
};

export default Card;
