const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].name} {props.parts[0].excercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].excercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].excercises}
      </p>
    </>
  );
};

export default Content;
