import { convertMinsToHrsMins, returnDateMMDDYYYY } from "../../../../utils/helperFunctions";

const ReleaseDateAndRuntime = ({ release_date, runtime }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>{returnDateMMDDYYYY(release_date)}(US)</p>
      <pre> _ </pre>
      <p>{convertMinsToHrsMins(runtime)}</p>
    </div>
  );
};

export default ReleaseDateAndRuntime;
