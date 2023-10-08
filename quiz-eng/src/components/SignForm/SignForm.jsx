import React, { useState, useEffect } from "react";
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
import { setPersistence, auth, browserLocalPersistence } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { useUser } from "../../UserContext"; // Import the useUser hook from UserContext
import { useLesson } from "../../LessonContext"; // Import the useUser hook from UserContext
import { database, ref, set, onValue } from "../../firebase";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setLessonsCompleted } = useLesson();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const getArabicErrorMessage = (englishMessage) => {
    // ... (same as before)
  };

  const extractEmailPrefix = (email) => {
    return email.split("@")[0];
  };

  const signIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    await setPersistence(auth, browserLocalPersistence);

    signInWithEmailAndPassword(auth, email, password)
      .then((authData) => {
        if (authData) {
          const { user } = authData;
          const uid = user.uid; // This is your user's unique ID

          setUser({ uid, emailPrefix: extractEmailPrefix(email) });

          // Fetch lessons progress from Firebase based on the user's uid
          const userLessonsRef = ref(database, "lessons/" + uid);
          onValue(userLessonsRef, (snapshot) => {
            const val = snapshot.val();
            setLessonsCompleted(
              val || {
                1: [true, false, false, false, false],
                2: [false, false, false, false, false],
                // more chapters here
              }
            );
            navigate("/train");
          });
        }
      })
      .catch((error) => {
        // Handle error (you probably want to display a message to the user)
        setErrorMessage(error.message);
      });
  };

  const register = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    await setPersistence(auth, browserLocalPersistence);

    createUserWithEmailAndPassword(auth, email, password)
      .then((authData) => {
        if (authData) {
          const { user } = authData;
          const uid = user.uid; // This is your user's unique ID
          setUser({ uid, emailPrefix: extractEmailPrefix(email) });
          navigate("/train");
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
