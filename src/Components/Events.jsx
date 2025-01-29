import { useEffect, useState } from "react"; 
import { ReactSVG } from "react-svg";
import EventSvg from "./EventSvg";

const Events = () => {
  const [svgContent, setSvgContent] = useState(null);

  return (
    <div
      className="rotating-svg-container"
    >
      <EventSvg />
    </div>
  );
};

export default Events;
