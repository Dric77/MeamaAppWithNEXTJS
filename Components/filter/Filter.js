import Contaier from "../container/Container.js";

import classes from "./Filter.module.css";

function Filter({ data, filterHanlder, choosedOption }) {
  return (
    <Contaier>
      <ul className={classes.coktailFilter}>
        {data &&
          data.subCategories &&
          data.subCategories.map((el) => (
            <li
              key={el.id}
              className={choosedOption === el.sortIndex && classes.active}
              onClick={filterHanlder}
              value={el.sortIndex}
            >
              {el.name}
            </li>
          ))}
      </ul>
    </Contaier>
  );
}

export default Filter;
