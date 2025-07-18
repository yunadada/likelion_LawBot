import "./DView.css";
import { BsDownload } from "react-icons/bs";

const DView = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="title">
          <h2>📘 내 문서 목록 조회</h2>
          <button> 문서 업로드</button>
        </div>
        <div className="content">
          <table className="table" role="table" aria-label="문서 목록">
            <colgroup>
              <col style={{ width: "65%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "10%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">파일 이름</th>
                <th scope="col">올린 날짜</th>
                <th scope="col">다운로드</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>근로계약서_최종본.docx</td>
                <td>30/12/2024</td>
                <td>
                  <button className="downloadButton">
                    <BsDownload />
                  </button>
                </td>
              </tr>
              <tr>
                <td>근로계약서_최종본.docx</td>
                <td>30/12/2024</td>
                <td>
                  <button className="downloadButton">
                    <BsDownload />
                  </button>
                </td>
              </tr>
              <tr>
                <td>근로계약서_최종본.docx</td>
                <td>30/12/2024</td>
                <td>
                  <button className="downloadButton">
                    <BsDownload />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DView;
