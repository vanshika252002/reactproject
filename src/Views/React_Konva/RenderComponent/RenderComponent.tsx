import {
  Stage,
  Layer,
  Rect,
  Transformer,
  Image as KonvaImage,
} from 'react-konva';
import '../../DynamicCss/CustomizeImage/CustomizeImage.css';
import { ShapeData, ImageData, TextState } from '../types';
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
}: any) => {
  return (
    <div className="image">
      <Stage ref={stageRef} width={600} height={700}>
        <Layer>
          <Rect
            width={600}
            height={700}
            fill={selectedColor}
            shadowColor="rgba(11, 5, 5, 0.5)"
            shadowBlur={10}
            shadowOffset={{ x: 5, y: 5 }}
            shadowOpacity={0.8}
            listening={false}
            visible={true}
          />

          {backgroundImage && (
            <KonvaImage image={backgroundImage} width={600} height={700} />
          )}
          {[...shapes, ...images, ...text].sort(sortByZIndex).map((element) => {
            if ('type' in element) return renderShape(element as ShapeData);
            else if ('src' in element) return renderImage(element as ImageData);
            else return renderText(element as TextState);
          })}
          <Transformer
            ref={transformerRef}
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
            keepRatio={false}
            enabledAnchors={[
              'top-left',
              'top-center',
              'top-right',
              'middle-left',
              'middle-right',
              'bottom-left',
              'bottom-center',
              'bottom-right',
            ]}
          />
        </Layer>
      </Stage>
    </div>
  );
};
export default RenderImage;
