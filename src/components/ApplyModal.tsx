import Modal from "./uiParts/Modal";

type Props = {
  doAction: () => void;
  isPending: boolean;
  hasDone: boolean;
  onClose: () => void;
};

const ApplyModal = ({ doAction, isPending, hasDone, onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-black">タイトル</p>
        <p className="text-black">
          {hasDone ? "完了しました" : "実行しますか"}
        </p>
        {!hasDone && (
          <button
            type="button"
            onClick={doAction}
            disabled={isPending}
            className="bg-blue-500"
          >
            実行
          </button>
        )}
        <button type="button" onClick={onClose} className="bg-gray-500">
          閉じる
        </button>
      </div>
    </Modal>
  );
};

export default ApplyModal;
