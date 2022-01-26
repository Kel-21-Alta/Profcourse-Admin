/** @format */

import ModulEach from "./modulEach";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useMemo, useState } from "react";

export default function ModulBox(props) {
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
  const [moduls, setModul] = useState(defaultModuls);

  const handleOnDragEnd = (result) => {
    const items = Array.from(moduls);
    console.log("destinasi", result.destination.index + 1);
    console.log("source", result.source.index + 1);
    if (result.destination.index > result.source.index) {
      console.log("ganti data di backend");
      props.update(
        items[result.source.index].modul_id,
        props.course,
        items[result.source.index].name_modul,
        result.destination.index + 1
      );
      for (let i = result.destination.index; i > result.source.index; i--) {
        console.log("Posisi sekarang", i + 1);
        props.update(items[i].modul_id, props.course, items[i].name_modul, i);
      }
    } else {
      console.log("ganti data di backend");
      props.update(
        items[result.source.index].modul_id,
        props.course,
        items[result.source.index].name_modul,
        result.destination.index + 1
      );
      for (let i = result.destination.index; i < result.source.index; i++) {
        console.log("Posisi berganti", i + 1);
        props.update(
          items[i].modul_id,
          props.course,
          items[i].name_modul,
          i + 2
        );
      }
      const [reorderedItem] = items.splice(result.source.index, 1);

      items.splice(result.destination.index, 0, reorderedItem);
      setModul(items);
      props.setDataChange(true);
    }
  };

  return (
    <>
      {moduls === null || moduls.length === 0 ? (
        <div
          className="container py-3 px-3 mt-4 text-center"
          style={{
            width: "100%",
            backgroundColor: "#DEE2E6",
            "border-radius": "15px",
            border: "none",
          }}>
          Belum ada Modul nih :(
        </div>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="modul">
            {(provided) => (
              <div
                className="container py-3 px-3 mt-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "100%",
                  backgroundColor: "#DEE2E6",
                  "border-radius": "15px",
                  border: "none",
                }}>
                {sortedData.length === 0 && (
                  <div className="text-center">Belum ada Modul nih :(</div>
                )}
                {moduls?.map(({ modul_id, name_modul, order }, index) => (
                  <Draggable
                    key={modul_id}
                    draggableId={modul_id}
                    index={index}>
                    {(provided) => (
                      <li
                        className="list-unstyled"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <ModulEach
                          setDataChange={props.setDataChange}
                          key={modul_id}
                          order={order}
                          course={props.course}
                          judul={name_modul}
                          modul_id={modul_id}
                          delete={props.delete}
                          update={props.update}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
}
