import "./EasyExplanationBlock.css";

const EasyExplanationBlock = ({
  riskLevel,
  content,
  easyExplanation,
  recommendedSentence,
}) => {
  return (
    <div className="easyExplanationBlock">
      <div className="risk">
        <h5>{riskLevel}</h5>
        <div className="text">{content}</div>
      </div>
      <div className="easy">
        <h5>쉬운 설명</h5>
        <div className="text">{easyExplanation}</div>
      </div>
      <div className="recommended">
        <h5>권장 문장</h5>
        <div className="text">{recommendedSentence}</div>
      </div>
    </div>
  );
};

export default EasyExplanationBlock;
