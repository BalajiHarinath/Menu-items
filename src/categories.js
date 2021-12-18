import { useState } from "react";
import Button from "./button";
const categories = ({ filterItems, category }) => {
  const [selectedButton, setSelectedButton] = useState("");
  function borderButton(ind) {
    setSelectedButton(ind);
  }
  return (
    <div className="btn-container">
      {category.map((item, index) => {
        return (
          // <Button item={item} category={category} key={index} index={index} filterItems={filterItems}/>
          <button
            className="filter-btn"
            onClick={() => {
              filterItems(item);
              borderButton(index);
            }}
            key={index}
            style={
              selectedButton === index
                ? { border: "1px solid rgb(228, 187, 4)" }
                : { border: "none" }
            }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default categories;
