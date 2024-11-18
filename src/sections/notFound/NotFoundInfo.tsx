import Contacts from "../shared/Contacts";

const NotFoundInfo = () => {
  return (
    <main className="px-10 py-10">
      <nav className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-black underline">
          Главная
        </a>{" "}
        / Доставка
      </nav>

      <section className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6">Доставка</h1>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Бесплатная и быстрая курьерская доставка в любую точку.</li>
            <li>В среднем доставка занимает от 2-х до 5-ти дней.</li>
            <li>Оплата производится после осмотра и примерки.</li>
            <li>
              В случае если Вам что-то не подойдет или не понравится, доставка
              все равно будет бесплатной.
            </li>
            <li>Мы работаем с транспортными компаниями «СДЭК».</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-[870px] h-[400px]">
            <img src="/src/assets/sdek.png" alt="icon" />
          </div>
        </div>
      </section>

      {/* Секция с пунктами выдачи в городах */}
      <section className="mt-16">
        {/* Контейнер с обводкой для текста и столбиков */}
        <div className="border-4 border-[#F7F7F7] p-8 rounded-lg">
          {/* Заголовок внутри обводки */}
          <h2 className="text-3xl font-bold mb-6">
            У нашей компании есть пункты выдачи в городах:
          </h2>

          {/* Контейнер для 4 столбиков */}
          <div className="flex gap-16 justify-between">
            {/* Первый столбик */}
            <div className="flex flex-col space-y-6 items-start">
              {[
                "Киев",
                "Харьков",
                "Полтава",
                "Львов",
                "Днепр",
                "Одесса",
                "Винница",
                "Житомир",
                "Кропивницкий",
                "Чернигов",
                "Черкассы",
              ].map((city, index) => (
                <div className="flex items-center" key={index}>
                  <img
                    src="/src/assets/mark.png"
                    alt="mark"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Второй столбик */}
            <div className="flex flex-col space-y-6 items-start">
              {[
                "Кривой Рог",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
                "Киев",
              ].map((city, index) => (
                <div className="flex items-center" key={index}>
                  <img
                    src="/src/assets/mark.png"
                    alt="mark"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Третий столбик */}
            <div className="flex flex-col space-y-6 items-start">
              {[
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
                "Одесса",
              ].map((city, index) => (
                <div className="flex items-center" key={index}>
                  <img
                    src="/src/assets/mark.png"
                    alt="mark"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Четвертый столбик */}
            <div className="flex flex-col space-y-6 items-start">
              {[
                "Харьков",
                "Киев",
                "Харьков",
                "Одесса",
                "Харьков",
                "Киев",
                "Харьков",
                "Одесса",
                "Харьков",
                "Киев",
                "Харьков",
              ].map((city, index) => (
                <div className="flex items-center" key={index}>
                  <img
                    src="/src/assets/mark.png"
                    alt="mark"
                    className="w-6 h-6 mr-2"
                  />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Contacts />
      </section>
    </main>
  );
};

export default NotFoundInfo;
