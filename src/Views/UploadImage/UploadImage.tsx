// type UploadImageProps = {
//   handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   getSelectedImage: () => any;
//   uploadedImages: any[];
//   selectedImageIndex: number | null;
//   updateImageSetting: (setting: string, value: number | string) => void;
//   deleteImage: (index: number) => void;
// };

// const UploadImage: React.FC<UploadImageProps> = ({
//   handleImageUpload,
//   getSelectedImage,
//   uploadedImages,
//   selectedImageIndex,
//   updateImageSetting,
//   deleteImage,
// }) => {
//   return (
//     <div>
//       <h4>Upload Image</h4>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={{ marginBottom: '10px', width: 'calc(100% - 20px)' }}
//       />

//       {uploadedImages.length > 0 && (
//         <div>
//           <h4>Uploaded Images ({uploadedImages.length}):</h4>

//           {getSelectedImage() && (
//             <div>
//               <h4>Selected: {getSelectedImage().name}</h4>

//               <div className="fill" style={{ marginBottom: '8px' }}>
//                 <label
//                   style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     marginBottom: '2px',
//                   }}
//                 >
//                   X Axis:
//                 </label>
//                 <input
//                   type="number"
//                   value={getSelectedImage().settings.x}
//                   onChange={(e) => updateImageSetting('x', e.target.value)}
//                   style={{ width: '80px' }}
//                 />
//               </div>

//               <div className="fill" style={{ marginBottom: '8px' }}>
//                 <label
//                   style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     marginBottom: '2px',
//                   }}
//                 >
//                   Y Axis:
//                 </label>
//                 <input
//                   type="number"
//                   value={getSelectedImage().settings.y}
//                   onChange={(e) => updateImageSetting('y', e.target.value)}
//                   style={{ width: '80px' }}
//                 />
//               </div>

//               <div className="fill" style={{ marginBottom: '8px' }}>
//                 <label
//                   style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     marginBottom: '2px',
//                   }}
//                 >
//                   Width:
//                 </label>
//                 <input
//                   type="number"
//                   value={getSelectedImage().settings.width}
//                   onChange={(e) => updateImageSetting('width', e.target.value)}
//                   style={{ width: '80px' }}
//                 />
//               </div>

//               <div className="fill" style={{ marginBottom: '8px' }}>
//                 <label
//                   style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     marginBottom: '2px',
//                   }}
//                 >
//                   Height:
//                 </label>
//                 <input
//                   type="number"
//                   value={getSelectedImage().settings.height}
//                   onChange={(e) => updateImageSetting('height', e.target.value)}
//                   style={{ width: '80px' }}
//                 />
//               </div>

//               <div className="fill" style={{ marginBottom: '8px' }}>
//                 <label
//                   style={{
//                     display: 'block',
//                     fontSize: '12px',
//                     marginBottom: '2px',
//                   }}
//                 >
//                   Z-Index:
//                 </label>
//                 <input
//                   type="number"
//                   value={getSelectedImage().settings.zIndex}
//                   onChange={(e) => updateImageSetting('zIndex', e.target.value)}
//                   style={{ width: '80px' }}
//                 />
//               </div>

//               <button
//                 onClick={() => deleteImage(selectedImageIndex)}
//                 style={{
//                   backgroundColor: '#ff4757',
//                   color: 'white',
//                   border: 'none',
//                   padding: '5px 10px',
//                   borderRadius: '3px',
//                   cursor: 'pointer',
//                   marginTop: '10px',
//                 }}
//               >
//                 Delete Image
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// export default UploadImage;
