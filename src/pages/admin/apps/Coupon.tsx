import { FormEvent, useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";

const allLeters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSmbls = "!@#$%^&*()-_=+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNum, setIncludeNum] = useState<boolean>(false);
  const [includeChar, setIncludeChar] = useState<boolean>(false);
  const [includeSmbl, setIncludeSmbl] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeNum && !includeChar && !includeSmbl) {
      return alert("Please select one atleast");
    }
    let result: string = prefix || "";

    const loopLength: number = size - result.length;
    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeChar) entireString += allLeters;
      if (includeNum) entireString += allNumbers;
      if (includeSmbl) entireString += allSmbls;

      const randNum: number = ~~(Math.random() * entireString.length);

      result += entireString[randNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setCopied(false);
  }, [coupon]);

  return (
    <div className="adminContainer">
      <Sidebar />

      <main className="dashboardAppContainer">
        <h1>Coupon</h1>
        <section>
          <form className="couponForm" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size - 2}
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNum}
                onChange={() => setIncludeNum((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeChar}
                onChange={() => setIncludeChar((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSmbl}
                onChange={() => setIncludeSmbl((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {copied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
