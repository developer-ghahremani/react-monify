import { CategoryInrterface } from "models/category.model";
import { DraggableContainer } from "components/general";
import { DropResult } from "react-beautiful-dnd";
import IDragablaItem from "components/general/IDraggable/IDraggableItem";
import React from "react";
import { usePatchCategoryMutation } from "store/service/category";

type Props = { categories: CategoryInrterface[] };

const SubCategories = (props: Props) => {
  const [updateCategory] = usePatchCategoryMutation();
  const onEndDrag = async (result: DropResult) => {
    if (!result.destination) return;
    try {
      await updateCategory({
        categoryId: result.draggableId,
        order: result.destination.index,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DraggableContainer onEndDrag={onEndDrag}>
      {[...props.categories]
        .sort((a, b) => a.order - b.order)
        .map((item, index, array) => (
          <IDragablaItem id={item._id} index={index}>
            <div className="flex w-full">
              <div className="w-14 relative h-auto">
                <div className="absolute w-7 h-[2px] bg-lightGray top-[50%] right-[30%]"></div>
                <div className="absolute w-[2px] h-[50%] bg-lightGray  bottom-[50%] right-[30%]"></div>
                {index !== array.length - 1 && (
                  <div className="absolute w-[2px] h-[50%] bg-lightGray top-[50%] right-[30%]"></div>
                )}
              </div>
              <div
                className={`flex-1 ${
                  item.type === 1
                    ? "border-green-900 text-green-900 "
                    : "border-red-900 text-red-900 "
                } py-2 px-5 border-b`}>
                <p>{item.name}</p>
              </div>
            </div>
          </IDragablaItem>
        ))}
    </DraggableContainer>
  );
};

export default SubCategories;
