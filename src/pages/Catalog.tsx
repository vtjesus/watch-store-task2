import Head from "../components/Head";
import Banner from "../sections/catalog/Banner"; // импортируем Banner с слайдером
import Products from "../sections/catalog/Products";

const Catalog = () => {
  return (
    <>
      <Head
        description="Каталог товаров"
        keywords="часы, женские, мужские"
        title="Каталог"
      />
      <main>
        <Banner /> {/* Используем компонент с слайдером */}
        <Products />
      </main>
    </>
  );
};

export default Catalog;
