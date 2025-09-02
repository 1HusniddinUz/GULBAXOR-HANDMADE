import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "../../assets/media/1.jpg"
import img2 from "../../assets/media/2.jpg"
import img3 from "../../assets/media/3.jpg"
import img4 from "../../assets/media/4.jpg"
import img5 from "../../assets/media/5.jpg"
import img6 from "../../assets/media/6.jpg"
import img7 from "../../assets/media/7.jpg"
import img8 from "../../assets/media/8.jpg"
// import {t} from "i18next";


const products = [

  {
    id: 1,
    name: `Ayollar ko'ylagi`,
    img: img1,
    price: 75,
    type: "Clothes",
  },
  {
    id: 2,
    img: img2,
    name: `Ayollar sumkasi`,
    price: 12,
    type: "Bags",
  },
  {
    id: 3,
    img: img3,
    name: `Ayollar sumkasi`,
    price: 17,
    type: "Bags",
  },
  {
    id: 4,
    img: img4,
    name: `Ayollar ko'ylagi`,
    price: 65,
    type: "Clothes",
  },
  {
    id: 5,
    img: img5,
    name: `Ayollar ko'ylagi`,
    price: 80,
    type: "Clothes",
  },
  {
    id: 6,
    img: img6,
    name: `Ayollar ko'ylagi`,
    price: 65,
    type: "Bags",
  },
  {
    id: 7,
    img: img7,
    name: `Ayollar ko'ylagi`,
    price: 65,
    type: "Bags",
  },
  {
    id: 8,
    img: img8,
    name: `Ayollar ko'ylagi`,
    price: 37,
    type: "Clothes",
  },
];

const ProductCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={150}
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
        breakpoints={{
            0: {            // Mobil
                slidesPerView: 1,
                spaceBetween: 10,
            },
            600: {          // Planshet
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {         // Desktop
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}

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
