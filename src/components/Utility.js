const Utility = ({ utility }) => {
  return utility.map((aUtility) => <div>{aUtility.name}</div>);
};

export default Utility;
