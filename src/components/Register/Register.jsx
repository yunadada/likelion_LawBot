import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      await axios.post("http://서버주소/api/register", {
        name,
        email,
        password,
      });

      alert("계정 생성이 완료 되었습니다. 로그인 페이지로 이동해주세요.");
      navigate("/login");
    } catch (err) {
      console.error("계정 생성 실패:", err.response || err.message || err);
      alert("계정 생성이 되지 않았습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>계정 생성</h2>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>계정 생성</button>
      </div>
    </div>
  );
};

export default Register;
