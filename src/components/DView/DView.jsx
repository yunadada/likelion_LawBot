import { useEffect, useState } from "react";
import "./DView.css";
import Modal from "../Modal/Modal";
import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DView = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [documents, setDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const dummyFiles = {
    data: [
      {
        id: 261,
        fileName: "sample_nda.pdf",
        uploadedAt: "2025-07-20T17:42:17",
      },
      {
        id: 262,
        fileName: "sample_employ.pdf",
        uploadedAt: "2025-07-20T17:42:17",
      },
      {
        id: 263,
        fileName: "sample_sub.pdf",
        uploadedAt: "2025-07-20T17:42:17",
      },
    ],
  };

  useEffect(() => {
    // 날짜 변환 포함된 문서 목록 생성 -> 실제 연결시에는 dummyFiles를 documents로 변경
    const formattedDocs = dummyFiles.data.map((file) => ({
      id: file.id,
      name: file.fileName,
      date: formattedDate(file.uploadedAt),
    }));

    setDocuments(formattedDocs);

    // 실제 요청
    // const fetchDocsData = async () => {
    //   try {
    //     const res = await axios.get("/api/documents", {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     console.log("응답: ", res.data);
    //     setDocuments(res.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchDocsData();
  }, []);

  const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const uploadDocument = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewResult = (docId) => {
    if (docId) {
      navigate("/result", { state: { docId } });
      console.log("docId: ", docId);
    } else {
      console.log("조회 실패: 유효하지 않은 문서 ID");
    }
  };

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
            <button onClick={uploadDocument}>문서 업로드</button>
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
                        onClick={() => handleViewResult(doc.id)}
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
