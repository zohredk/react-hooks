import React from "react";

import Card from "../UI/Card";

import "./ProductForm.css";

const ProductForm = React.memo((props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <div className="product-form__actions">
            <button type="sumbit">Add</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default ProductForm;
