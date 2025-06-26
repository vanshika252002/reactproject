// import { useState, useRef, useEffect } from 'react';
// import ColorPicker from '../ColorPicker/ColorPicker';
// import UploadImage from '../../UploadImage/UploadImage';
// import './CustomizeImage.css';
// import CustomizeText from '../CustomizeText/CustomizeText';
// import html2canvas from 'html2canvas';

// const CustomizeImage = () => {
//   const [backgroundColors, setBackgroundColors] = useState(false);
//   const [selectedColor, setSelectedColor] = useState('white');
//   const [uploadImage, setUploadImage] = useState(false);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   20;
//   const [showText, setShowText] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const [draggingType, setDraggingType] = useState(null);

//   const [isResizing, setIsResizing] = useState(false);
//   const [resizeDirection, setResizeDirection] = useState<
//     'width' | 'height' | 'both' | null
//   >(null);
//   const [startResizePos, setStartResizePos] = useState({ x: 0, y: 0 });
//   const [startDimensions, setStartDimensions] = useState({
//     width: 0,
//     height: 0,
//   });

//   const [textElements, setTextElements] = useState([]);
//   const [selectedTextIndex, setSelectedTextIndex] = useState(null);
//   const [currentText, setCurrentText] = useState('');

//   const containerRef = useRef(null);

//   const handleColorChange = (color: any) => {
//     setSelectedColor(color);
//   };

//   const downloadTemplate = async () => {
//     console.log('working ');
//     try {
//       const element = containerRef.current;

//       if (!element) {
//         return;
//       }

//       const canvas = await html2canvas(element, {
//         backgroundColor: selectedColor,
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         logging: false,
//         width: element.offsetWidth,
//         height: element.offsetHeight,
//         ignoreElements: (element) => {
//           return (
//             element.style.cursor === 'nwse-resize' ||
//             element.classList.contains('resize-handle')
//           );
//         },
//       });

//       canvas.toBlob(
//         (blob) => {
//           if (blob) {
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `custom-template-${Date.now()}.png`;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//           }
//         },
//         'image/png',
//         1.0
//       );
//     } catch (error) {
//       console.error('Error downloading template:', error);
//     }
//   };

//   const handleImageUpload = (event: any) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const newImage = {
//           id: Date.now() + Math.random(),
//           src: e.target?.result,
//           name: file.name,
//           settings: {
//             x: 0,
//             y: 0,
//             width: 200,
//             height: 200,
//             zIndex: uploadedImages.length + 1,
//           },
//         };
//         setUploadedImages((prev) => [...prev, newImage]);
//         setSelectedImageIndex(uploadedImages.length);
//       };
//       reader.readAsDataURL(file);
//     }
//     event.target.value = '';
//   };

//   const updateImageSetting = (setting, value) => {
//     if (selectedImageIndex !== null) {
//       setUploadedImages((prev) =>
//         prev.map((img, index) =>
//           index === selectedImageIndex
//             ? {
//                 ...img,
//                 settings: { ...img.settings, [setting]: Number(value) },
//               }
//             : img
//         )
//       );
//     }
//   };

//   const deleteImage = (imageIndex: any) => {
//     setUploadedImages((prev) =>
//       prev.filter((_, index) => index !== imageIndex)
//     );
//     if (selectedImageIndex === imageIndex) {
//       setSelectedImageIndex(null);
//     } else if (selectedImageIndex > imageIndex) {
//       setSelectedImageIndex(selectedImageIndex - 1);
//     }
//   };

//   const selectImage = (index: any) => {
//     if (!isDragging && !isResizing) {
//       setSelectedImageIndex(index);
//       setSelectedTextIndex(null);
//     }
//   };

//   const getSelectedImage = () => {
//     return selectedImageIndex !== null
//       ? uploadedImages[selectedImageIndex]
//       : null;
//   };

//   const handleMouseDown = (e, index, type) => {
//     if (isResizing) return;

//     e.stopPropagation();
//     e.preventDefault();

