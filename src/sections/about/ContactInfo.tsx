const ContactInfo = () => {
  return (
    <section className="mt-10 bg-white p-8 shadow-md border-[10px] border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-lg mb-2 flex items-center">
            <img src="/src/assets/l.png" alt="icon" className="w-5 h-5 mr-2" />
            <span className="font-bold">8 (800) 350 57 81</span> — бесплатный
            звонок
          </p>
          <p className="text-lg mb-2 flex items-center">
            <img src="/src/assets/l.png" alt="icon" className="w-5 h-5 mr-2" />
            <span className="font-bold">8 (495) 127 07 25</span> — отдел продаж
          </p>
          <p className="text-lg mb-2 flex items-center">
            <img src="/src/assets/l.png" alt="icon" className="w-5 h-5 mr-2" />
            <span className="font-bold">8 (812) 602 71 09</span> — отдел продаж
          </p>
        </div>

        <div>
          <p className="text-lg mb-2 flex items-center">
            <img
              src="/src/assets/mail.png"
              alt="email icon"
              className="w-5 h-5 mr-2"
            />
            <span className="font-bold">neva-time@gmail.com</span> — Адрес
            электронной почты
          </p>

          <p className="text-lg mb-2 flex items-start">
            <img
              src="/src/assets/time.png"
              alt="time icon"
              className="w-5 h-5 mr-2"
            />
            <span className="font-bold">Режим работы call-центра: </span>
            <div className="ml-2">
              <div>ежедневно 10:00–20:00.</div>
            </div>
          </p>

          <p className="text-sm mt-[3px] ml-7 mr-7">
            Заказы на сайте принимаются круглосуточно, без выходных.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
