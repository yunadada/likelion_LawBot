import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            alert("이메일과 비밀번호를 모두 입력해주세요.");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/auth/sign-in",
                { email, password },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            const accessToken = res.headers["authorization"];

            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
                navigate("/");
            } else {
                alert("로그인에 실패했습니다. 정보를 다시 확인해주세요.");
            }
        } catch (err) {
            alert("로그인에 실패했습니다. 정보를 다시 확인해주세요.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>로그인</h2>
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
                <button onClick={handleLogin}>로그인</button>
            </div>
        </div>
    );
};

export default Login;
