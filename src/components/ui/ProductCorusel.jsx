import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const products = [
  {
    id: 1,
    name: "Ayollar kostyumi",
    img: `/src/assets/media/1.jpg`,
    price: 100,
    type: "Clothes",
  },
  {
    id: 2,
    img: `/src/assets/media/2.jpg`,
    name: "Ayollar sumkasi",
    price: 50,
    type: "Bags",
  },
  {
    id: 3,
    img: `/src/assets/media/3.jpg`,
    name: "Ayollar sumkasi",
    price: 150,
    type: "Bags",
  },
  {
    id: 4,
    img: `/src/assets/media/4.jpg`,
    name: "Ayollar kostyumi",
    price: 200,
    type: "Clothes",
  },
  {
    id: 5,
    img: `/src/assets/media/5.jpg`,
    name: "Ayollar kostyumi",
    price: 100,
    type: "Clothes",
  },
  {
    id: 6,
    img: `/src/assets/media/6.jpg`,
    name: "Ayollar kostyumi",
    price: 150,
    type: "Bags",
  },
  {
    id: 7,
    img: `/src/assets/media/7.jpg`,
    name: "Ayollar kostyumi",
    price: 120,
    type: "Bags",
  },
  {
    id: 8,
    img: `/src/assets/media/8.jpg`,
    name: "Ayollar kostyumi",
    price: 130,
    type: "Clothes",
  },
];

const ProductCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={150}
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
