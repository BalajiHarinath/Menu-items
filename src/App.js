import "./styles.css";
import { useState } from "react";
import Data from "./data";
import Categories from "./categories";
import Display from "./display";

let sections = ["all"];
let uniqueSections = [];
const filteredSections = function () {
  sections.forEach((item) => {
    if (!uniqueSections.includes(item)) {
      uniqueSections.push(item);
    }
  });
};
const section = function () {
  Data.forEach((item) => {
    const cat = item.category;
    sections.push(cat);
  });
  filteredSections();
};

export default function App() {
  section();
  const [menu, setMenu] = useState(Data);
  const [category, setCategory] = useState(uniqueSections);
  function filterItems(incat) {
    // console.log(incat);
    // console.log(category);
    if (incat === "all") {
      setMenu(Data);
      return;
    }
    const filteredItem = Data.filter((item) => item.category === incat);
    // console.log(filteredItem);
    setMenu(filteredItem);
  }

  return (
    <main className="App">
      <section>
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <Categories filterItems={filterItems} category={category} />
        <Display menu={menu} />
      </section>
    </main>
  );
}
