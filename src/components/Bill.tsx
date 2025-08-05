import { useState, type ChangeEvent } from "react";
import TipSelector from "./TipSelector";
import Display from "./Display";
import ResetButton from "./ResetButton";

interface BillInfo {
  totalTip: number;
  totalPerPerson: number;
  tipPerPerson: number;
  grandTotal: number;
  toBePaid: number;
}

function Bill() {
  const [tip, setFinalTip] = useState<number | null>(null);
  const [billInfo, setBillInfo] = useState<BillInfo | null>(null);

  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState("");
  const [hidden, setHidden] = useState(true);

  function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }
  function handleChangePeople(event: ChangeEvent<HTMLInputElement>) {
    setPeople(event.target.value);
  }

  function handleClick() {
    if (tip === null || amount === "" || people === "") {
      setError("All fields must be filled");
      return;
    }
    setHidden(false);
    setBillInfo({
      toBePaid: (tip * Number(amount)) / 100 + Number(amount),
      totalTip: (tip * Number(amount)) / 100,
      totalPerPerson: Number(amount) / Number(people),
      tipPerPerson: (tip * Number(amount)) / 100 / Number(people),
      grandTotal:
        Number(amount) / Number(people) +
        (tip * Number(amount)) / 100 / Number(people),
    });
  }

  function handleClickReset() {
    setAmount("");
    setPeople("");
    setError("");
    setHidden(true);
    setBillInfo(null);
    setFinalTip(null);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "3vh",
        }}
      >
        <div
          style={{
            width: "300px",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={amount}
              onChange={handleChangeAmount}
              required
            ></input>
            <span className="input-group-text">.00</span>
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Number of people"
              aria-label="Number of people"
              aria-describedby="basic-addon2"
              value={people}
              onChange={handleChangePeople}
              required
            ></input>
            <span className="input-group-text" id="basic-addon2">
              people
            </span>
          </div>
          <TipSelector onTipChange={(tempTip) => setFinalTip(tempTip)} />
          <p className="text-center" style={{ color: "red" }}>
            {error}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Split Bill
          </button>

          <Display
            hidden={hidden}
            totalCostPerPerson={billInfo?.totalPerPerson ?? 0}
            totalTip={billInfo?.totalTip ?? 0}
            totalTipPerPerson={billInfo?.tipPerPerson ?? 0}
            grandTotal={billInfo?.grandTotal ?? 0}
            totalPrice={billInfo?.toBePaid ?? 0}
          />
        </div>
        <ResetButton hidden={hidden} onClickReset={() => handleClickReset()} />
      </div>
    </>
  );
}

export default Bill;
