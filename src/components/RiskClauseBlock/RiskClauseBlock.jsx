import "./RiskClauseBlock.css";

const RiskClauseBlock = ({ riskLevel, content, reason, legalBasis }) => {
  return (
    <div className="riskClauseBlock">
      <div className="risk">
        <h5>{riskLevel}</h5>
        <div className="text">{content}</div>
      </div>
      <div className="riskInfo">
        <div className="reason">
          <h5>사유</h5>
          <div className="text">{reason}</div>
        </div>
        <div className="legalBasis">
          <h5>법령 근거</h5>
          <div className="text">{legalBasis}</div>
        </div>
      </div>
    </div>
  );
};

export default RiskClauseBlock;
