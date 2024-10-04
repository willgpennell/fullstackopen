const Content = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.excercises}
      </p>
    </>
  );
};

export default Content;
