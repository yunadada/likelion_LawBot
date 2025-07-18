import "./CheckListBlock.css";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

const CheckListBlock = () => {
  return (
    <div className="checkListBlcok">
      <table className="checkListTable">
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
          <tr>
            <td>기타 자문 업무의 범위가 명확히 기재되어 있는가?</td>
            <td>
              <ImCheckboxUnchecked />
              {/* 체크 안된거 */}
            </td>
          </tr>
          <tr>
            <td>기타 자문 업무의 범위가 명확히 기재되어 있는가?</td>
            <td>
              <ImCheckboxChecked />
              {/* 체크 된거 */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckListBlock;
