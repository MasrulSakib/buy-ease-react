import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useContext(CartContext); // Access cart items from context

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu on screen resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); // Close menu when screen is resized to desktop
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Calculate total quantity of items in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center px-10 py-4 relative">
            <div className="flex justify-start gap-3 items-end">
                <h3 className="text-2xl font-bold bg-yellow-400 px-1 rounded-md">BUY</h3>
                <span className="text-2xl font-semibold italic border-b border-yellow-400 text-yellow-400">Ease</span>
            </div>

            {/* Desktop and Laptop Menu */}
            <ul className="hidden md:flex space-x-6 items-center ml-auto relative">
                <li>
                    <Link to="/" className="hover:border-b-2 hover:border-yellow-400 pb-1">Home</Link>
                </li>
                <li>
                    <Link to="/products" className="hover:border-b-2 hover:border-yellow-400 pb-1">Products</Link>
                </li>
                <li>
                    <a href="#about" className="hover:border-b-2 hover:border-yellow-400 pb-1">About</a>
                </li>
                <li className="relative">
                    <Link to="/cart" className="hover:border-b-2 hover:border-yellow-400 pb-1">Cart</Link>
                </li>

                {/* Shopping Cart Icon with quantity (placed before Cart link) */}
                <div className="relative">
                    <Link to="/cart">
                        <FaShoppingCart className="text-2xl" />
                    </Link>
                    {totalQuantity > 0 && (
                        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 rounded-full w-4 h-4 flex justify-center items-center text-xs">
                            {totalQuantity}
                        </div>
                    )}
                </div>
            </ul>

            {/* Mobile Menu - Hamburger Button */}
            <div className="flex items-center gap-6 ml-auto md:hidden">
                <div className="relative">
                    <Link to="/cart">
                        <FaShoppingCart className="text-2xl" />
                    </Link>
                    {totalQuantity > 0 && (
                        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 rounded-full w-4 h-4 flex justify-center items-center text-xs">
                            {totalQuantity}
                        </div>
                    )}
                </div>

                {/* Hamburger Button */}
                <button
                    className="text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`absolute top-[70px] right-1 bg-gray-700 shadow-lg rounded-md w-[200px] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"}`}
            >
                <ul className="flex flex-col">
                    <li className="py-2 border-b border-yellow-400">
                        <Link to="/" className="block px-4 py-2 text-left hover:border-l-4 hover:border-yellow-400 hover:bg-gray-600">Home</Link>
                    </li>
                    <li className="py-2 border-b border-yellow-400">
                        <Link to="/products" className="block px-4 py-2 text-left hover:border-l-4 hover:border-yellow-400 hover:bg-gray-600">Products</Link>
                    </li>
                    <li className="py-2 border-b border-yellow-400">
                        <Link to="/about" className="block px-4 py-2 text-left hover:border-l-4 hover:border-yellow-400 hover:bg-gray-600">About</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/cart" className="block px-4 py-2 text-left hover:border-l-4 hover:border-yellow-400 hover:bg-gray-600">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
