import React, { useState } from "react";
import {
  LoginContainer,
  RegistarButton,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  SignUpForm,
} from "./SignForm.elements";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { useUser } from "../../UserContext"; // Import the useUser hook from UserContext

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useUser(); // Use the setUser function from UserContext

  const getArabicErrorMessage = (englishMessage) => {
    // ... (same as before)
  };

  const extractEmailPrefix = (email) => {
    return email.split("@")[0];
  };

  const signIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((authData) => {
        if (authData) {
          setUser({ emailPrefix: extractEmailPrefix(email) }); // Set emailPrefix in UserContext
          navigate("/");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((authData) => {
        if (authData) {
          setUser({ emailPrefix: extractEmailPrefix(email) }); // Set emailPrefix in UserContext
          navigate("/");
        }
      })
      .catch((error) => {
        const arabicError = getArabicErrorMessage(error.message);
        setErrorMessage(arabicError);
      });
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm>
          <LoginSignSubHeader>ايميل</LoginSignSubHeader>
          <LoginSignInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignButton onClick={signIn}>سجل الدخول</SignButton>
        </SignUpForm>
        <LoginSignPara>
          بتسجيل الدخول، أنت توافق على شروط استخدام ١٢انجليش. يُرجى الاطلاع على
          إشعار الخصوصية الخاص بنا، وإشعار الكوكيز، وإشعار الإعلانات المستندة
          إلى الاهتمامات.
        </LoginSignPara>
        <RegistarButton onClick={register}>تسجيل حساب جديد</RegistarButton>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignForm;
