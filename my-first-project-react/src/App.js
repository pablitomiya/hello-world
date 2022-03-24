// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { useState } from "react";
import Email from "./components/Email";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Detail from "./components/pages/Detail";

const course = "Half stack application development";
const part1 = "Fundamentos de React";
const exercises1 = 10;
const part2 = "Useing props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;
const totalEjercicios = exercises1 + exercises2 + exercises3;
const content = {
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
};

const CITIES = ["Buenos Aires", "Medellin", "Chicago", "Londres"];
const App = () => {
  // const names = ["pablito", "pepe", "jose"];
  const handlerSelectCity = (evt) => {
    console.log(evt.target.value);
  };
  const handleClickButton = () => {
    console.log("click button");
  };
  let [count, setCount] = useState(0);
  const handleButton = (evt) => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<About />} exact={true} strict />
          <Route path="/profile" element={<Profile />} exact strict />
          <Route path="/profile/:username" element={<Detail />} exact />
        </Routes>
        <div className="container">
          <Header course={course} />
          <Content content={content} />
          <Total totalEjercicios={totalEjercicios} />
          {/* <Hello names={names} title="Hola mundo" /> */}
          <button onClick={handleClickButton}>Click me!</button>
          <p>la cantidad de click es: {count}</p>
          <button onClick={handleButton}>contador</button>
          <select name="cities" id="cities" onChange={handlerSelectCity}>
            {CITIES.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
          <Email />
          <Email />
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </BrowserRouter>
  );
};

// const Hello = (props) => {
//   const { title, names } = props;
//   return (
//     <>
//       <h1>{title}</h1>
//       <ul>
//         {names && names.length > 0
//           ? names.map((name, idx) => <li key={idx}>{name}</li>)
//           : null}
//       </ul>
//     </>
//   );
// };
export default App;
