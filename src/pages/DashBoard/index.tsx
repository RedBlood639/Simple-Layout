import React from "react";

import "./style.scss";

const DashBoard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>TIKI Earnings Manager</h1>
      <div className="div-1">
        <span className="span-1-1">
          <div className="div-1-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="span-1-2">
              {"Please enter your address above"}
            </span>
          </div>
          <div className="div-1-2">
            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0">
              {"Buy TIKI "}
            </a>
            <span>→</span>
          </div>
        </span>
      </div>

      <div className="div-2">
        <div className="div-2-1">
          <div className="div-2-1-1">
            <div className="div-2-1-1-1" role="orange">
              <div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="div-2-1-1-2">
              <p className="p-1">{"Your TIKI Holdings"}</p>
              <p className="p-2">{"0 TIKI"}</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="div-2-1">
          <div className="div-2-1-1">
            <div className="div-2-1-1-1" role="green">
              <div>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="div-2-1-1-2">
              <p className="p-1">{"Total BNB Paid"}</p>
              <p className="p-2">
                <span className="span-yellow">{"0.0000 "}</span>
                <span className="span-green">
                  <i>{" ~$0.00"}</i>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="div-2-1">
          <div className="div-2-1-1">
            <div className="div-2-1-1-1" role="blue">
              <div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="div-2-1-1-2">
              <p className="p-1">{"Last Payout Time"}</p>
              <p className="p-2">{"Never"}</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="div-2-1">
          <div className="div-2-1-1">
            <div className="div-2-1-1-1" role="yellow">
              <div>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="div-2-1-1-2">
              <p className="p-1">{"Payout Loading"}</p>
              <p className="p-2">
                <span className="span-yellow">{"Processing "}</span>
                <span>{" | 0%"}</span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="div-3">
        <div className="div-3-1">
          <button>TIKI TO $PUPPY</button>
        </div>
      </div>
      {/*  */}
      <div className="div-4">
        <div className="div-4-1">
          <div className="div-4-1-1">
            <img src="https://tikitoken.app/static/media/bnb.162aaf57.png" />
            <p className="title">{"Total BNB Paid To TIKI Holders"}</p>
            <br />
            <p className="span-green">
              {"21,039 "}
              <span className="span-yellow">{"BNB"}</span>
              <br />
              {" = $6,696,815"}
            </p>
          </div>
        </div>
        <div className="div-4-2">
          <div className="div-4-2-1">
            <p>
              {
                "Estimations are based on a default of the last 24h of trading volume"
              }
              <br />
              {
                "Change the volume to predict earnings based on other volume figures"
              }
              <br />
              {"Trading Volume = $ "}
              <input value="69,152" />
            </p>
          </div>
        </div>
        {/*  */}
        <div className="div-4-3">
          <div className="div-4-3-1">
            <img src="https://tikitoken.app/static/media/money.d301ec34.png"></img>
            <p className="title">{"Your 0 TIKI Earns:"}</p>
            <br />
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 BNB"}</span>
                {" ($0.00)"}
              </p>
              <span>{"Per Day"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 BNB"}</span>
                {" ($0.00)"}
              </p>
              <span>{"Per Month"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 BNB"}</span>
                {" ($0.00)"}
              </p>
              <span>{"Per Week"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 BNB"}</span>
                {" ($0.00)"}
              </p>
              <span>{"Per Year"}</span>
            </div>
            <br />
            <p className="footer">
              {"Dynamic estimations based on trading volume of $70,509"}
            </p>
          </div>
        </div>
        {/*  */}
        <div className="div-4-3">
          <div className="div-4-3-1">
            <img src="https://tikitoken.app/static/media/money.d301ec34.png"></img>
            <p className="title">
              {"By Reinvesting Dividends Every Day, Your 0 TIKI Becomes::"}
            </p>
            <br />
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 TIKI"}</span>
                {" (0x Earnings)"}
              </p>
              <span>{"Per Day"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 TIKI"}</span>
                {" (0x Earnings)"}
              </p>
              <span>{"Per Month"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 TIKI"}</span>
                {" (0x Earnings)"}
              </p>
              <span>{"Per Week"}</span>
            </div>
            <div className="div-4-3-1-1">
              <p>
                <span className="span-yelllow"> {"0.00 TIKI"}</span>
                {" (0x Earnings)"}
              </p>
              <span>{"Per Year"}</span>
            </div>
            <br />
            <p className="footer">
              {"Estimations are based on current $TIKI price ($0.0062)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
