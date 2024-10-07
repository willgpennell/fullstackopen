import Header from "./Header";
import Content from "./Content";
import Excercises from "./Excercises";

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundementals of React",
      excercises: 10,
    },
    {
      name: "Using props to pass data",
      excercises: 7,
    },
    {
      name: "State of a component",
      excercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Excercises parts={parts} />
    </div>
  );
};

export default App;
