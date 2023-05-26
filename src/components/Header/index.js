import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang, setFontSize } from "../../Redux/typingSpeedSlice";

function Header() {
  const { lang, fontSize } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center mt-4">
        <h1>
          {lang === "turkish" ? "Yazma Hızı Uygulaması" : "Typing Speed App"}
        </h1>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-6">
            {lang === "turkish" ? "Dil: " : "Language: "}
            <select
              value={lang}
              className="me-3"
              onChange={(e) => dispatch(setLang(e.target.value))}
            >
              <option value="turkish">Türkçe</option>
              <option value="english">English</option>
            </select>
            {lang === "turkish" ? "Boyut: " : "Size: "}
            <select
              value={fontSize}
              onChange={(e) => dispatch(setFontSize(e.target.value))}
            >
              <option value="small">
                {lang === "turkish" ? "küçük" : "small"}
              </option>
              <option value="medium">
                {lang === "turkish" ? "orta" : "medium"}
              </option>
              <option value="large">
                {lang === "turkish" ? "büyük" : "large"}
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
