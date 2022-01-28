/** @format */

import SpesialisasiCard from "../cards/spesialisasiCard";

export default function SpesialisasiTab(props) {
  console.log(props?.data);
  return (
    <div>
      <div className="container mx-3 p-0">
        <div className="row row-cols-1 row-cols-md-3 gap-5 text-center">
          {props.data?.map((item) => (
            <SpesialisasiCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
