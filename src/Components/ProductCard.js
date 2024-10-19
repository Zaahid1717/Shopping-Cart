import React from "react";

function ProductCard(props) {
  return (
    <div className="card col-8 me-4 mb-4" style={{ width: "18rem" }}>
      <img
        src={props.prod.img}
        className="card-img-top"
        alt="..."
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.prod.productName}</h5>
        <h6 className="card-title">Rs: {props.prod.price}</h6>
        <p className="card-text">{props.prod.desc}</p>
        <p>{props.prod.isStock == true ? "-in stock" : "-out of stock"}</p>
        <button 
        className="btn btn-primary" 
        disabled={!props.prod.isStock}
        onClick={()=>props.AddToCart(props.prod)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;