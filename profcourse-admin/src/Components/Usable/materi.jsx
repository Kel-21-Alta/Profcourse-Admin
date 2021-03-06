/** @format */
import axios from "axios";
import { useMemo, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../config/env";
import MateriCard from "../cards/materiCard";

export default function MateriBox(props) {
  const [cookie] = useCookies();
  const sortedData = useMemo(() => {
    //   descending
    return props?.data?.sort((a, b) => a.order > b.order);
  }, [props?.data]);

  var defaultModuls = [];
  if (sortedData === undefined) {
    defaultModuls = [];
  } else {
    defaultModuls = sortedData;
  }
  const [materis, setMateris] = useState(defaultModuls);

  const handleOnDragEnd = (result) => {
    const items = Array.from(sortedData);
    console.log("destinasi", result.destination.index + 1);
    console.log("source", result.source.index + 1);
    if (result.destination.index > result.source.index) {
      console.log("ganti data di backend");
      updateMateri(
        items[result.source.index].id,
        props.modul_id,
        items[result.source.index].type,
        items[result.source.index].title,
        result.destination.index + 1,
        items[result.source.index].url_materi
      );
      for (let i = result.destination.index; i > result.source.index; i--) {
        console.log("Posisi sekarang", i + 1);
        updateMateri(
          items[i].id,
          props.modul_id,
          items[i].type,
          items[i].title,
          i,
          items[i].url_materi
        );
      }
    } else if (result.destination.index < result.source.index) {
      console.log("ganti data di backend");
      updateMateri(
        items[result.source.index].id,
        props.modul_id,
        items[result.source.index].type,
        items[result.source.index].title,
        result.destination.index + 1,
        items[result.source.index].url_materi
      );
      for (let i = result.destination.index; i < result.source.index; i++) {
        console.log("Posisi berganti", i + 1);
        updateMateri(
          items[i].id,
          props.modul_id,
          items[i].type,
          items[i].title,
          i + 2,
          items[i].url_materi
        );
      }
    } else {
      return;
    }
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);
    setMateris(items);
  };

  //   //drag n drop function
  //   const handleOnDragEnd = (result) => {
  //     const items = Array.from(sortedData);
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
        props.getData(modul_id);
        alert(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.message, 2));
        console.log(JSON.stringify(error, 2));
      });
  }
  //   //Delete materi
  function deleteMateri(materi_id, modul_id) {
    axios
      .delete(`${BACKEND_URL}/api/v1/materi/${materi_id}`, {
        headers: {
          Authorization: `Bearer ${cookie.userData.token}`,
        },
      })
      .then(function (response) {
        props.getData(modul_id);
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="materi">
          {(provided) => (
            <ul
              className="list-Group m-0 p-0"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {defaultModuls?.length === 0 && (
                <div className="text-center">Belum ada Materi nih :(</div>
              )}
              {materis?.map((item, index) => (
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
