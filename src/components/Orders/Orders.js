import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.in !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div>
            <h2> This is Orders :{products.length}</h2>
            <p> Cart has: {cart.length}</p>
            <div className="shop-container">
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id} product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button onClick={()=>navigate('/inventory')}>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>

            </div>

        </div>
    );
};

export default Orders;