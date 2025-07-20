import "./CheckListBlock.css";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

const CheckListBlock = ({ documentId }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [items, setItems] = useState([]);
    const [checkedStates, setCheckedStates] = useState([]);

    const changeOption = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);

        if (documentId && selected) {
            axios
                .get(
                    `http://localhost:8080/api/documents/${documentId}/checklist?contractType=${selected}`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("accessToken"),
                        },
                    }
                )

                .then((res) => {
                    if (res.data.success && Array.isArray(res.data.data)) {
                        setItems(res.data.data);
                        setCheckedStates(
                            res.data.data.map((item) => item.isChecked)
                        );
                    } else {
                        console.error("API 응답 형식이 잘못되었습니다.");
                    }
                })
                .catch((err) => {
                    console.error("체크리스트 조회 실패:", err);
                });
        }
    };

    const toggleCheck = (index) => {
        const updated = [...checkedStates];
        updated[index] = !updated[index];
        setCheckedStates(updated);
    };

    const saveCheckedItems = () => {
        const payload = {
            items: items.map((item, idx) => ({
                itemId: item.itemId,
                isChecked: checkedStates[idx],
            })),
        };

        axios
            .post(
                `http://localhost:8080/api/documents/${documentId}/checklist/bulk`,
                payload,
                {
                    headers: {
                        Authorization: localStorage.getItem("accessToken"),
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                if (res.data.success) {
                    alert("저장되었습니다.");
                } else {
                    alert("저장 실패: " + res.data.message);
                }
            })
            .catch((err) => {
                console.error("저장 중 오류 발생:", err);
                alert("저장 중 오류가 발생했습니다.");
            });
    };

    return (
        <div className="checkListBlock">
            <div className="dropdownBox">
                <label htmlFor="dropdown">계약 유형 선택:</label>
                <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={changeOption}
                >
                    <option value="">-- 옵션 선택 --</option>
                    <option value="employment">근로</option>
                    <option value="subcontract">하도급</option>
                    <option value="nda">NDA</option>
                </select>
            </div>

            <table
                className="checkListTable"
                role="table"
                aria-label="체크리스트"
            >
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
                            <td>{item.question}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={checkedStates[idx] || false}
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