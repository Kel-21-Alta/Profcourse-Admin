/** @format */

import ModulEach from "./modulEach";

export default function ModulBox(props) {
  console.log("isi data", props?.data);
  return (
    <div
      className="container py-3 px-3 mt-4"
      style={{
        width: "100%",
        backgroundColor: "#DEE2E6",
        "border-radius": "15px",
        border: "none",
      }}>
      {props.data?.map((item) => (
        <ModulEach data={item} />
      ))}
    </div>
  );
}
