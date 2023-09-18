import Monaliza from "../src/assets/welcomeimage1661254149_256.jpg";
import David from "../src/assets/davidcover1661254508_256.jpg";
import Sogreat from "../src/assets/sogreat1661259325_256.jpg";
import Europ from "../src/assets/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg";
import Emd from "../src/assets/Diamond.png";

const chapterItems = [
  {
    completed: false,
    imgSrc: Monaliza,
    mainText: "Hello",
    subText: "Learn greetings for meeting people",
    url: "/test",
    chapterId: 1,
    lessonId: 1,
  },
  {
    completed: false,
    imgSrc: David,
    mainText: "Introducing yourself",
    subText: "Say your name",
    url: "/something",
    chapterId: 1,
    lessonId: 2,
  },
  {
    completed: false,
    imgSrc: Sogreat,
    mainText: "Saying how you are",
    subText: "Talk about how you feel",
    chapterId: 1,
    lessonId: 3,
  },
  {
    completed: false,
    imgSrc: Europ,
    mainText: "Developing fluency",
    subText: "Introduce yourself",
    chapterId: 1,
    lessonId: 4,
  },
  {
    completed: false,
    type: "checkpoint",
    imgSrc: Emd,
    mainText: "Checkpoint",
    subText: "Test your skills to access the next chapter",
    chapterId: 1,
    lessonId: 5,
  },
];

export default chapterItems;
