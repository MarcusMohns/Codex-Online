const Utility = ({ utility }) => {
  return (
    <div key={utility.name}>
      {utility.count}x{utility.name}
      <img src={utility.image} alt="utility spell, e.g misdirection" />
    </div>
  );
};

export default Utility;
