// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./MiddleHero.css"; 
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const places = [
//   { title: "Shimla's Best Kept Secret", img: "https://source.unsplash.com/500x300/?mountains,hillstation" },
//   { title: "Tamil Nadu's Charming Hill Town", img: "https://source.unsplash.com/500x300/?forest,hills" },
//   { title: "Picturesque Gateway to Himalayas", img: "https://source.unsplash.com/500x300/?himalayas,road" },
//   { title: "Quaint Little Hill Station in Gujarat", img: "https://source.unsplash.com/500x300/?trees,landscape" },
//   { title: "A pleasant summer retreat and a snowy winter wonderland!", img: "https://source.unsplash.com/500x300/?snowy,mountains" },
//   { title: "Seaside Retreat in West Bengal", img: "https://source.unsplash.com/500x300/?beach,sea" },
// ];

// const MiddleHero = () => {
//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper">
//         <h2 className="carousel-title">Unlock Lesser-Known Wonders of India</h2>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={15}
//           slidesPerView={3}
//           navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {places.map((place, index) => (
//             <SwiperSlide key={index}>
//               <div className="card">
//                 <img src={place.img} alt={place.title} className="card-img" />
//                 <div className="card-text">{place.title}</div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <button className="nav-btn prev-btn"><FaChevronLeft /></button>
//         <button className="nav-btn next-btn"><FaChevronRight /></button>
//       </div>
//     </div>
//   );
// };

// export default MiddleHero;
