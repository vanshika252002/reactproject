import {
  Stage,
  Layer,
  Rect,
  Transformer,
  Image as KonvaImage,
} from 'react-konva';
import '../../DynamicCss/CustomizeImage/CustomizeImage.css';
import { ShapeData, ImageData, TextState } from '../types';
import { useRef, useEffect } from 'react';

const RenderImage = ({
  stageRef,
  selectedColor,
  backgroundImage,
  shapes,
  images,
  text,
  sortByZIndex,
  renderShape,
  renderImage,
  renderText,
  transformerRef,
  selectedTextId,
  selectedImageId,
  selectedShapeId,
  size,
}: any) => {
  const localTransformerRef = useRef<any>(null);

  useEffect(() => {
    const transformer = transformerRef.current || localTransformerRef.current;
    if (!transformer) return;

    if (selectedTextId) {
      transformer.anchorSize(8);
      transformer.borderStroke('#00ff00');
      transformer.borderStrokeWidth(1);
      transformer.enabledAnchors([
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ]);
      transformer.keepRatio(false);
    } else {
      transformer.anchorSize(8);
      transformer.borderStroke('#00ff00');
      transformer.borderStrokeWidth(1);
      transformer.enabledAnchors([
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ]);
      transformer.keepRatio(false);
    }
  }, [selectedTextId, selectedImageId, selectedShapeId]);
  console.log(size);

  return (
    <div className="image">
      <Stage ref={stageRef} width={size.width} height={size.height}>
        <Layer>
          <Rect
            width={size.width}
            height={size.height}
            fill={selectedColor}
            shadowColor="rgba(11, 5, 5, 0.5)"
            shadowBlur={10}
            shadowOffset={{ x: 5, y: 5 }}
            shadowOpacity={0.8}
            listening={false}
          />

          {backgroundImage && (
            <KonvaImage
              image={backgroundImage}
              width={size.width}
              height={size.height}
            />
          )}

          {[...shapes, ...images, ...text].sort(sortByZIndex).map((element) => {
            if ('type' in element) return renderShape(element as ShapeData);
            else if ('src' in element) return renderImage(element as ImageData);
            else return renderText(element as TextState);
          })}

          <Transformer
            ref={transformerRef || localTransformerRef}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
            anchorSize={8}
            borderEnabled={true}
            borderStroke="#00ff00"
            borderStrokeWidth={1}
            anchorStroke="#00ff00"
            anchorCornerRadius={4}
            rotateAnchorOffset={30}
            ignoreStroke={false}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default RenderImage;
