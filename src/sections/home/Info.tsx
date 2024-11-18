const Info = () => {
  return (
    <section className="bg-[#F7F7F7] w-full h-[906px] mx-auto flex items-center justify-center mt-20">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-[100px] h-full">
        <h2 className="text-black text-5xl font-bold mb-16 w-[856.1px] h-[102px] ml-[15px]">
          5 причин купить аксессуары Michael Kors у нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex justify-center col-span-1 md:col-span-3">
            <div className="flex justify-between w-full max-w-6xl">
              <div className="flex flex-col items-center text-center space-y-4 ml-[-90px]">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/tick.png"
                    alt="icon"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-black font-bold text-gray-900">
                  Официальный сайт, <br /> интернет магазин Michael Kors
                </h3>
                <p className="text-sm text-gray-600">
                  Остерегайтесь контрафактных <br /> товаров Майкл Корс. На них
                  не <br /> распространяется официальная <br /> гарантия
                  производителя.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/shop.png"
                    alt="icon"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-black font-bold text-gray-900">
                  Лучшая цена на аксессуары <br /> Michael Kors
                </h3>
                <p className="text-sm text-gray-600">
                  Купите часы, сумки, рюкзаки, кошельки, <br /> клатчи Майкл
                  Корс оригинал по лучшей <br /> цене. Сравните и убедитесь
                  сами, что <br />
                  лучше предложения не найти!
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 mr-[-90px]">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/shield.png"
                    alt="icon"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-black font-bold text-gray-900">
                  Официальная гарантия <br /> на все аксессуары Michael Kors
                </h3>
                <p className="text-sm text-gray-600">
                  Приобретая мужские и женские <br /> аксессуары Майкл Корс у
                  нас, Вам <br /> предоставляется официальный <br /> гарантийный
                  талон.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/lorry.png"
                alt="icon"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-black font-bold text-gray-900">
              Бесплатная и быстрая доставка по всей <br /> территории
            </h3>
            <p className="text-sm text-gray-600">
              В среднем доставка по России от 2-х до 5-
              <br />
              ти дней. По Киеву и Одессе <br /> доставка осуществляется на
              следующий <br /> день после заказа.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/houses.png"
                alt="icon"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-black font-bold text-gray-900">
              Официальный каталог <br /> Michael Kors
            </h3>
            <p className="text-sm text-gray-600">
              В нашем официальном каталоге <br /> огромный выбор оригинальных{" "}
              <br /> часов, сумок, рюкзаков, кошельков, <br /> клатчей Майкл
              Корс по лучшей цене.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
