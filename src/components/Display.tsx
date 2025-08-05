interface InputFeildProps {
  hidden: boolean;
  totalCostPerPerson: Number;
  totalTip: Number;
  totalTipPerPerson: Number;
  grandTotal: Number;
  totalPrice: Number;
}

function Display({
  hidden,
  totalCostPerPerson,
  totalTip,
  totalTipPerPerson,
  grandTotal,
  totalPrice,
}: InputFeildProps) {
  return (
    <>
      <div className="card" style={{ width: "300px" }} hidden={hidden}>
        <h5 className="card-header">Split Info</h5>
        <div className="card-body">
          <p className="card-text">
            Total including tip: ${totalPrice.toFixed(2).toString()}
          </p>
          <p className="card-text">
            Total Tip: ${totalTip.toFixed(2).toString()}
          </p>
          <p className="card-text">
            Total per person exluding tip: $
            {totalCostPerPerson.toFixed(2).toString()}
          </p>
          <p className="card-text">
            Tip per Person: ${totalTipPerPerson.toFixed(2).toString()}
          </p>
        </div>
        <div className="card-footer text-white text-center bg-primary">
          Grand Total per person: ${grandTotal.toFixed(2).toString()}
        </div>
      </div>
    </>
  );
}

export default Display;
