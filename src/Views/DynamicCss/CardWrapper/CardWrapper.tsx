// import { IMAGES } from '../../assets';
// import { useNavigate } from 'react-router-dom';
// import '../../App.css';
// //import { MESSAGES } from '../../Shared/Constants';
// import { useState } from 'react';
// import { MESSAGES } from '../../Shared/Constants';

// const CardWrapper = () => {
//   const [srcUrl, setSrcUrl] = useState('');
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   console.log('srcurl', srcUrl);

//   return (
//     <div className="">
//       {!show && (
//         <div className="card-wrapper">
//           {Object.values(IMAGES).map((src, i) => (
//             <div key={i} className="card-item">
//               <div className="card-image">
//                 <img src={src} alt={`card-${i}`} />
//               </div>
//               <button
//                 className="card-content"
//                 onClick={() => {
//                   setShow(true);
//                   setSrcUrl(src);
//                   navigate('/customize', { state: { srcUrl: src } });
//                 }}
//               >
//                 {MESSAGES.NOTIFICATION.CARD_TITLE}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       {/* {show && <CustomizeCard srcUrl={srcUrl} />} */}
//     </div>
//   );
// };
// export default CardWrapper;
