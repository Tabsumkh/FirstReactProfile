import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar source="tk.jpg" name="Tabsum Khadka" />
      <div className="data">
        <Intro
          name="Tabsum Khadka"
          details="Hi I am rising front end developer. I love to build things :) "
        />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.source} alt={props.name} />
    </div>
  );
}
function Intro(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.details} </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html + CSS" emoji="💪" color="green" />
      <Skill skill="SASS" emoji="👌" color="red" />
      <Skill skill="JavaScript" emoji="💪" color="blue" />
      <Skill skill="React" emoji="💪" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill} </span>
      <span> {props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
