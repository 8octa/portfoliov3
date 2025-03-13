import { gridItems } from "../index.js";
import Card from "./Card.jsx";

const Grid = () => {
  return (
    <section
      id="grid"
      className="w-full pt-80 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center "
    >
      {gridItems.map(({ id, title, description, className }) => (
        <Card key={id} title={title} description={description} />
      ))}
    </section>
  );
};

export default Grid;
