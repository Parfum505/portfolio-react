import React from "react";

const Filter = (props) =>  {
    return (
        <ul className="filter">
            {
                props.categories.map((category, i) => {
                    const activeFilter = props.activFilter === category ? 'active rubberBand' : '';
                   return (
                        <li key={i}
                            className={"filter-btn animated " + activeFilter}
                            onClick={() => props.clicked(category)}>{category}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Filter;