//     if (type === 'image') {
//       selectImage(index);
//       const img = uploadedImages[index];
//       const rect = e.currentTarget.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;
//       setDragOffset({ x: offsetX, y: offsetY });
//     } else if (type === 'text') {
//       selectText(index);
//       const text = textElements[index];
//       const rect = e.currentTarget.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;
//       setDragOffset({ x: offsetX, y: offsetY });
//     }

//     setDraggingType(type);
//     setIsDragging(true);
//   };

//   const handleMouseMove = (e) => {
//     if (isResizing) return;
//     if (!isDragging) return;
//     e.preventDefault();

//     const containerRect = containerRef.current.getBoundingClientRect();
//     const x = Math.max(0, e.clientX - containerRect.left - dragOffset.x);
//     const y = Math.max(0, e.clientY - containerRect.top - dragOffset.y);

//     if (draggingType === 'image' && selectedImageIndex !== null) {
//       updateImageSetting('x', x);
//       updateImageSetting('y', y);
//     } else if (draggingType === 'text' && selectedTextIndex !== null) {
//       updateTextSetting('x', x);
//       updateTextSetting('y', y);
//     }
//   };

//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//       setDraggingType(null);
//     }
//   };

//   const handleResizeStart = (e, direction) => {
//     e.stopPropagation();
//     setIsResizing(true);
//     setResizeDirection(direction);
//     setStartResizePos({ x: e.clientX, y: e.clientY });

//     if (selectedImageIndex !== null) {
//       const img = uploadedImages[selectedImageIndex];
//       setStartDimensions({
//         width: img.settings.width,
//         height: img.settings.height,
//       });
//     } else if (selectedTextIndex !== null) {
//       const text = textElements[selectedTextIndex];
//       setStartDimensions({
//         width: text.settings.fontSize,
//         height: text.settings.fontSize,
//       });
//     }
//   };

//   const handleResizeMove = (e) => {
//     if (!isResizing) return;

//     const deltaX = e.clientX - startResizePos.x;
//     const deltaY = e.clientY - startResizePos.y;
//     const scale = 1;

//     if (selectedImageIndex !== null) {
//       const newSettings = { ...uploadedImages[selectedImageIndex].settings };

//       if (resizeDirection === 'width' || resizeDirection === 'both') {
//         newSettings.width = Math.max(
//           10,
//           startDimensions.width + deltaX * scale
//         );
//       }
//       if (resizeDirection === 'height' || resizeDirection === 'both') {
//         newSettings.height = Math.max(
//           10,
//           startDimensions.height + deltaY * scale
//         );
//       }

//       setUploadedImages((prev) =>
//         prev.map((img, idx) =>
//           idx === selectedImageIndex ? { ...img, settings: newSettings } : img
//         )
//       );
//     } else if (selectedTextIndex !== null) {
//       const newSettings = { ...textElements[selectedTextIndex].settings };

//       if (resizeDirection === 'width' || resizeDirection === 'both') {
//         newSettings.fontSize = Math.max(
//           8,
//           startDimensions.width + deltaX * scale
//         );
//       }

//       setTextElements((prev) =>
//         prev.map((text, idx) =>
//           idx === selectedTextIndex ? { ...text, settings: newSettings } : text
//         )
//       );
//     }
//   };

//   const handleResizeEnd = () => {
//     setIsResizing(false);
//     setResizeDirection(null);
//   };

//   useEffect(() => {
//     if (isDragging) {
//       window.addEventListener('mousemove', handleMouseMove);
//       window.addEventListener('mouseup', handleMouseUp);
//     } else {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     }

//     if (isResizing) {
//       window.addEventListener('mousemove', handleResizeMove);
//       window.addEventListener('mouseup', handleResizeEnd);
//     } else {
//       window.removeEventListener('mousemove', handleResizeMove);
//       window.removeEventListener('mouseup', handleResizeEnd);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//       window.removeEventListener('mousemove', handleResizeMove);
//       window.removeEventListener('mouseup', handleResizeEnd);
//     };
//   }, [
//     isDragging,
//     selectedImageIndex,
//     selectedTextIndex,
//     dragOffset,
//     draggingType,
//     isResizing,
//     resizeDirection,
//     startResizePos,
//     startDimensions,
//   ]);

//   // Text-related functions
//   const addTextElement = () => {
//     if (currentText.trim() === '') return;

