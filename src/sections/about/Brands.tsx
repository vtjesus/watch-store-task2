import Info from "./Info";
import ContactInfo from "./ContactInfo";

const Brands = () => {
  return (
    <>
      <main className="px-8 py-10">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-black underline">
            Главная
          </a>{" "}
          /О компании
        </nav>

        <section className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">О компании</h1>
            <p className="text-lg text-gray-700 mb-4">
              Компания «НЕВА-ТАЙМ» была создана в 2011 году. В 2012 году мы
              стали фирменным магазином:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Emporio Armani
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Calvin Klein
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Michael Kors
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Diesel
              </a>
              .
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Мы продаем только оригинальную продукцию, имеющую соответствующие
              сертификаты.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Общество с ограниченной ответственностью «Дар».
            </p>
            <p className="text-lg text-gray-700 mb-4">
              ИНН: 7813281456
              <br />
              ОГРН: 1177847213323
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="w-[611.54px] h-[458.7px]">
              <img src="/src/assets/image2.png" alt="icon" />
            </div>
          </div>
        </section>

        <section>
          <ContactInfo />
        </section>
        <section className="text-center py-8">
  <h2 className="text-black text-4xl font-bold mb-8">Наши бренды</h2>
  <div className="flex justify-center gap-8">
    <a href="#" className="w-[380px] h-[159px] border border-gray-400 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
      <img
        src="/src/assets/armani.png"
        alt="Бренд 1"
        className="w-40 h-40 object-contain"
      />
    </a>
    <a href="#" className="w-[380px] h-[159px] border border-gray-400 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
      <img
        src="/src/assets/diesel.png"
        alt="Бренд 2"
        className="w-40 h-40 object-contain"
      />
    </a>
    <a href="#" className="w-[380px] h-[159px] border border-gray-400 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
      <img
        src="/src/assets/CalvinKline.png"
        alt="Бренд 3"
        className="w-40 h-40 object-contain"
      />
    </a>
  </div>
</section>
      </main>
      <section className="">
        <Info />
      </section>
    </>
  );
};

export default Brands;
