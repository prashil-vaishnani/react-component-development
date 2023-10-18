import WalletCard from "../components/organisms/WalletCard/WalletCard";
import WalletTable from "../components/organisms/WalletTable/WalletTable";

const Wallets = () => {
  return (
    <div className="walletWrapper">
      <WalletCard />
      <WalletTable />
    </div>
  );
};

export default Wallets;
