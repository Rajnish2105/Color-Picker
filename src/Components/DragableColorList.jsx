import React from "react";
import { DndContext } from "@dnd-kit/core";
import {
  verticalListSortingStrategy,
  SortableContext,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"; // For smoother transforms
import DragableColorBox from "./DragableColorBox";

function DragableColorList({ colors, handleDelete, setColors }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over) {
      const oldIndex = colors.findIndex((item) => item.name === active.id);
      const newIndex = colors.findIndex((item) => item.name === over.id);

      if (oldIndex !== newIndex) {
        // Move the items in the colors array
        setColors((items) => arrayMove(items, oldIndex, newIndex));
      }
    }
  };

  function DraggableItem({ color, handleDelete }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      isDragging,
      transform,
      transition,
    } = useSortable({
      id: color.name, // Use the color's name as the id
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition: transition || "transform 250ms ease",
      borderRadius: "4px",
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
        <DragableColorBox
          bgcolor={color.color}
          name={color.name}
          handleDelete={(e) => {
            e.stopPropagation(); // Stop the click from propagating to the drag handler
            handleDelete(color.name);
          }}
        />
      </div>
    );
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext
        items={colors.map((col) => col.name)}
        strategy={verticalListSortingStrategy}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            height: "auto",
            justifyContent: "center",
          }}
        >
          {colors.map((col) => (
            <DraggableItem
              key={col.name}
              color={col}
              handleDelete={handleDelete} // Pass handleDelete to DraggableItem
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default DragableColorList;
