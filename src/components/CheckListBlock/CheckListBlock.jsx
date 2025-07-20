import "./CheckListBlock.css";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";

const CheckListBlock = ({ items }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkedStates, setCheckedStates] = useState(
    new Array(items.length).fill(false) // 모든 체크 항목 초기값: false
  );

  const changeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleCheck = (index) => {
    const updated = [...checkedStates];
    updated[index] = !updated[index];
    setCheckedStates(updated);
  };

  const saveCheckedItems = () => {
    const checkedItems = items
      .filter((_, idx) => checkedStates[idx])
      .map((item) => item.item);
    console.log("체크된 항목:", checkedItems);
    // 서버 저장 로직 추가해야됨
  };

  return (
    <div className="checkListBlock">
      <div className="dropdownBox">
        <label htmlFor="dropdown">계약 유형 선택:</label>
        <select id="dropdown" value={selectedOption} onChange={changeOption}>
          <option value="">-- 옵션 선택 --</option>
          <option value="employment">근로</option>
          <option value="subcontract">하도급</option>
          <option value="nda">NDA</option>
        </select>
      </div>

      <table className="checkListTable" role="table" aria-label="체크리스트">
        <colgroup>
          <col style={{ width: "80%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>체크 항목</th>
            <th>체크 박스</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.item}</td>
              <td>
                <input
                  type="checkbox"
                  checked={checkedStates[idx]}
                  onChange={() => toggleCheck(idx)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="saveDocs">
        <button onClick={saveCheckedItems}>
          <div className="buttonInner">
            <FaDownload />
            <p>저장</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CheckListBlock;
