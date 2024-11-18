import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTopOrNavigateHome = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Левая часть */}
        <div>
          <h2 className="text-2xl font-bold">NEVA TIME</h2>
          <p className="mt-2">
            Фирменные аксессуары Michael Kors
            <br />с доставкой
          </p>
          <div className="mt-6">
            <p className="font-semibold">Подпишись на новинки и скидки</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="E-mail"
                className="px-4 py-2 text-black"
              />
              <button className="bg-yellow-600 text-white px-4 py-2 font-semibold">
                ОТПРАВИТЬ
              </button>
            </div>
          </div>
        </div>

        {/* Средняя часть */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Link
              to="/catalog/women"
              className="hover:text-yellow-500 underline"
            >
              Женские часы
            </Link>
            <br />
            <Link to="/catalog/men" className="hover:text-yellow-500 underline">
              Мужские часы
            </Link>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Сумки
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Рюкзаки
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Кошельки
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Браслеты
            </a>
          </div>
          <div>
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Гарантия
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Доставка
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Отзывы
            </a>
            <br />
            <a
              href="/"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Другие бренды
            </a>
            <br />
            <a
              href="/certeficate"
              onClick={scrollToTopOrNavigateHome}
              className="hover:text-yellow-500 underline"
            >
              Корпоративные подарки
            </a>
            <br />
            <a href="/brands" className="hover:text-yellow-500 underline">
              О компании
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div className="text-right flex flex-col justify-between">
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold text-white">8 (800) 302 79 15</p>
            <Link
              to="/contact"
              className="text-yellow-500 underline hover:text-yellow-600 mt-1"
              style={{ fontSize: "16px", lineHeight: "1.5" }}
            >
              Заказать обратный звонок
            </Link>
          </div>

          {/* Иконки социальных сетей */}
          <div className="flex justify-end mt-4 space-x-4 items-center">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#D2B48C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" />
                <path d="M10 9L15 12L10 15V9Z" fill="white" />
              </svg>
            </a>

            <a
              href="https://www.vk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#D2B48C"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" />
                <path
                  d="M14.217 15.333H12.882c-3.248 0-5.365-2.143-5.365-5.643h1.684c.084 2.652 1.296 3.508 2.23 3.719V9.69h1.576v1.934c.933-.1 1.889-1.008 2.216-1.934h1.533c-.261 1.466-1.342 2.508-1.855 2.895.513.174 1.652.873 2.046 2.414h-1.73c-.381-.933-1.275-1.533-2.124-1.668v1.67z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
