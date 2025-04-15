const Result = (props) => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-white font-bold lg:text-lg">{props.name}</h2>
        <p className="text-light text-sm font-bold">/ person</p>
      </div>   
      <p className="text-cyan font-bold text-3xl lg:text-5xl">
        {props.value}
      </p>
    </div>
  );
};

export default Result;
