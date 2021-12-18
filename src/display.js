const display = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="desc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default display;
