/** @format */

import KursusCard from "../cards/kursusCard";

export default function KursusTab(props) {
  return (
    <div>
      <div className="container mx-3 p-0">
        <div className="row row-cols-1 row-cols-md-3 gap-5 text-center">
          {props.data?.map((item) => (
            <KursusCard
              key={item.course_id}
              data={item}
              del={props?.del}
              edit={props?.edit}
              status={props?.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
