import { useEffect, useState } from "react";
import "./signUp.css";

export default function Forms() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdc, setPwdc] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function submit() {
    console.log({ email: email, pw: pwd, name: name, age: age });
    alert(name + "님 환영합니다!");
  }

  return (
    <form>
      <div className="titleWrap">회원가입</div>
      <div className="inputBox">
        <div className="inputName">
          <label for="email">
            이메일<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="pwd">
            비밀번호<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력하세요"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="pwdc">
            비밀번호 확인<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="password"
            id="pwdc"
            placeholder="비밀번호를 다시 입력하세요"
            required
            value={pwdc}
            onChange={(e) => setPwdc(e.target.value)}
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="name">
            이름<span className="required">*</span>
          </label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="inputBox">
        <div className="inputName">
          <label for="age">나이</label>
        </div>
        <div className="inputField">
          <input
            className="input"
            type="number"
            id="age"
            placeholder="나이를 입력하세요"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="inputBox">
        <button className="submit" onClick={submit}>
          가입하기
        </button>
      </div>
    </form>
  );
}
