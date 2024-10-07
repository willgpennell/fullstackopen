const Excercises = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].excercises +
          props.parts[1].excercises +
          props.parts[2].excercises}
      </p>
    </>
  );
};

export default Excercises;
