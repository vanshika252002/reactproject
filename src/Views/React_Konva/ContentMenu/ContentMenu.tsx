// import './constentmenu.css';
// import React from 'react';

// interface ContextMenuProps {
//   x: number;
//   y: number;
//   onClose: () => void;
//   onBringToFront: () => void;
//   onMoveForward: () => void;
//   onMoveBackward: () => void;
//   onSendToBack: () => void;
//   onDelete: () => void;
// }

// const ContextMenu: React.FC<ContextMenuProps> = ({
//   x,
//   y,
//   onClose,
//   onBringToFront,
//   onMoveForward,
//   onMoveBackward,
//   onSendToBack,
//   onDelete,
// }) => {
//   return (
//     <div
//       className="context-menu"
//       style={{
//         position: 'absolute',
//         left: `${x}px`,
//         top: `${y}px`,
//         zIndex: 1000,
//         backgroundColor: 'white',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
//         padding: '8px 0',
//         minWidth: '200px',
//       }}
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div className="menu-item" onClick={onBringToFront}>
//         Bring to Front
//       </div>
//       <div className="menu-item" onClick={onMoveForward}>
//         Bring Forward
//       </div>
//       <div className="menu-item" onClick={onMoveBackward}>
//         Send Backward
//       </div>
//       <div className="menu-item" onClick={onSendToBack}>
//         Send to Back
//       </div>
//       <div className="menu-divider"></div>
//       <div className="menu-item" onClick={onDelete}>
//         Delete
//       </div>
//     </div>
//   );
// };

// export default ContextMenu;
