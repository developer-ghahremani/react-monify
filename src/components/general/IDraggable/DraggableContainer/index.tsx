import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

import React from "react";

type Props = {
  children: React.ReactNode;
  onEndDrag: (result: DropResult) => void;
};

const IDraggableContainer = (props: Props) => {
  return (
    <DragDropContext onDragEnd={props.onEndDrag}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/* <QuoteList quotes={state.quotes} /> */}
            {props.children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default IDraggableContainer;
