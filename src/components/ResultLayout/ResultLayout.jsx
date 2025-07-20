import { useState } from "react";
import Highlighter from "react-highlight-words";
import "./ResultLayout.css";
import RiskClauseBlock from "../RiskClauseBlock/RiskClauseBlock";
import EasyExplanationBlock from "../EasyExplanationBlock/EasyExplanationBlock";
import CheckListBlock from "../CheckListBlock/CheckListBlock";

const ResultLayout = () => {
  const tapList = ["위험 조항 탐지", "쉬운 말 해석", "체크리스트"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const riskLevelColorMap = {
    "위험도 높음": "highlight-red",
    "위험도 중간": "highlight-orange",
  };

  const dummyRiskClauses = [
    {
      riskLevel: "위험도 중간",
      content: `"갑"은 지원하는 법률자문 위원이 "응"이 주관하는 프로젝트와 관련된 국가의 변 호사 자격증 또는 이에 준하는 경력을 보유한 자로 추천하여 투입하여야 하며 모든 경력을 합한 기간이 0년 이상이 되어야 한다.`,
      reason: "일방 당사자에게만 과도한 책임을 부과함",
      legalBasis: "민법 제103조(반사회질서 법률행위)",
    },
    {
      riskLevel: "위험도 높음",
      content: `"갑"은 본조의 보증을 위하여 관련 자격증 사본 등을 본 계약서 말미에 첨부하기로 하고 이에 대해 허위 또는 하자가 있을 시 그에 대한 모든 손해의 책임을 "갑"이 부담한다.`,
      reason: "개인정보보호법 위반 가능성 있음",
      legalBasis: "개인정보보호법 제17조(제3자 제공 제한)",
    },
  ];

  const dummyEasyExplanations = [
    {
      riskLevel: "위험도 중간",
      content: "계약 기간 동안 계약을 해지할 경우 위약금을 지불해야 한다.",
      easyExplanation: "계약을 중간에 끝내면 돈을 내야 해요.",
      recommendedSentence: "계약 해지 사유에 따라 위약금이 조정될 수 있습니다.",
    },
    {
      riskLevel: "위험도 낮음",
      content: "고객 정보는 마케팅 목적에 사용될 수 있습니다.",
      easyExplanation: "내 정보가 광고에 쓰일 수 있어요.",
      recommendedSentence: "개인정보는 동의한 범위 내에서만 활용됩니다.",
    },
  ];

  const dummyChecklist = [
    { item: "계약 해지 조건이 명확히 명시되어 있는가?", checked: true },
    { item: "개인정보 보호 관련 조항이 포함되어 있는가?", checked: false },
    { item: "지급 조건 및 기한이 명확한가?", checked: true },
    { item: "계약 해지 조건이 명확히 명시되어 있는가?", checked: true },
  ];

  const dummyText = `
법률자문 계약서

법률검토 컨설턴트 업체 ㈜OOO(이하 "갑"이라 칭한다)의 자문위원 선임사 ㈜OOOO(이하 "을"이라 칭한다)는 상호간에 다음과 같이 법률자문 계약을 체결한다.

제1조 (목적)
본 계약은 "갑"의 해당분야를 진단검사로 "을"의 업무에 활용하기 위하여 "갑"은 고문으로 선임하고 이와 관련된 일체의 자문을 제공받는데 목적이 있다.

제2조 (협의 범위조항)
"갑"은 "을"의 계약의 추진과정에서 "을"의 법률관련 문의에 있어서 필요한 자 문업무를 수행하며 구체적으로 다음 각호의 업무를 포함한다.
1) 계약의 사업관련 법률 시스템 조언
2) 회의자료 자문 및 해석
3) 계약조건 및 법률 조항 작성과 타당성검토
4) 기타 법적 자문업무 일체

제3조 (한정적 협력의무)
"갑"은 지정하는 법률자료를 위임이 "을"이 추진하는 프로젝트와 관련 계약의 법적 자격조 또는 이에 준하는 절차를 법률적으로 자문하며 확인함과 해당 요건을 검토한 합리적인 여부 이상이 되어야 한다.
"갑"은 본건의 보증을 위하여 관련 자격자를 해당 내용에 포함하지 않으며 법적 책임이 없으며, "을"의 진행에 대한 보증의무도 하지 않는다.

제4조 (자료의 이용)
"을"은 매회 회의에 앞서 요청된 ㈜OOO 제공 "을"이 보낸 자료로부터 "갑"의 계획 하에 협의를 진행한다(누적기록 유지).
제4조 조항의 계약 자문업무의 수행 중 사에는 별도 계약서를 통해 수수료를 지급받으며 이러한 수행과정은 "을"이 사전 통보 후 동의한 절차로만 가능하다.
본 문건의 계약 진행 중 발생하는 비용 광고광고비, 숙박비, 식사 및 출장비 등은 "을"이 별도로 부담한다.
`;

  const highlightTargets = dummyRiskClauses.map(({ content, riskLevel }) => ({
    phrase: String(content).trim(),
    className: riskLevelColorMap[riskLevel],
  }));

  const getHighlightedText = (text, targets) => {};

  const renderComponent = () => {
    switch (selectedIndex) {
      case 0:
        return dummyRiskClauses.map((data, index) => (
          <RiskClauseBlock key={index} {...data} index={index} />
        ));
      case 1:
        return dummyEasyExplanations.map((data, index) => (
          <EasyExplanationBlock key={index} {...data} index={index} />
        ));
      case 2:
        return <CheckListBlock items={dummyChecklist} />;
      default:
        return null;
    }
  };

  return (
    <div className="layoutBackground">
      <div className="leftContent">
        <div className="docsTitle">법률자문_계약서.docx</div>
        <div className="docsContents">
          {getHighlightedText(dummyText, highlightTargets)}
        </div>
      </div>
      <div className="rightContent">
        <div className="tapBar">
          {tapList.map((content, index) => (
            <button
              key={index}
              className={`item ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              {content}
            </button>
          ))}
        </div>
        <div className="analysisResult">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ResultLayout;
