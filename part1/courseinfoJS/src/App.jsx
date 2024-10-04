import Header from "./Header";
import Content from "./Content";
import Excercises from "./Excercises";

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundementals of React",
    excercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    excercises: 7,
  };
  const part3 = {
    name: "State of a component",
    excercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />

      <Excercises
        exercises1={part1.excercises}
        exercises2={part2.excercises}
        exercises3={part3.excercises}
      />
    </div>
  );
};

export default App;
