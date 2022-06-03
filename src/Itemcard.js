import React from "react";

function Itemcard(props) {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" alt="Product" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.price}</p>
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
