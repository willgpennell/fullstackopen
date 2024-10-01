const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const name = "Peter";
  const age = 10;

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <Hello name="hi" />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  );
};
export default App;
