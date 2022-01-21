/** @format */

import ModulEach from "./modulEach";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useMemo, useState } from "react";

export default function ModulBox(props) {
  const sortedData = useMemo(() => {
    //   descending
    return props.data.sort((a, b) => a.order > b.order);
  }, [props.data]);
  const [moduls, setModul] = useState(sortedData);
  const handleOnDragEnd = (result) => {
    const items = Array.from(moduls);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setModul(items);
  };
  useEffect(() => {
    console.log(moduls);
  });

  return (
    <>
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
              {sortedData.map(({ modul_id, name_modul, order }, index) => (
                <Draggable key={modul_id} draggableId={modul_id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <ModulEach
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
    </>
  );
}
