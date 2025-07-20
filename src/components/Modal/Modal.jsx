import { useRef, useState, useEffect } from "react";
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FaDownload } from "react-icons/fa6";

const Modal = ({ onClose }) => {
  const modalBackground = useRef(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const clickBackground = (e) => {
    if (e.target === modalBackground.current) {
      onClose();
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadSelectedFile = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8080/api/documents/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const data = await res.json();
      setFileId(data.fileId);
      setIsLoading(true);

      if (data.status === "completed") {
        navigate(`/result/${data.fileId}`);
      } else {
        setIsLoading(true);
      }
    } catch (err) {
      console.error("업로드 실패", err);
      alert("문서 업로드 중 오류가 발생했습니다.");
    }
  };

  // 상태 폴링
  useEffect(() => {
    if (!fileId || !isLoading) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/documents/status/${fileId}`,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          }
        );

        const data = await res.json();
        if (data.status === "completed") {
          clearInterval(interval);
          navigate(`/result/${fileId}`);
        }
      } catch (e) {
        console.error("상태 확인 실패", e);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [fileId, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className="modalBackground"
          ref={modalBackground}
          onClick={clickBackground}
        >
          <div className="modal">
            <div className="modalTitle">
              <p>문서 업로드</p>
              <button onClick={onClose}>
                <IoCloseOutline />
              </button>
            </div>

            <div className="contents">
              <div className="selectFile">
                <label>
                  파일 선택
                  <input type="file" ref={fileInputRef} onChange={uploadFile} />
                </label>
              </div>

              <div className="docs">
                {selectedFile ? selectedFile.name : "선택된 파일이 없습니다."}
              </div>

              <div className="uploadButton">
                <button onClick={uploadSelectedFile}>
                  <div className="buttonInner">
                    <FaDownload />
                    <p>업로드</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
