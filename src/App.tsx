import "./styles.css";
import data from "./data.json";
import { Accordion } from "./Components/Accordion";

export default function App() {
  return (
    <div className="App">
      {data.faq.map((obj, index) => {
        return <Accordion question={obj.question} answer={obj.answer} />;
      })}
    </div>
  );
}
