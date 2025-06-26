// import { useState } from 'react';
// import { ColorResult } from '@hello-pangea/color-picker';

// export const useBackgroundImage = () => {
//   const [selectedColor, setSelectedColor] = useState('#ffffff');
//   const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
//   const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(null);

//   const handleColorChange = (color: ColorResult) => {
//     setSelectedColor(color.hex);
//   };

//   return {
//     selectedColor,
//     backgroundImage,
//     backgroundImageUrl,
//     setSelectedColor,
//     setBackgroundImage,
//     setBackgroundImageUrl,
//     handleColorChange,
//   };
// };