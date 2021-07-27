import React from "react";
import "./style.scss";

const Investment: React.FC = () => {
  return (
    <div className="invest-container">
      <h1>Tasks to boost your income</h1>
      <p>
        {
          "The tasks outlined below can significantly impact the (future) value of your investment."
        }
        <br />
        {
          "As such, investors are highly encouraged to perform these tasks as often as possible."
        }
      </p>
      <div className="card-items">
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/coinmarketcap.a72a0e25.png"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"CoinMarketCap"}</p>
            <p className="card-content-text">
              {
                "We are listed on CMC! To help get more exposure and enhance market value:"
              }
              <br />
              <br />
              {"✅Use "}
              <a
                href="https://keeprefreshing.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"keeprefreshing.com"}
              </a>
              {" and set timer to 10 seconds. Open as many tabs as you can."}
              <br />
              {
                "✅Add Tiki Token to watchlist, and tell your friends to do the same."
              }
              <br />
              {"✅Vote 'Good' at the bottom of the page."}
            </p>
            <div className="card-link">
              <a
                href="https://coinmarketcap.com/currencies/tiki-token/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TIKI on CoinMarketCap
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>

        {/* // */}
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/logo_coingecko.30d53b9c.png"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"CoinGecko"}</p>
            <p className="card-content-text">
              {
                "Go to TIKI's CoinGecko page and click on the STAR to LIKE TIKI!"
              }
            </p>
            <div className="card-link">
              <a
                href="https://www.coingecko.com/en/coins/tiki-token"
                target="_blank"
                rel="noopener noreferrer"
              >
                TIKI on CoinGecko
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>
        {/* // */}
        {/* // */}
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/logo_google.b7727941.svg"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"Google"}</p>
            <p className="card-content-text">
              {
                "Searching for these terms on Google increases their ranking, causing more people to get them as suggestions."
              }
            </p>
            <a href="https://www.google.com/">{`Search Google for "TIKI Token"`}</a>
            <br />
            <a href="https://www.google.com/">{`Search Google for "TIKI free bnb"`}</a>
            <br />
            <br />
            <div className="card-link">
              <p>
                {
                  "Of course, feel free to do any amount of additional searches for even more effect!"
                }
              </p>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>
        {/* // */}
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/logo_youtube.46bc6904.svg"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"YouTube"}</p>
            <p className="card-content-text">
              {
                "Searching for these terms on YouTube increases their ranking, causing more people to get them as suggested videos or search suggestions."
              }
            </p>
            <a href="https://www.google.com/">{`Search YouTube for "TIKI Token"`}</a>
            <br />
            <a href="https://www.google.com/">{`Search YouTube for "TIKI free bnb"`}</a>
            <br />
            <br />
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>
        {/* // */}
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/logo_twitter.66649964.svg"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"Twitter"}</p>
            <p className="card-content-text">
              {
                "Using the following hashtags in your tweet(s) will increase their ranking, get them trending and attract the attention of potential new investors."
              }
            </p>
            <p className="card-content-text font-bold">
              {"#TIKIToken #TIKI1Dollar #TIKIBNB"}
            </p>
            <div className="card-link">
              <a
                href="https://www.twitter.com/compose/tweet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Compose a new tweet
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>
        {/* // */}
        {/* // */}
        <div className="card-item">
          <div className="card-image">
            <img src="https://tikitoken.app/static/media/logo_instagram.3c451c27.svg"></img>
          </div>
          <div className="card-body">
            <p className="card-header-text">{"Instagram"}</p>
            <p className="card-content-text">
              {
                "Using the following hashtags in your tweet(s) will increase their ranking, get them trending and attract the attention of potential new investors."
              }
            </p>
            <p className="card-content-text font-bold">{"#TIKI #TIKIToken"}</p>
            <div className="card-link">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Post on Instagram
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div>
              <input type="checkbox"></input>
              <label>{"Task completed for today"}</label>
            </div>
          </div>
        </div>
        {/* // */}
      </div>
    </div>
  );
};

export default Investment;
