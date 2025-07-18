import "./ResultLayout.css";

const ResultLayout = ({ component }) => {
  const tapList = ["위험 조항 탐지", "쉬운 말 해석", "체크리스트"];

  return (
    <div className="layoutBackground">
      <div className="leftContent">
        <div className="docsTitle">법률자문_계약서.docx</div>
        <div className="docsContents">내용</div>
      </div>
      <div className="rightContent">
        <div className="tapBar">
          {tapList.map((content, index) => (
            <button className="item" key={index}>
              {content}
            </button>
          ))}
        </div>
        <div className="analysisResult">{component}</div>
      </div>
    </div>
  );
};

export default ResultLayout;
