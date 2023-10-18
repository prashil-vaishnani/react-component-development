import { Button } from "antd";
import "./WalletCard.scss";
import { AssetsIcon, Deposit, ExchangeIcon, WithDraw } from "../../atoms/icons";

const WalletCard = () => {
  return (
    <div className="walletCardWrapper">
      <div className="WalletCard">
        <div className="Wallet__Top">
          <div className="WalletTextBox">
            <div className="WalletTextBox__textTotal">Total Balance</div>
            <div className="WalletTextBox__Btc">
              <div className="WalletTextBox__BtcNumber">0.26231428</div>
              <Button className="WalletTextBox__BtcBtn">BTC</Button>
            </div>
            <div className="WalletTextBox__Usd">3,700.96 USD</div>
          </div>
          <div className="WalletTXBtn">
            <Button className="WalletTXBtn_Withdraw">
              <WithDraw />
              Withdraw
            </Button>
            <Button className="WalletTXBtn_Deposit">
              <Deposit /> Deposit
            </Button>
          </div>
        </div>
        <div className="Wallet_Bottom">
          <div className="Wallet_Bottom_Exchange">
            <div>
              <ExchangeIcon />
            </div>
            <div className="ExchangeTexts">
              <div className="ExchangeTexts_EB">Exchange Balance</div>
              <div className="ExchangeTexts_Btc">0.256567545 BTC</div>
              <div className="ExchangeTexts_Usd">3,700.96 USD</div>
            </div>
          </div>
          <div className="Wallet_Bottom_Exchange">
            <div>
              <AssetsIcon />
            </div>
            <div className="ExchangeTexts">
              <div className="ExchangeTexts_EB">Assets Balances</div>
              <div className="ExchangeTexts_Btc">0.256567545 BTC</div>
              <div className="ExchangeTexts_Usd">3,700.96 USD</div>
            </div>
          </div>
          <div className="">
            <div>Exchange Balance</div>
            <div className="Exchnage_Divider" />
            <div>Assets Balance</div>
            <div className="Asset_Divider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
