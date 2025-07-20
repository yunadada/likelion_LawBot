import "./RiskClauseBlock.css";

const RiskClauseBlock = ({
  riskLevel,
  originalText,
  riskReason,
  legalReferences,
  riskLevelColorMap,
}) => {
  const riskClass = riskLevelColorMap?.[riskLevel] || "";

  return (
    <div className="riskClauseBlock">
      <div className="risk">
        <h5 className={`${riskClass}`}>{riskLevel}</h5>
        <div className="text">{originalText}</div>
      </div>
      <div className="riskInfo">
        <div className="reason">
          <h5>사유</h5>
          <div className="text">{riskReason}</div>
        </div>
        <div className="legalBasis">
          <h5>법령 근거</h5>
          <div className="text">{legalReferences}</div>
        </div>
      </div>
    </div>
  );
};

export default RiskClauseBlock;
