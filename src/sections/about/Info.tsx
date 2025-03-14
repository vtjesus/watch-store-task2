import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleClear = () => {
    setName("");
    setPhone("");
    setComment("");
  };

  return (
    <section className="w-full">
      <div className="h-[600px] w-full flex items-center bg-[#F7F7F7] justify-center">
        <div className="h-[420px] w-[1000px] flex flex-col justify-start items-center p-4">
          <h2 className="text-black text-5xl font-bold text-center">
            Остались вопросы?
          </h2>
          <p className="text-lg text-gray-700 text-center mt-5">
            Заполните форму и мы свяжемся с Вами
          </p>

          
          <div className="flex mt-5 w-full space-x-5">
         
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-2 border bg-gray-100 rounded"
                placeholder="Ваше имя"
              />
            </div>

          
            <div className="flex-1">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 p-2 border bg-gray-100 rounded"
                placeholder="Ваш телефон"
              />
            </div>
          </div>

          
          <div className="w-full mt-5">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full h-[56px] mt-2 p-2 border bg-gray-100 rounded resize-none"
              placeholder="Ваш комментарий"
            />
          </div>

         
          <div className="w-full mt-5 flex items-center justify-center">
            <button
              onClick={handleClear}
              className="w-[165px] p-2 bg-[#CDB494] text-white rounded"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
