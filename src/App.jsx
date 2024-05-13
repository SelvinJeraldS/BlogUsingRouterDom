import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import Fullstack from "./Pages/Fullstack";
import CyberSecurity from "./Pages/CyberSecurity";
import DataScience from "./Pages/DataScience";
import Carrer from "./Pages/Carrer";

const App = () => {
  const data = [
    {
      image:
        "https://www.guvi.com/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      head: "Fullstack Development",
      content: "Best Full-Stack Development Project Ideas In 2024",
      date: "08 May 2024",
    },
    {
      image:
        "https://www.guvi.com/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      head: "CyberSecurity",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      date: "08 May 2024",
    },
    {
      image:
        "https://www.guvi.com/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      head: "Fullstack Development",
      content: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "A UI/UX project focuses on creating a user interface and experience for a digital product, such as a website, mobile app, or software application. Designers may conduct extensive user research and even take feedback from the user to make their product better.",
      date: "08 May 2024",
    },
    {
      image:
        "https://www.guvi.com/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      head: "Fullstack Development",
      content: "Top 10 Full-Stack Developer Frameworks in 2024",
      description:
        "In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. As businesses continue to embrace online platforms and advanced technologies, they require professionals who can handle every aspect of web development, from design and front-end development to back-end coding and database management.",
      date: "08 May 2024",
    },
    {
      image:
        "https://www.guvi.com/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      head: "CyberSecurity",
      content: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "A UI/UX project focuses on creating a user interface and experience for a digital product, such as a website, mobile app, or software application. Designers may conduct extensive user research and even take feedback from the user to make their product better.",
      date: "08 May 2024",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-768x402.webp",
      head: "DataScience",
      content: "10 Best DevOps Project Ideas for 2024",
      description:
        "DevOps is an amazing and highly demanding profession in the tech world. DevOps Projects are considered the best projects since they make the software fully automated by using some well-defined techniques. If you’re a learning enthusiast and have a good knowledge of DevOps, you have come to the right place.",
      date: "08 May 2024",
    },
    {
      image: "https://static.guvi.in/course-thumbnail/webps/reactnative.webp",
      head: "Carrer",
      content: "React Native Tamil",
      description:
        "Develop and publish your very first application on the Play Store from scratch with this beginner-to-expert React Native course (taught completely in Tamil) and take a huge leap towards the Development career of your dreams.",
      date: "08 May 2024",
    },
    {
      image: "https://static.guvi.in/course-thumbnail/webps/reactnative.webp",
      head:"Carrer",
      content: "Python Zero to Hero",
      description:
        "Master the most and we really do mean THE MOST used and always in high-demand programming language ever: Python, and go from zero to hero with this exclusive, all-in Python course and reach out to the career of your dreams. If you’re a techie, you already know that knowing how to code in Python is an absolute must, and even if you’re not, you’ll probably need Python soon enough!",
      date: "08 May 2024",
    }
  ];

  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<All data={data} />} />
        <Route path="/fullstack" element={<Fullstack data={data} />}>
          {" "}
          Fullstack{" "}
        </Route>
        <Route path="/cybersecurity" element={<CyberSecurity data={data} />} />
        <Route path="/datascience" element={<DataScience data={data} />} />
        <Route path="/carrer" element={<Carrer data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
