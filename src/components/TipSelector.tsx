import { useState, type ChangeEvent } from "react";

interface InputProps {
  onTipChange: (tempTip: number) => void;
}

function TipSelector({ onTipChange }: InputProps) {
  const [selected, setSelected] = useState(-1);
  const [input, setInput] = useState("");
  const [btnColor, setBtnColor] = useState("primary");

  const percentages = [5, 10, 15, 20];

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const selectedPercentage = Number(
      (event.target as HTMLButtonElement).value
    );
    //if user presses on any of the predefined percentages button we set the custom input to be empty
    setInput("");
    setBtnColor("primary");
    onTipChange(selectedPercentage);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //reset button colors when user starts typing
    setBtnColor("primary");
    setSelected(-1);
    setInput(event.target.value);
  }

  function handleInputCLick(event: React.MouseEvent<HTMLButtonElement>) {
    const inputedPercentage = Number((event.target as HTMLButtonElement).value);
    // when user presses confirm we make the input remain & change text color
    setBtnColor("success");
    setInput(inputedPercentage.toString());
    onTipChange(inputedPercentage);
  }

  return (
    <>
      <div
        className="btn-group mb-3"
        role="group"
        aria-label="Basic outlined example"
        style={{ alignItems: "center", display: "flex" }}
      >
        {percentages.map((percentage, index) => {
          return (
            <button
              type="button"
              className={
                selected === index
                  ? "btn btn-primary ps-3 pe-3"
                  : "btn btn-outline-primary ps-3 pe-3"
              }
              value={percentage}
              key={index}
              onClick={(e) => {
                setSelected(index);
                handleClick(e);
              }}
            >
              {percentage}%
            </button>
          );
        })}
      </div>

      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Custom tip~"
          aria-label="Custom tip~"
          aria-describedby="basic-addon2"
          value={input}
          onChange={handleChange}
        ></input>
        <span className="input-group-text" id="basic-addon2">
          %
        </span>
        <span className="input-group-text" id="basic-addon2">
          <button
            type="button"
            className={"btn btn-" + btnColor}
            value={input}
            onClick={handleInputCLick}
          >
            Confirm
          </button>
        </span>
      </div>
    </>
  );
}

export default TipSelector;
