import Spinner from "../../assets/spinner.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="background">
      <img src={Spinner} alt="로딩종..." className="spinner"></img>
      <p>문서를 분석 중입니다.</p>
    </div>
  );
};

export default Loading;
