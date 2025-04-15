const Choice = (props) => {
  return (
    <input
      type="button"
      className="bg-dark rounded-sm py-1.5 w-[90%] text-2xl text-white focus:bg-cyan focus:text-dark transition-all active:bg-lightcyan active:text-dark lg:w-full lg:text-3xl lg:py-2 lg:hover:bg-lightcyan lg:hover:text-dark lg:hover:cursor-pointer"
      value={props.value}
      onClick={props.onClick}
    />
  );
};

export default Choice;
