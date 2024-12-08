import React, { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';



const ProductsCard = ({ productInfo, imageUrl }) => {
    const { addToCart } = useContext(CartContext);
    const title = productInfo?.title || 'No Title Available';
    const body = productInfo?.body || 'No Description Available';

    return (
        <div className="card-body flex flex-col justify-between h-full p-4">
            <figure className="overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
            </figure>
            <h2 className="card-title text-center">{title.slice(0, 16)}</h2>
            <p className="text-left">
                <span className="font-semibold">Details: </span>
                {body.slice(0, 110)}...
            </p>
            <div className="card-actions flex items-center justify-between">
                <h3 className="font-semibold text-lg md:text-xl">
                    Price: <span className="font-bold text-yellow-400">120$</span>
                </h3>
                <button
                    className="btn btn-outline btn-warning"
                    onClick={() => addToCart({ ...productInfo, price: 120, imageUrl })}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductsCard;
