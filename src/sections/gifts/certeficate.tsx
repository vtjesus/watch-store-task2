import Info from "../about/Info";

const Certeficate = () => {
  return (
    <div>
      <div className="px-20 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-black underline">
            Главная
          </a>{" "}
          /Подарочний сертефикат
        </nav>
        <section className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">О компании</h1>
            <p className="text-lg text-gray-700 mb-4">
              У Вашего близкого человека День Рождения, праздник, <br />{" "}
              годовщина или Вы просто хотите порадовать его, но не можете <br />{" "}
              определиться с подарком? Тогда Вам идеально подойдут наши <br />{" "}
              подарочные сертификаты на 10.000, 15.000, 20.000 или 30.000
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="w-[570px] h-[458.7px]">
              <img src="/src/assets/gift.png" alt="icon" />
            </div>
          </div>
        </section>
      </div>
      <section className="h-[600px] flex bg-[#F7F7F7] items-center justify-center">
        <section className="bg-[#F7F7F7] w-full h-[500px] mx-auto flex items-center justify-center mt-20">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-[50px] h-full">
            
            <h2 className="text-black text-5xl font-bold mb-16">
              Как это работает?
            </h2>

            
            <div className="flex justify-center gap-12">
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <p className="w-15 h-100 items-center text-white font-bold text-[18px]">
                    01
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  Вы приобретаете подарочный <br /> сертификат на нужную сумму.
                </p>
              </div>

              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <p className="w-15 h-100 items-center text-white font-bold text-[18px]">
                    02
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  Мы доставляем сертификат Вам или человеку <br /> которому Вы
                  хотите сделать подарок <br /> транспортной компанией или
                  отправляем Вам <br /> файл для самостоятельной печати.
                </p>
              </div>

           
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#CDB494] rounded-full flex items-center justify-center">
                  <p className="w-15 h-100 items-center text-white font-bold text-[18px]">
                    03
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Человек которому Вы сделали подарок <br /> переходит на наш
                  сайт и при заказе указывает <br /> уникальный номер
                  сертификата и мы доставляем <br /> именно тот подарок, который
                  выбрал он. Вы точно <br /> не ошибетесь с выбором подарка.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="h-[600px] flex items-center justify-center">
        <section className="w-full h-[500px] mx-auto flex items-center justify-center mt-20">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-[50px] h-full">
           
            <h2 className="text-black text-5xl font-bold mb-16">
              Условия предельно просты{" "}
            </h2>

            <div className="flex justify-center gap-12">
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/calendar.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                </div>

                <p className="text-sm text-gray-600">
                  Вы приобретаете подарочный <br /> сертификат на нужную сумму.
                </p>
              </div>

              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/many.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                </div>

                <p className="text-sm text-gray-600">
                  Мы доставляем сертификат Вам или человеку <br /> которому Вы
                  хотите сделать подарок <br /> транспортной компанией или
                  отправляем Вам <br /> файл для самостоятельной печати.
                </p>
              </div>

              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center">
                  <img
                    src="/src/assets/block.png"
                    alt="icon"
                    className="w-15 h-15"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Человек которому Вы сделали подарок <br /> переходит на наш
                  сайт и при заказе указывает <br /> уникальный номер
                  сертификата и мы доставляем <br /> именно тот подарок, который
                  выбрал он. Вы точно <br /> не ошибетесь с выбором подарка.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Info />
    </div>
  );
};

export default Certeficate;
