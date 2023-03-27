import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
const Navlist = ({ navStyle }) => {
  const [categoryIsShown, setCategoryIsShown] = useState(false);
  const showCategoryHandler = () => {
    setCategoryIsShown(true);
  };
  const hideCategoryHandler = () => {
    setCategoryIsShown(false);
  };
  return (
    <ul className={navStyle}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Channels</Link>
      </li>
      <li>
        <div>
          <span
            // onMouseEnter={showCategoryHandler}
            // onMouseLeave={hideCategoryHandler}
            onClick={showCategoryHandler}
          >
            Catgories
            <i className="fa fa-sort-down" />
          </span>
          {categoryIsShown && <Category onHideCategory={hideCategoryHandler} />}
        </div>
      </li>
      <li>
        <Link to="/mystuff">My Stuff</Link>
      </li>
    </ul>
  );
};

export default Navlist;
