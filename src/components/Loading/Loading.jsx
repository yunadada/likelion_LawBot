import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../assets/spinner.gif";
import "./Loading.css";
import axios from "axios";

const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { fileId } = location.state || {};

  useEffect(() => {
    if (!fileId) return;

    const interval = setInterval(async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        const res = await axios.get(`/api/documents/${fileId}/status`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = res.data;
        const documentId = data.documentId;
        if (data.status === "OCR_COMPLETED") {
          clearInterval(interval);
          navigate("/result", {
            state: { documentId },
          });
        }
      } catch (error) {
        console.error("상태 확인 실패", error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [fileId, navigate]);

  return (
    <div className="background">
      <img src={Spinner} alt="로딩중..." className="spinner" />
      <p>문서를 분석 중입니다.</p>
    </div>
  );
};

export default Loading;
