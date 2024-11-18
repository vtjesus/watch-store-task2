import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/basketSlice";
import { RootState } from "../../store/store";

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.items);

  const products = [
    { id: "1", name: "Товар 1", price: 1200, image: "/src/assets/image22 (1).png" },
    { id: "2", name: "Товар 2", price: 1800, image: "/src/assets/image22 (2).png" },
    { id: "3", name: "Товар 3", price: 2400, image: "/src/assets/image22 (3).png" },
    { id: "4", name: "Товар 4", price: 1400, image: "/src/assets/image22 (4).png" },
    { id: "5", name: "Товар 5", price: 2000, image: "/src/assets/image22 (1).png" },
    { id: "6", name: "Товар 6", price: 1600, image: "/src/assets/image22 (2).png" },
    { id: "7", name: "Товар 7", price: 1600, image: "/src/assets/image22 (3).png" },
    { id: "8", name: "Товар 8", price: 1600, image: "/src/assets/image22 (4).png" },
    { id: "9", name: "Товар 9", price: 1600, image: "/src/assets/image22 (1).png" },
    { id: "10", name: "Товар 10", price: 1600, image: "/src/assets/image22 (2).png" },
    { id: "11", name: "Товар 11", price: 1600, image: "/src/assets/image22 (3).png" },
    { id: "12", name: "Товар 12", price: 1600, image: "/src/assets/image22 (4).png" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); 
  const [showMore, setShowMore] = useState(false); 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleProducts = showMore ? filteredProducts : filteredProducts.slice(0, 8);

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const isInCart = (id: string) => basketItems.some((item) => item.id === id);

  
  const isHitProduct = (id: string) => {
    return ["1", "3", "5", "8"].includes(id);
  };

  return (
    <div>
      
      <div className="flex items-center justify-between px-6 py-4">
       
        <div className="text-xl font-bold">
          Часы Michael Kors
        </div>

        
        <div className="relative w-[380px]">
          <input
            type="text"
            placeholder="Пошук товарів..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 w-full h-[48px]"
          />
        </div>
      </div>

      
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="border p-4 relative">
             
              {isHitProduct(product.id) && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-1 text-xs font-bold">
                  ХИТ
                </div>
              )}
              
              
              <div className="h-48 w-full overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.price} ₴</p>
              {isInCart(product.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 mt-2"
                >
                  У кошику
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-4 py-2 mt-2"
                >
                  В кошик
                </button>
              )}
            </div>
          ))}
        </div>

       
        {filteredProducts.length > 8 && (
          <div className="flex justify-center mt-12 mb-8"> 
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gray-800 text-white px-6 py-2"
            >
              {showMore ? "Приховати" : "Показати ще"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
