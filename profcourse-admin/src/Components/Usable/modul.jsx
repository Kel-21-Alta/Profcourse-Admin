/** @format */

import ModulEach from "./modulEach";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useMemo, useState } from "react";

export default function ModulBox(props) {
  const sortedData = useMemo(() => {
    //   descending
    return props.data.sort((a, b) => a.order > b.order);
  }, [props.data]);
  const [modul, setModul] = useState(sortedData);
  return (
    <>
      <DragDropContext>
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
              {modul.map(({ modul_id, name_modul, order }, index) => (
                <Draggable key={modul_id} draggableId={modul_id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <ModulEach order={order} judul={name_modul} />
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
