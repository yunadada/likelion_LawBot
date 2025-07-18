import "./EasyExplanationBlock.css";

const EasyExplanationBlock = () => {
  return (
    <div className="easyExplanationBlock">
      <div className="risk">
        <h5>위험도 중간</h5>
        <div className="text">기타 "응"이 의뢰하는 업무</div>
      </div>
      <div className="easy">
        <h5>쉬운 설명</h5>
        <div className="text">어쩌고저쩌고</div>
      </div>
      <div className="recommended">
        <h5>권장 문장</h5>
        <div className="text">어쩌고 저쩌고</div>
      </div>
    </div>
  );
};

export default EasyExplanationBlock;
