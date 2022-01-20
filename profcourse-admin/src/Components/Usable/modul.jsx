/** @format */

import ModulEach from "./modulEach";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function ModulBox(props) {
  console.log("isi data", props?.data);
  const finalSpaceCharacters = [
    {
      id: "gary",
      name: "Gary Goodspeed",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png",
    },
    {
      id: "gary2",
      name: "Gary Goodspeed",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png",
    },
    {
      id: "gary3",
      name: "Gary Goodspeed",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png",
    },
  ];
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
              {props.data?.map(({ modul_id, name_modul, order }, index) => (
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
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
