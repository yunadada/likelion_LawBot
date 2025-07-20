import { useEffect, useState } from "react";
import "./DView.css";
import Modal from "../Modal/Modal";
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const DView = () => {
  const [documents, setDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { id: 1, name: "근로계약서_최종본.docx", date: "30/12/2024" },
      { id: 2, name: "프로젝트_기획서.pdf", date: "30/12/2024" },
      { id: 3, name: "출근부.xlsx", date: "30/12/2024" },
    ];

    setDocuments(mockData);
  }, []);

  const uploadDocument = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewResult = (docId) => {
    navigate("/result");
    // navigate(`/result/${docId}`);
  };

  // const updateUploadedFiles = (uploadedFiles) => {
  //   const today = new Date();
  //   const day = String(today.getDate()).padStart(2, "0");
  //   const month = String(today.getMonth() + 1).padStart(2, "0");
  //   const year = today.getFullYear();
  //   const formattedDate = `${day}/${month}/${year}`;

  //   const newDocs = uploadedFiles.map((file, index) => ({
  //     id: Date.now() + index,
  //     name: file.name,
  //     date: formattedDate,
  //   }));

  //   setDocuments((prev) => [...newDocs, ...prev]); // 새 파일 위에
  //   closeModal();
  // };

  return (
    <>
      {isModalOpen && <Modal onClose={closeModal} />}

      <div className="background">
        <div className="container">
          <div className="title">
            <div className="titleContainer">
              <IoDocumentText />
              <h2>내 문서 목록 조회</h2>
            </div>

            <button onClick={uploadDocument}> 문서 업로드</button>
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
                  <th scope="col">결과 조회</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td>{doc.name}</td>
                    <td>{doc.date}</td>
                    <td>
                      <button
                        onClick={handleViewResult}
                        className="checkResult"
                      >
                        조회
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DView;
