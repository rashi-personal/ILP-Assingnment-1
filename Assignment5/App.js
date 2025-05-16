import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Content from "./component/Content/content.jsx";
import List from "./component/List/List.jsx";
import ProfileCard from "./component/profile/ProfileCard.jsx";
import StudentDashboard from "./component/StudentDashboard/StudentDashboard.jsx";
import Calculator from "./component/Calculator/Calculator.jsx";
import Counter from "./component/Counter/Counter.jsx";
import Guest from "./component/Guest/Guest.jsx";
import Counter1 from "./component/Counter1/Counter1.jsx";
import Employee from "./component/Employee/EmployeeForm.jsx";
import UncontrolledForm from "./component/UncontrolledForm/UncontrolledForm.jsx";
import Main from "./Main.jsx";

function App() {
  const user = {
    name: "rashi",
    role: "admin", // can be "admin", "student", or "guest"
  };

  const students = [
    {
      name: "Alice",
      marks: {
        math: 85,
        english: 78,
        science: 92,
      },
    },
    {
      name: "Bob",
      marks: {
        math: 74,
        english: 88,
        science: 81,
      },
    },
    {
      name: "Charlie",
      marks: {
        math: 90,
        english: 67,
        science: 76,
      },
    },
    {
      name: "David",
      marks: {
        math: 66,
        english: 72,
        science: 70,
      },
    },
    {
      name: "Eva",
      marks: {
        math: 95,
        english: 89,
        science: 94,
      },
    },
    {
      name: "Frank",
      marks: {
        math: 58,
        english: 60,
        science: 65,
      },
    },
    {
      name: "Grace",
      marks: {
        math: 80,
        english: 85,
        science: 78,
      },
    },
    {
      name: "Helen",
      marks: {
        math: 73,
        english: 69,
        science: 72,
      },
    },
    {
      name: "Ian",
      marks: {
        math: 88,
        english: 91,
        science: 84,
      },
    },
    {
      name: "Jane",
      marks: {
        math: 79,
        english: 82,
        science: 87,
      },
    },
  ];

  return (
    <>
      <Header />
      <Employee />
      {/* <Counter/> */}
      <Counter1 />
      <UncontrolledForm />
      {/* { <Calculator/>
      <Guest/>
      <StudentDashboard user={user}/>
      <Content/>     
      <div>
         <h1>User Profiles</h1>
         <ProfileCard Name="Alice" Age={20} />
         <ProfileCard Name="Bob" Age={32} />
         <ProfileCard Name="Jolly" Age={30} />
      </div>      
      <List data={students}/> } */}
      <Main/>
      <Footer />
    </>
  );
}

export default App;
