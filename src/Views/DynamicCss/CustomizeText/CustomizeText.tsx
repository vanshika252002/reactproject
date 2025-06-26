// const CustomizeText = ({
//   updateTextSetting,
//   currentText,
//   setCurrentText,
//   addTextElement,
//   textElements,
//   selectedTextIndex,
//   getSelectedText,
//   selectText,
//   deleteTextElement,
//   updateTextContent,
// }) => {
//   return (
//     <div className="fill">
//       <h4>Add Text</h4>
//       <div style={{ marginBottom: '15px', width: '75%' }}>
//         <span>Type Text:</span>
//         <input
//           placeholder="enter text"
//           value={currentText}
//           onChange={(e) => setCurrentText(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               addTextElement();
//             }
//           }}
//         />
//         <button
//           onClick={addTextElement}
//           style={{
//             marginLeft: '10px',
//             padding: '5px 10px',
//             backgroundColor: '#45B7D1',
//             color: 'white',
//             border: 'none',
//             borderRadius: '3px',
//             cursor: 'pointer',
//           }}
//         >
//           Add Text
//         </button>
//       </div>

//       {/* Text elements list */}
//       {textElements.length > 0 && (
//         <div style={{ marginBottom: '15px' }}>
//           <h5>Text Elements:</h5>
//           {textElements.map((textElement, index) => (
//             <div
//               key={textElement.id}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginBottom: '5px',
//                 padding: '5px',
//                 backgroundColor:
//                   selectedTextIndex === index ? '#e8f4f8' : 'transparent',
//                 borderRadius: '3px',
//                 width: '75%',
//               }}
//             >
//               <span
//                 style={{
//                   flex: 1,
//                   cursor: 'pointer',
//                   marginRight: '10px',
//                 }}
//                 onClick={() => selectText(index)}
//               >
//                 "{textElement.text}"
//               </span>
//               <button
//                 onClick={() => deleteTextElement(index)}
//                 style={{
//                   padding: '2px 6px',
//                   backgroundColor: '#ff4444',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '3px',
//                   cursor: 'pointer',
//                   fontSize: '12px',
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Text editing controls */}
//       {selectedTextIndex !== null && (
//         <div className="fill">
//           <h5>Edit Selected Text:</h5>
//           <div style={{ marginBottom: '10px' }}>
//             <span>Text Content:</span>
//             <input
//               value={getSelectedText()?.text || ''}
//               onChange={(e) => updateTextContent(e.target.value)}
//               style={{ width: '85%', marginTop: '5px' }}
//             />
//           </div>

//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <div>
//               <span>X-axis:</span>
//               <input
//                 type="number"
//                 value={getSelectedText()?.settings.x || 0}
//                 onChange={(e) => updateTextSetting('x', e.target.value)}
//                 style={{ width: '75%' }}
//               />
//             </div>
//             <div>
//               <span>Y-axis:</span>
//               <input
//                 type="number"
//                 value={getSelectedText()?.settings.y || 0}
//                 onChange={(e) => updateTextSetting('y', e.target.value)}
//                 style={{ width: '75%' }}
//               />
//             </div>
//           </div>

//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <div>
//               <span>Font Size:</span>
//               <input
//                 type="number"
//                 value={getSelectedText()?.settings.fontSize || 20}
//                 onChange={(e) => updateTextSetting('fontSize', e.target.value)}
//                 style={{ width: '75%' }}
//               />
//             </div>
//             <div>
//               <span>Font Weight:</span>
//               <select
//                 value={getSelectedText()?.settings.fontWeight || 'normal'}
//                 onChange={(e) =>
//                   updateTextSetting('fontWeight', e.target.value)
//                 }
//                 style={{ width: '75%' }}
//               >
//                 <option value="normal">Normal</option>
//                 <option value="bold">Bold</option>
//                 <option value="lighter">Lighter</option>
//                 <option value="bolder">Bolder</option>
//               </select>
//             </div>
//           </div>

//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <div>
//               <span>Font Style:</span>
//               <select
//                 value={getSelectedText()?.settings.fontStyle || 'normal'}
//                 onChange={(e) => updateTextSetting('fontStyle', e.target.value)}
//                 style={{ width: '75%' }}
//               >
//                 <option value="normal">Normal</option>
//                 <option value="italic">Italic</option>
//                 <option value="oblique">Oblique</option>
//               </select>
//             </div>
//             <div>
//               <span>Text Color:</span>
//               <input
//                 type="color"
//                 value={getSelectedText()?.settings.color || '#000000'}
//                 onChange={(e) => updateTextSetting('color', e.target.value)}
//                 style={{ width: '75%', height: '35px' }}
//               />
//             </div>
//             <div>
//               <span>Font Family:</span>
//               <select
//                 value={getSelectedText()?.settings.fontFamily || 'Arial'}
//                 onChange={(e) =>
//                   updateTextSetting('fontFamily', e.target.value)
//                 }
//                 style={{ width: '75%' }}
//               >
//                 <option value="Arial">Arial</option>
//                 <option value="Verdana">Verdana</option>
//                 <option value="Tahoma">Tahoma</option>
//                 <option value="Georgia">Georgia</option>
//                 <option value="Times New Roman">Times New Roman</option>
//                 <option value="Courier New">Courier New</option>
//                 <option value="Impact">Impact</option>
//                 <option value="Comic Sans MS">Comic Sans MS</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default CustomizeText;
