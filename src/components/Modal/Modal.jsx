import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";

const Modal = () => {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="modalTitle">
          <p>문서 업로드</p>
          <button>
            <IoCloseOutline />
          </button>
        </div>
        <div className="contents">
          <div className="selectFile">
            <button>파일 선택</button>
          </div>
          <div className="docs">법률자문 계약서.docx</div>
          <div className="uploadButton">
            <button>업로드</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
