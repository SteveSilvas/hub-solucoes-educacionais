// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

// export interface Slide {
//   name: string;
//   src: StaticImport;
//   alt: string;
//   description?: string;
// }

// export interface ICarousel {
//   slidesDatas: Slide[];
// }

// const Carousel: React.FC<ICarousel> = ({ slidesDatas }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevSlide = () => {
//     console.log(window.innerWidth);

//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slidesDatas.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slidesDatas.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="text-center bg-white overflow-hidden w-full relative flex flex-col items-center">
//       {/* Botões de navegação */}
//       <div className="flex justify-between items-center w-full px-4">
//         <IoIosArrowBack
//           className="cursor-pointer text-4xl text-blue_d md:text-[3rem] hover:text-[3.1rem] transition-colors duration-300"
//           onClick={handlePrevSlide}
//         />

//         {/* Container das imagens */}
//         <div className="w-[90%] flex items-center justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Renderizando apenas as imagens visíveis */}
//             {slidesDatas
//               .slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 3 : 1)) // Mostra 3 imagens no PC, 1 no mobile
//               .map((slide, index) => (
//                 <div key={index} className="flex justify-center">
//                   <Image
//                     className="object-cover rounded-lg shadow-lg"
//                     src={slide.src}
//                     alt={slide.alt}
//                     title={slide.name}
//                     width={300} // Define um tamanho adequado
//                     height={200} // Mantém proporção
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>

//         <IoIosArrowForward
//           className="cursor-pointer text-4xl text-blue_d md:text-[3rem] hover:text-[3.1rem] transition-colors duration-300"
//           onClick={handleNextSlide}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;
