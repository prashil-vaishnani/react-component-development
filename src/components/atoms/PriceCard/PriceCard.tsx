import "./PriceCard.scss";

const PriceCard = ({
  text,
  Icon,
}: {
  text: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="priceCard">
      <div className="iconWrapper">
        <Icon />
      </div>
      <div className="iconName">{text}</div>
    </div>
  );
};

export default PriceCard;
