import React from "react";
import "./style.scss";

const Recovery: React.FC = () => {
  return (
    <div className="recovery-container">
      <h1>TIKI Recovery Program for MOAI Lossholders</h1>

      <div className="card-items">
        <div className="card-item" role="gray">
          <div className="card-content">
            <p className="card-header">{"Claimable Balance:"}</p>
            <p className="card-body">
              {
                "Your currently claimable BNB balance from the recovery protocol is:"
              }
              <br />
              <br />
              <span className="text-label">{"CONNECT YOUR WALLET"}</span>
              <br />
              <br />
              {"Click "}
              <button>{"HERE"}</button>
              {" to claim your pending balance."}
            </p>
          </div>
        </div>
        <div className="card-item" role="purple">
          <div className="card-content">
            <p className="card-header">{"Remaining Balance:"}</p>
            <p className="card-body">
              {"You have claimned "}
              <span className="text-label">{"CONNECT YOUR WALLET"}</span>

              {
                " from the recovery protocol. Your total amount to be paid from the recovery protocol is "
              }

              <span className="text-label">{"CONNECT YOUR WALLET"}</span>
              {
                ". Please continue to check here as the claimable balance grows to meet your full loss."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
