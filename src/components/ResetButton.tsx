interface BillProps {
  hidden: boolean;
  onClickReset: () => void;
}

function ResetButton({ hidden, onClickReset }: BillProps) {
  return (
    <button
      type="button"
      className="btn btn-danger"
      hidden={hidden}
      onClick={onClickReset}
    >
      Reset
    </button>
  );
}

export default ResetButton;
