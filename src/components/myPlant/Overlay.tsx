interface OverlayProps {
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => (
  <div className="fixed inset-0 z-30 bg-SementicDimBackground" onClick={onClick} />
);

export default Overlay;
