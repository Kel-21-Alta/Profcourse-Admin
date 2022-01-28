/** @format */
import { useMemo } from "react";
export default function TableRequest(props) {
  const sortedData = useMemo(() => {
    //   descending
    if (props.tab === "semua") {
      return props?.data;
    } else {
      return props?.data?.filter((a) => a.category === props.tab);
    }
  }, [props.data, props.tab]);
  //   const sortedData = useMemo(() => {
  //     if (props.tab !== "semua") {
  //         props?.data?.filter((a) => (a.category === props.tab));
  //       } else {
  //         (props?.data)
  //       }

  //     });
  //   }, [props.data]);
  return (
    <div className="mt-4">
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Topik</th>
              <th scope="col">Bidang</th>
              <th scope="col">Pengaju</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item, id) => (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{item.body}</td>
                <td>{item.category}</td>
                <td>{item.user_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
