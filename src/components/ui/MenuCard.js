import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between mb-2">
          <h5 className="card-title text-success fw-bold">{item.name}</h5>
          <p className="text-success fw-bold mb-0">{item.price}</p>
        </div>
        <p className="card-text text-muted">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
