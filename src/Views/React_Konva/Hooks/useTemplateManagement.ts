// import { useState } from 'react';
// import { saveTemplate, listTemplates, getTemplate, TemplateData } from '../firebase';

// export const useTemplateManagement = () => {
//   const [templates, setTemplates] = useState<{ name: string; data: TemplateData }[]>([]);
//   const [templateName, setTemplateName] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const loadTemplates = async () => {
//     try {
//       const templateList = await listTemplates();
//       setTemplates(templateList);
//     } catch (error) {
//       console.error('Error loading templates:', error);
//     }
//   };

//   const loadTemplate = async (templateName: string) => {
//     setIsLoading(true);
//     try {
//       const templateData = await getTemplate(templateName);

//       setShapes(templateData.shapes);
//       setText(templateData.text);

//       const restoredImages = await Promise.all(
//         templateData.images.map(async (imgData) => {
//           const img = new Image();
//           return new Promise((resolve) => {
//             img.onload = () => {
//               resolve({
//                 ...imgData,
//                 imageElement: img,
//               });
//             };
//             img.src = imgData.src;
//           });
//         })
//       );
//       setImages(restoredImages as any);
//       setSelectedColor(templateData.background.color);
//       if (templateData.background.imageUrl) {
//         const bgImg = new Image();
//         bgImg.onload = () => {
//           setBackgroundImage(bgImg);
//           setBackgroundImageUrl(templateData.background.imageUrl || null);
//         };
//         bgImg.src = templateData.background.imageUrl;
//       } else {
//         setBackgroundImage(null);
//         setBackgroundImageUrl(null);
//       }

//       setSelectedShapeId(null);
//       setSelectedImageId(null);
//       setSelectedTextId(null);
//     } catch (error) {
//       console.error('Error loading template:', error);
//       alert(
//         `Failed to load template: ${
//           error instanceof Error ? error.message : String(error)
//         }`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSaveTemplate = async () => {
//     if (!templateName.trim()) {
//       alert('Please enter a template name');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const templateData: TemplateData = {
//         shapes,
//         images: images.map((img) => ({
//           ...img,
//           src: img.src,
//           imageElement: null,
//         })),
//         text,
//         background: {
//           color: selectedColor,
//           ...(backgroundImageUrl && { imageUrl: backgroundImageUrl }),
//         },
//       };

//       await saveTemplate(templateName, templateData);
//       alert('Template saved successfully!');
//       setTemplateName('');
//       loadTemplates();
//     } catch (error) {
//       console.error('Error saving template:', error);
//       alert('Failed to save template');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     templates,
//     templateName,
//     setTemplateName,
//     isLoading,
//     loadTemplates,
//     loadTemplate,
//     handleSaveTemplate,
//   };
// };
