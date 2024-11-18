import { Link } from "react-scroll";

const Services = () => {
  return (
    <section>
      <div className="flex flex-col items-start gap-4 ml-[200px]">
        <div className="service-item mt-[50px] flex items-center">
          <img
            src="/src/assets/girl_boy.jpg"
            alt="Girl and Boy"
            className="w-[600px] h-[300px] object-cover"
          />

          <div className="ml-8 flex flex-col">
            <h1 className="text-black text-3xl font-bold mb-4">
              <span className="block">Браслеты</span>
              <span className="block ml-1">Michael Kors</span>
            </h1>

            <Link
              to="header"
              smooth={true}
              duration={10}
              className="border border-black text-black py-2 px-0 hover:bg-black hover:text-white transition-colors text-lg font-medium inline-block text-center"
              style={{
                width: "fit-content",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Смотреть Все
            </Link>
          </div>
        </div>

        <div className="service-item mt-[50px] ml-[300px] flex items-center">
          <div className="ml-[200px] flex flex-col">
            <h1 className="text-black text-3xl font-bold mb-4">
              <span className="block">Сумки</span>
              <span className="block ml-1">Michael Kors</span>
            </h1>

            <Link
              to="header"
              smooth={true}
              duration={10}
              className="border border-black text-black py-2 px-0 hover:bg-black hover:text-white transition-colors text-lg font-medium inline-block text-center"
              style={{
                width: "fit-content",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Смотреть Все
            </Link>
          </div>
          <img
            src="/src/assets/bag_lady.jpg"
            alt="Bag Lady"
            className="w-[600px] h-[300px] object-cover ml-8"
          />
        </div>

        <div className="service-item mt-[50px] flex items-center">
          <img
            src="/src/assets/portfolio.jpg"
            alt="portfolio"
            className="w-[600px] h-[300px] object-cover"
          />

          <div className="ml-8 flex flex-col">
            <h1 className="text-black text-3xl font-bold mb-4">
              <span className="block">Рюдзаки</span>
              <span className="block ml-1">Michael Kors</span>
            </h1>

            <Link
              to="header"
              smooth={true}
              duration={10}
              className="border border-black text-black py-2 px-0 hover:bg-black hover:text-white transition-colors text-lg font-medium inline-block text-center"
              style={{
                width: "fit-content",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Смотреть Все
            </Link>
          </div>
        </div>
        <div className="service-item mt-[50px] ml-[300px] flex items-center">
          <div className="ml-[200px] flex flex-col">
            <h1 className="text-black text-3xl font-bold mb-4">
              <span className="block">Кошельки</span>
              <span className="block ml-1">Michael Kors</span>
            </h1>

            <Link
              to="header"
              smooth={true}
              duration={10}
              className="border border-black text-black py-2 px-0 hover:bg-black hover:text-white transition-colors text-lg font-medium inline-block text-center"
              style={{
                width: "fit-content",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Смотреть Все
            </Link>
          </div>
          <img
            src="/src/assets/purse.jpg"
            alt="purse"
            className="w-[600px] h-[300px] object-cover ml-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
