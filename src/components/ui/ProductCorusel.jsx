import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const products = [
  {
    id: 1,
    name: "Blue Dress",
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    price: 100,
    type: "Clothes",
  },
  {
    id: 2,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Shirt",
    price: 50,
    type: "Clothes",
  },
  {
    id: 3,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Sweater",
    price: 150,
    type: "Clothes",
  },
  {
    id: 4,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Shoes",
    price: 200,
    type: "Clothes",
  },
  {
    id: 5,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Big Pocket",
    price: 100,
    type: "Bags",
  },
  {
    id: 6,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Blue Bag",
    price: 150,
    type: "Bags",
  },
  {
    id: 7,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "White Bag",
    price: 120,
    type: "Bags",
  },
  {
    id: 8,
    img: "https://silkgranat.uz/wp-content/uploads/2022/11/a0048.webp",
    name: "Cycle Bag",
    price: 130,
    type: "Bags",
  },
];

const ProductCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={3} // 3ta element chiqadi
        centeredSlides={true} // Markazga olish
        navigation // Next va Prev tugmalari
        effect="coverflow" // Coverflow animatsiyasi
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        loop
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
