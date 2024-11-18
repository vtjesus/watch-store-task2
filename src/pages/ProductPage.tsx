import Head from "../components/Head"
import ProductInfo from "../sections/product/ProductInfo"
import Contacts from "../sections/shared/Contacts"


const ProductPage = () => {
  return (
    <>
      <Head
        description=""
        keywords=""
        title=""
      />
      <main>
        <ProductInfo />
        <Contacts />
      </main>
    </>
  )
}

export default ProductPage