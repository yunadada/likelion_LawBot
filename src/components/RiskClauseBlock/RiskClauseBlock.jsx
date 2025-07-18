import "./RiskClauseBlock.css";

const RiskClauseBlock = () => {
  return (
    <div className="riskClauseBlock">
      <div className="risk">
        <h5>위험도 중간</h5>
        <div className="text">기타 "응"이 의뢰하는 업무</div>
      </div>
      <div className="riskInfo">
        <div className="reason">
          <h5>사유</h5>
          <div className="text">어쩌고저쩌고</div>
        </div>
        <div className="legalBasis">
          <h5>법령 근거</h5>
          <div className="text">어쩌고 저쩌고</div>
        </div>
      </div>
    </div>
  );
};

export default RiskClauseBlock;
