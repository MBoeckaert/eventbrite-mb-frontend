import "../App.css";

const EventImage = (props) => {
  return (
    <>
      <img alt="pictureEvent" src={props.img} className="img" />
    </>
  );
};

export default EventImage;
