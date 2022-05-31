import { Draggable, DraggableProps } from "react-beautiful-dnd";

import React from "react";

interface Props {
  id: string;
  index: number;
  children: React.ReactNode;
}

const IDragablaItem = (props: Props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {props.children}
        </div>
      )}
    </Draggable>
  );
};

export default IDragablaItem;
