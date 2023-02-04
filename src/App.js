import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

import { getAuth, onAuthStateChanged } from "firebase/auth";
//리덕스 훅
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

function App(props) {
  const navigate = useNavigate();
  //
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  /**
   * onAuthStateChanged > 유저의 상태를 지켜보는 함수
   */
  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     //로그인이된 상태
  //     if (user) {
  //       navigate("/");
  //       //유저 정보 받은것을 리덕스 스토어에 넣어주면 됨
  //       //
  //       dispatch(setUser(user));

  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       // ...
  //     } else {
  //       navigate("/login");
  //       dispatch(clearUser());
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
