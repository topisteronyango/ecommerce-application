import React from 'react';
import data from './data';

function App() {
  return (
    <div className="main-container">
        <header className="row">
            <div>
                <a className="brand" href="/">FASTorder</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>

        <main>
            <div>
            <div className="row center">
                {
                    data.products.map(product => (
                        <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.images} alt={product.name}/>

                    </a>
                    <div className="card-body">
                    <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            ${product.price}
                        </div>
                    </div>
                </div>

                    ))
                }
                

                
            </div>
            </div>
        </main>

        <footer className="row center">
            <p>&copy; Copyright 2022. All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default App;
