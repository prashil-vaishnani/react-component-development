import "./ActivitiesCard.scss";

const ActivitiesCard = ({
  Icon,
  activitiesType,
  activitiesTotal,
}: {
  Icon: React.ElementType;
  activitiesType: string;
  activitiesTotal: string;
}) => {
  return (
    <div className="activitiesCardWrapper">
      <div className="activitiesCardIcon">
        <Icon />
      </div>
      <div className="activitiesCardDetails">
        <div className="activitiesCardDetailsType">{activitiesType}</div>
        <div className="activitiesCardDetailsStatus">Complete</div>
        <div className="activitiesCardDetailsTotal">{activitiesTotal}</div>
      </div>
      <div className="activitiesCardDate">Nov 22, 2020</div>
    </div>
  );
};
export default ActivitiesCard;
