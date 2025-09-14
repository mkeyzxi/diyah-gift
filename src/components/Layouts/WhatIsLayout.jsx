// // import ImageBuket10 from '/image/buket/ImageBuket10.webp';
// // import ImageBuket9 from '/image/buket/ImageBuket9.webp';

// // dengan aria
// import Explanation from './ExplanationLayout';
// // C:\diyah.gift\my-react-app\public\image\buket\ImageBuket9.webp
// const WhatIsLayout = () => {
//     return (
//         <div className="flex flex-col md:flex-row md:gap-10 w-full justify-between px-3 md:p-0 mb-14 md:mb-0">
//             <Explanation 
//                 className="order-2 md:order-0"
//                 subExplanation="MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN"
//                 paragraphExplanation="Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang."
//                 aria-labelledby="gift-description"
//             >
//                 <div 
//                     className="w-full md:hidden flex justify-between flex-row gap-2 md:gap-5 shadow-md p-1 md:p-5 order-1 md:order-0" 
//                     aria-hidden="true"
//                 >
//                     <div className="w-1/2 bg-slate-900">
//                         <img 
//                             src="/image/buket/ImageBuket10.webp"
//                             // src={ImageBuket10} 
//                             width="100%" 
//                             height="100%" 
//                             alt="Profile Selempang"
//                             aria-describedby="image-profile-selempang"
//                         />
//                     </div>
//                     <div className='bg-slate-900 w-1/2 '>
//                         <img 
//                         // C:\diyah.gift\my-react-app\public\image\buket\ImageBuket9.webp
//                             src="/image/buket/ImageBuket9.webp" 
//                             // src={ImageBuket9}
//                             width="100%" 
//                             height="100%" 
//                             alt="Profile Buket"
//                             aria-describedby="image-profile-buket"
//                             className='md:hidden'
//                         />
//                     </div>
//                 </div>
//             </Explanation>
//             <div 
//                 className="hidden md:w-1/2 md:flex flex-row gap-2 md:gap-5 justify-center items-center bg-slate-400 p-1 md:p-5 order-1 md:order-0"
//                 aria-labelledby="image-gallery"
//             >
//                 <div className="w-1/2 bg-slate-900">
//                     <img 
//                         src="../public/image/buket/ImageBuket10.webp" 
//                         width="100%" 
//                         height="100%" 
//                         alt="Profile Selempang"
//                         aria-describedby="image-profile-selempang"
//                     />
//                 </div>
//                 <div className='bg-slate-900 w-1/2'>
//                     <img 
//                         src="../public/image/buket/ImageBuket9.webp" 
//                         width="100%" 
//                         height="100%" 
//                         alt="Profile Buket"
//                         aria-describedby="image-profile-buket"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhatIsLayout;


// atasi responseve
import Explanation from './ExplanationLayout';

const WhatIsLayout = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-10 w-full justify-between px-3 md:px-0 mb-14 md:mb-0">
            {/* Teks & penjelasan */}
            <Explanation
                className="order-2 md:order-0"
                subExplanation="MEMBERIKAN HADIAH YANG AKAN MENJADI KENANGAN"
                paragraphExplanation="Penyedia Hadiah Yang Akan Menyediakan Hadiah Menjadi Kenangan Bagi Sipenerima Hadiah, Guna Menjadi Kerabat, Keluarga, Sahabat Yang Akan Selalu Di Kenang."
                aria-labelledby="gift-description"
            />

            {/* Gambar */}
            <div
                className="flex flex-row gap-2 md:gap-5 justify-center items-center bg-slate-400 p-1 md:p-5 order-1 md:order-0 w-full md:w-1/2"
                aria-labelledby="image-gallery"
            >
                <div className="w-1/2 bg-slate-900">
                    <img
                        src="/image/buket/ImageBuket10.webp"
                        alt="Profile Selempang"
                        aria-describedby="image-profile-selempang"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 bg-slate-900">
                    <img
                        src="/image/buket/ImageBuket9.webp"
                        alt="Profile Buket"
                        aria-describedby="image-profile-buket"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatIsLayout;
