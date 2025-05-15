import { useState, useEffect } from "react";
import Input from "./components/Input";
import Choice from "./components/Choice";
import Result from "./components/Result";

const App = () => {
  const [bill, setBill] = useState("");
  const [choice, setChoice] = useState("");
  const [customChoice, setCustomChoice] = useState("");
  const [people, setPeople] = useState(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const tipPercent = customChoice || choice;

  useEffect(() => {
    if (bill > 0 && tipPercent > 0 && people > 0) {
      const tip = (bill * tipPercent) / 100;
      const total = bill + tip;

      setTipAmount(tip / people);
      setTotalAmount(total / people);
    } else {
      setTipAmount(0);
      setTotalAmount(0);
    }
  }, [bill, tipPercent, people]);

  const handleReset = () => {
    setBill("");
    setChoice("");
    setCustomChoice("");
    setPeople(1);
    setTipAmount(0);
    setTotalAmount(0);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
  };

  return (
    <div className="flex flex-col items-center pt-10 font-mono gap-8 lg:h-screen lg:justify-center lg:gap-0">
      <h1 className="tracking-1 font-bold text-h1 text-2xl break-words w-25.5 text-center ml-2.5 lg:pb-10">
        SPLITTER
      </h1>

      <main className="bg-white w-[90%] max-w-xl rounded-3xl p-6 flex flex-col gap-8 lg:flex-row lg:p-9 lg:max-w-[60rem] lg:gap-10 shadow-custom">
        <section className="flex flex-col gap-8 lg:gap-12">
          <Input 
            name="Bill" 
            id="bill" 
            value={bill}
            placeholder="0"
            image="./src/assets/images/icon-dollar.svg" 
            onChange={(e) => setBill(Number(e.target.value))}
          />

          <article className="flex flex-col gap-4">
            <label className="font-bold text-label lg:text-lg">Select Tip %</label>
            <form className="grid grid-cols-2 grid-rows-3 gap-y-3.5 place-items-center lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-3.5">
              {["5%", "10%", "15%", "25%", "50%"].map((val) => (
                <Choice 
                  key={val}
                  value={val}
                  onClick={(e) => {
                    setChoice(Number(e.target.value.replace("%", "")));
                    setCustomChoice("");
                  }}
                />
              ))}

              <input
                type="number"
                className="bg-input text-right rounded-sm py-1.5 w-[90%] text-dark font-bold text-2xl placeholder:text-label pr-4 placeholder:font-bold outline-0 focus:ring-2 ring-cyan transition-all lg:w-full lg:text-3xl lg:py-2 lg:pr-2 lg:placeholder:text-center lg:caret-cyan"
                placeholder="Custom"
                value={customChoice}
                onChange={(e) => {
                  setCustomChoice(Number(e.target.value));
                  setChoice("");
                }}
              />
            </form>
          </article>

          <Input
            name="Number of People"
            id="peopleNum"
            value={people}
            placeholder="1"
            image="./src/assets/images/icon-person.svg"
            onChange={(e) => {
              const val = Number(e.target.value);
              setPeople(val === 0 ? 1 : val);
            }}
          />
        </section>

        <section className="bg-dark w-full px-8 py-6 self-center rounded-xl flex flex-col gap-8 lg:p-9 lg:py-9.5 lg:gap-38.5 lg:pt-14">
          <div className="flex flex-col gap-3 lg:gap-11">
            <Result 
              name="Tip Amount" 
              value={formatCurrency(tipAmount)} 
            />
            <Result 
              name="Total" 
              value={formatCurrency(totalAmount)} 
            />
          </div>

          <button
            onClick={handleReset}
            className="bg-reset text-dark py-2 text-2xl rounded-lg active:bg-cyan transition-all font-bold lg:hover:bg-lightcyan lg:hover:cursor-pointer lg:py-3 disabled:opacity-30"
            disabled={bill === "" && people === 1 && choice === "" && customChoice === ""}
          >
            RESET
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
