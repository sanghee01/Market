import './signIn.css';

export default function SignIn() {
  return (
    <form className="form2">
      <div className="titleWrap">
        <img src={require('./Daangeun_Logo_Color_RGB.png')} />{' '}
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="email">이메일</label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="pwd">비밀번호</label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
      </div>
      <div className="inputBox">
        <button className="submit">로그인</button>
      </div>
      <div className="movetoSignup">
        아직 회원이 아니세요?
        <span className="movetoSignupButton" onClick={alert}>
          회원가입
        </span>
      </div>
    </form>
  );
}