//     const newTextElement = {
//       id: Date.now() + Math.random(),
//       text: currentText,
//       settings: {
//         x: 10,
//         y: 10,
//         fontSize: 20,
//         fontStyle: 'normal',
//         fontWeight: 'normal',
//         color: '#000000',
//         zIndex: textElements.length + uploadedImages.length + 1,
//       },
//     };

//     setTextElements((prev) => [...prev, newTextElement]);
//     setSelectedTextIndex(textElements.length);
//     setCurrentText('');
//   };

//   const updateTextSetting = (setting, value) => {
//     if (selectedTextIndex !== null) {
//       setTextElements((prev) =>
//         prev.map((text, index) =>
//           index === selectedTextIndex
//             ? {
//                 ...text,
//                 settings: {
//                   ...text.settings,
//                   [setting]:
//                     setting === 'x' || setting === 'y' || setting === 'fontSize'
//                       ? Number(value)
//                       : value,
//                 },
//               }
//             : text
//         )
//       );
//     }
//   };

//   const updateTextContent = (newText) => {
//     if (selectedTextIndex !== null) {
//       setTextElements((prev) =>
//         prev.map((text, index) =>
//           index === selectedTextIndex ? { ...text, text: newText } : text
//         )
//       );
//     }
//   };

//   const deleteTextElement = (textIndex) => {
//     setTextElements((prev) => prev.filter((_, index) => index !== textIndex));
//     if (selectedTextIndex === textIndex) {
//       setSelectedTextIndex(null);
//     } else if (selectedTextIndex > textIndex) {
//       setSelectedTextIndex(selectedTextIndex - 1);
//     }
//   };

//   const selectText = (index) => {
//     if (!isDragging && !isResizing) {
//       setSelectedTextIndex(index);
//       setSelectedImageIndex(null);
//     }
//   };

//   const getSelectedText = () => {
//     return selectedTextIndex !== null ? textElements[selectedTextIndex] : null;
//   };

//   return (
//     <div className="wrapper">
//       <div className="filters">
//         <button className="filter-btn" onClick={downloadTemplate}>
//           Download
//         </button>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             setBackgroundColors(!backgroundColors);
//             setUploadImage(false);
//             setShowText(false);
//           }}
//           style={{
//             backgroundColor: backgroundColors ? '#45B7D1' : '#f0f0f0',
//             color: backgroundColors ? 'white' : '#333',
//           }}
//         >
//           Background
//         </button>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             setUploadImage(!uploadImage);
//             setBackgroundColors(false);
//             setShowText(false);
//           }}
//           style={{
//             backgroundColor: uploadImage ? '#45B7D1' : '#f0f0f0',
//             color: uploadImage ? 'white' : '#333',
//           }}
//         >
//           Upload Image
//         </button>

//         <button
//           className="filter-btn"
//           onClick={() => {
//             setShowText(!showText);
//             setUploadImage(false);
//             setBackgroundColors(false);
//           }}
//           style={{
//             backgroundColor: showText ? '#45B7D1' : '#f0f0f0',
//             color: showText ? 'white' : '#333',
//           }}
//         >
//           Text
//         </button>
//       </div>

//       <div
//         className="image"
//         ref={containerRef}
//         style={{
//           backgroundColor: selectedColor,
//           position: 'relative',
//           overflow: 'hidden',
//           cursor: isDragging ? 'grabbing' : 'default',
//           transformStyle: 'preserve-3d',
//         }}
//         onClick={() => {
//           if (!isDragging && !isResizing) {
//             setSelectedImageIndex(null);
//             setSelectedTextIndex(null);
//           }
//         }}
//       >
//         {uploadedImages.length === 0 && textElements.length === 0 && 'Image'}
//         {uploadedImages.map((image, index) => (
//           <div
//             key={image.id}
//             style={{
//               position: 'absolute',
//               left: `${image.settings.x}px`,
//               top: `${image.settings.y}px`,
//               width: `${image.settings.width}px`,
//               height: `${image.settings.height}px`,
//               zIndex: image.settings.zIndex,
//               border:
//                 selectedImageIndex === index ? '2px solid #45B7D1' : 'none',
//             }}
//           >
//             <img
//               src={image.src}
//               alt={`Uploaded ${index + 1}`}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'contain',
//                 pointerEvents: 'none',
//               }}
//             />

