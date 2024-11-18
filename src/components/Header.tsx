import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const totalQuantity = basketItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <header id="header" className="bg-white shadow-md relative">
      
      <div className="flex justify-evenly items-center py-4 px-8 border-b">
        
        <div className="text-gray-800 flex items-center space-x-2">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5285 6..."
                fill="#0F0F0F"
              />
            </svg>
          </span>
          <div className="flex flex-col">
            <span>Корзина ({totalQuantity}):</span>
            <span className="font-semibold text-black">{totalPrice} ₴</span>
          </div>
        </div>

        
        <div className="text-center">
          <h1 className="text-2xl font-bold">NEVA TIME</h1>
          <p className="text-sm text-gray-500 flex flex-col items-center">
            <span>Фирменные аксессуары Michael Kors</span>
            <span>с доставкой</span>
          </p>
        </div>

        
        <div className="flex flex-col items-end">
          <p className="text-xl font-bold text-black">8 (800) 302 79 15</p>
          <Link
            to="/contact"
            className="text-yellow-500 underline hover:text-yellow-600 mt-1"
            style={{ fontSize: "16px", lineHeight: "1.5" }}
          >
            Заказать обратный звонок
          </Link>
        </div>
      </div>

     
      <nav className="bg-gray-100 py-3 relative">
        <div className="flex justify-center space-x-8 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-black">
            ГЛАВНАЯ
          </Link>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-black"
            >
              ЧАСЫ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute bg-gray-200 shadow-lg py-2 mt-2 w-40 rounded-lg border z-50"
                style={{ top: "100%", left: 0 }}
              >
                <li className="hover:bg-gray-300 px-4 py-2">
                  <Link to="/catalog/women">Женские часы</Link>
                </li>
                <li className="hover:bg-gray-300 px-4 py-2">
                  <Link to="/catalog/men">Мужские часы</Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/" className="hover:text-black">
            СУМКИ
          </Link>
          <Link to="/" className="hover:text-black">
            РЮКЗАКИ
          </Link>
          <Link to="/" className="hover:text-black">
            КОШЕЛЬКИ
          </Link>
          <Link to="/" className="hover:text-black">
            БРАСЛЕТЫ
          </Link>
          <Link to="/" className="hover:text-black">
            ГАРАНТИЯ
          </Link>
          <Link to="/delivery" className="hover:text-black">
            ДОСТАВКА
          </Link>
          <Link to="/" className="hover:text-black">
            ОТЗЫВЫ
          </Link>
          <Link to="/" className="hover:text-black">
            ДЛЯ ПОКУПАТЕЛЕЙ
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
