const Utility = ({ utility }) => {
  console.log(utility);
  return utility.map((aUtility) => (
    <div key={aUtility.name}>{aUtility.name}</div>
  ));
};

export default Utility;