//             {selectedImageIndex === index && (
//               <>
//                 <div
//                   style={{
//                     position: 'absolute',
//                     right: -5,
//                     bottom: -5,
//                     width: 10,
//                     height: 10,
//                     backgroundColor: '#45B7D1',
//                     cursor: 'nwse-resize',
//                     zIndex: image.settings.zIndex + 1,
//                   }}
//                   onMouseDown={(e) => handleResizeStart(e, 'both')}
//                 />
//               </>
//             )}

//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 cursor: 'move',
//               }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 selectImage(index);
//               }}
//               onDoubleClick={() => {
//                 if (!isDragging && !isResizing) {
//                   setSelectedImageIndex(null);
//                   setSelectedTextIndex(null);
//                 }
//               }}
//               onMouseDown={(e) => handleMouseDown(e, index, 'image')}
//             />
//           </div>
//         ))}

//         {textElements.map((textElement, index) => (
//           <div
//             key={textElement.id}
//             className="filltext"
//             style={{
//               position: 'absolute',
//               left: `${textElement.settings.x}px`,
//               top: `${textElement.settings.y}px`,
//               fontSize: `${textElement.settings.fontSize}px`,
//               fontStyle: textElement.settings.fontStyle,
//               fontWeight: textElement.settings.fontWeight,
//               color: textElement.settings.color,
//               zIndex: textElement.settings.zIndex,
//               fontFamily: textElement.settings.fontFamily || 'sans-serif',
//               cursor: 'move',
//               border:
//                 selectedTextIndex === index ? '2px dashed #45B7D1' : 'none',
//               padding: selectedTextIndex === index ? '2px' : '0',
//               minWidth: '20px',
//               minHeight: '20px',
//               backgroundColor:
//                 selectedTextIndex === index
//                   ? 'rgba(69, 183, 209, 0.1)'
//                   : 'transparent',
//               userSelect: 'none',
//             }}
//             onClick={(e) => {
//               e.stopPropagation();
//               selectText(index);
//             }}
//             onDoubleClick={() => {
//               if (!isDragging && !isResizing) {
//                 setSelectedImageIndex(null);
//                 setSelectedTextIndex(null);
//               }
//             }}
//             onMouseDown={(e) => handleMouseDown(e, index, 'text')}
//           >
//             {textElement.text}
//             {selectedTextIndex === index && (
//               <>
//                 <div
//                   style={{
//                     position: 'absolute',
//                     right: -5,
//                     bottom: -5,
//                     width: 10,
//                     height: 10,
//                     backgroundColor: '#45B7D1',
//                     cursor: 'nwse-resize',
//                     zIndex: textElement.settings.zIndex + 1,
//                   }}
//                   onMouseDown={(e) => handleResizeStart(e, 'width')}
//                 />
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="options" style={{ overflowY: 'auto', padding: '10px' }}>
//         {backgroundColors && (
//           <div>
//             <h4>Choose color:</h4>
//             <ColorPicker
//               selectedColor={selectedColor}
//               onColorChange={handleColorChange}
//             />
//             <p>Selected: {selectedColor}</p>
//           </div>
//         )}

//         {uploadImage && (
//           <UploadImage
//             handleImageUpload={handleImageUpload}
//             getSelectedImage={getSelectedImage}
//             uploadedImages={uploadedImages}
//             selectedImageIndex={selectedImageIndex}
//             updateImageSetting={updateImageSetting}
//             deleteImage={deleteImage}
//           />
//         )}

//         {showText && (
//           <CustomizeText
//             updateTextSetting={updateTextSetting}
//             currentText={currentText}
//             setCurrentText={setCurrentText}
//             addTextElement={addTextElement}
//             textElements={textElements}
//             selectedTextIndex={selectedTextIndex}
//             getSelectedText={getSelectedText}
//             selectText={selectText}
//             deleteTextElement={deleteTextElement}
//             updateTextContent={updateTextContent}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomizeImage;
