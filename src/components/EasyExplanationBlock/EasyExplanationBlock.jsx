import "./EasyExplanationBlock.css";

const EasyExplanationBlock = ({
  riskLevel,
  originalText,
  simpleExplanation,
  suggestedRevision,
  riskLevelColorMap,
}) => {
  const riskClass = riskLevelColorMap?.[riskLevel] || "";

  return (
    <div className="easyExplanationBlock">
      <div className="risk">
        <h5 className={`${riskClass}`}>{riskLevel}</h5>
        <div className="text">{originalText}</div>
      </div>
      <div className="easy">
        <h5>쉬운 설명</h5>
        <div className="text">{simpleExplanation}</div>
      </div>
      <div className="recommended">
        <h5>권장 문장</h5>
        <div className="text">{suggestedRevision}</div>
      </div>
    </div>
  );
};

export default EasyExplanationBlock;
