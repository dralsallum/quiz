import React, { createContext, useContext, useState, useEffect } from "react";
import { database, ref, set, onValue } from "./firebase"; // adjust the path accordingly
import { useUser } from "./UserContext"; // adjust the path accordingly
import chapterItems from "./chapterItems";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

const generateInitialState = (items) => {
  const initialState = {};

  items.forEach((item) => {
    if (!initialState[item.chapterId]) {
      initialState[item.chapterId] = [];
    }
    initialState[item.chapterId][item.lessonId - 1] = item.completed;
  });

  return initialState;
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState(
    generateInitialState(chapterItems)
  );

  const { user } = useUser(); // Grab user from UserContext

  useEffect(() => {
    // If user is not authenticated, do not fetch data
    if (!user || !user.uid) return;

    // Fetch lessons progress from Firebase based on the user's uid
    const lessonsRef = ref(database, `lessons/${user.uid}`);
    onValue(lessonsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setLessonsCompleted(data);
      } else {
        // If no data in the database for this user, initialize it.
        setLessonsCompleted(generateInitialState(chapterItems));
      }
    });
  }, [user]);

  const saveProgressToFirebase = (data) => {
    if (!user || !user.uid) return; // Do not save if user is not authenticated

    const lessonsRef = ref(database, `lessons/${user.uid}`);
    set(lessonsRef, data);
  };

  const incrementLesson = () => {
    // Find the first incomplete lesson
    const firstIncompleteLesson = chapterItems.find(
      (item) => !lessonsCompleted[item.chapterId]?.[item.lessonId - 1]
    );

    if (firstIncompleteLesson) {
      const { chapterId, lessonId } = firstIncompleteLesson;

      // Clone the lessonsCompleted object and update the respective lesson as completed
      const updatedProgress = { ...lessonsCompleted };

      if (!updatedProgress[chapterId]) {
        updatedProgress[chapterId] = [];
      }
      updatedProgress[chapterId][lessonId - 1] = true;

      // Update local state
      setLessonsCompleted(updatedProgress);

      // Save updated progress to Firebase
      saveProgressToFirebase(updatedProgress);
    }
  };

  return (
    <LessonContext.Provider
      value={{ lessonsCompleted, setLessonsCompleted, incrementLesson }}
    >
      {children}
    </LessonContext.Provider>
  );
};

export default LessonProvider;
