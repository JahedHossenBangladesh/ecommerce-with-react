import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img,name} = props.product;
    return (<>
       
              <article class="card">
    <img src={img} alt="Sample photo"/>
    <div class="text">
      <h3>{name}</h3>
      <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
      <button>Here's why</button>
    </div>
  </article>
      </>
    );
};

export default Product;