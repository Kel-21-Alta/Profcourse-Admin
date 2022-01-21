/** @format */
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import axios from "axios";
import MateriCard from "../cards/materiCard";

export default function MateriBox(props) {
  const [cookie] = useCookies();
  const sortedData = useMemo(() => {
    //   descending
    return props.data?.sort((a, b) => a.order > b.order);
  }, [props?.data]);

  const [materis, setMateris] = useState(sortedData);

  //   //drag n drop function
  //   const handleOnDragEnd = (result) => {
  //     const items = Array.from(materis);
  //     const [reorderedItem] = items.splice(result.source.index, 1);
  //     items.splice(result.destination.index, 0, reorderedItem);
  //     setMateris(items);
  //   };

  //functions
  //Update materi
  function updateMateri(
    materi_id,
    modul_id,
    type_materi,
    title,
    order,
    file_materi
  ) {
    axios
      .put(
        `${BACKEND_URL}/api/v1/materi/${materi_id}`,
        {
          modul_id,
          title,
          order,
          type_materi,
          file_materi,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.userData.token}`,
          },
        }
      )
      .then(function (response) {
        alert(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
      });
  }
  //   //Delete materi
  function deleteMateri(materi_id) {
    axios
      .delete(`${BACKEND_URL}/api/v1/materi/${materi_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        alert(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <>
      <DragDropContext
      //   onDragEnd={handleOnDragEnd}
      >
        <Droppable droppableId="materi">
          {(provided) => (
            <ul
              className="list-Group m-0 p-0"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {sortedData?.length === 0 && (
                <div className="text-center">Belum ada Materi nih :(</div>
              )}
              {sortedData?.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      className="list-group-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <MateriCard
                        data={item}
                        modul_id={props.modul_id}
                        delete={deleteMateri}
                        update={updateMateri}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {/* //   <DragDropContext onDragEnd={handleOnDragEnd}>
    //     <Droppable droppableId="materi">
    //       {(provided) => (
    //         <ul
    //           className="list-Group"
    //           {...provided.droppableProps}
    //           ref={provided.innerRef}>
    //           {sortedData.length === 0 && (
    //             <div className="text-center">Belum ada Materi nih :(</div>
    //           )}
    //           {sortedData.map(({ item }, index) => (
    //             <Draggable key={item.id} draggableId={item.id} index={index}>
    //               {(provided) => (
    //                 <li
    //                   ref={provided.innerRef}
    //                   {...provided.draggableProps}
    //                   {...provided.dragHandleProps}>
    //                   <MateriCard
    //                     data={item}
    //                     modul_id={props.modul_id}
    //                     // delete={deleteMateri}
    //                     // update={updateMateri}
    //                   />
    //                 </li>
    //               )}
    //             </Draggable>
    //           ))}
    //           {provided.placeholder}
    //         </ul>
    //       )}
    //     </Droppable>
    //   </DragDropContext> */}
    </>
  );
}
