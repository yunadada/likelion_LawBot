import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">로그인 페이지 이동</Link>
        </li>
        <li>
          <Link to="/register">계정 생성 페이지 이동</Link>
        </li>
        <li>
          <Link to="/dview">문서 목록 조회 페이지 이동</Link>
        </li>
        <li>
          <Link to="/dupload">문서 업로드 페이지 이동</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
