// export const getMaxZIndex = (elements) => {
//     return Math.max(...elements.map(el => el.zIndex), 0);
//   };
  
//   export const getMinZIndex = (elements) => {
//     return Math.min(...elements.map(el => el.zIndex), 0);
//   };
  
//   export const createNewElement = (type, baseProps, zIndex) => ({
//     id: Date.now().toString(),
//     ...baseProps,
//     zIndex,
//     x: Math.random() * 400 + 100,
//     y: Math.random() * 500 + 100,
//   });
  
//   export const handleDragEnd = (elements, id, newPos, setElements) => {
//     setElements(elements.map(el => 
//       el.id === id ? {...el, ...newPos} : el
//     ));
//   };