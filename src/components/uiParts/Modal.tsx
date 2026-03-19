const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const handleBackDropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackDropClick}
      className="fixed inset-0 z-10 flex items-center bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <div className="mr-auto ml-auto w-1/2 bg-white p-4">{children}</div>
    </div>
  );
};

export default Modal;
