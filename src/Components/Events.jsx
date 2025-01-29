import { useEffect, useState } from "react"; 

const Events = () => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    fetch("/ravi.svg")  // Replace with your actual SVG file name in the public folder
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);  // Set the raw SVG content
      })
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  return (
    <div
      className="rotating-svg-container"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default Events;
