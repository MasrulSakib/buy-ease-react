import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="mt-10 container mx-auto h-screen">
            <h3 className="text-2xl font-bold mb-4">Cart</h3>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between border p-4 rounded"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className='text-left'>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex justify-between items-center border-t pt-4">
                        <h4 className="font-semibold text-xl">Total Price</h4>
                        <p className="text-xl">${totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="mt-6">
                        <button
                            className="btn btn-outline btn-warning hover:bg-blue-600 transition"
                            onClick={() => alert('Proceeding to Checkout')}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
