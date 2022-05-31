import {
  DeleteIcon,
  DownIcon,
  DragIcon,
  MoreIcon,
  UpIcon,
} from "components/icons";
import { memo, useState } from "react";

import { CategoryInrterface } from "models/category.model";
import IDragablaItem from "components/general/IDraggable/IDraggableItem";
import SubCategories from "./SubCategories";

type Props = {
  category: CategoryInrterface;
  index: number;
};

const CategoryItem = (props: Props) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const toggleExpand = () => {
    setIsExpand((s) => !s);
  };

  const handleMore = () => {
    console.log("====================================");
    console.log("handleMore");
    console.log("====================================");
  };

  return (
    <>
      <IDragablaItem id={props.category._id} index={props.index}>
        <div
          className={`py-4 px-5 border ${
            props.category.type === 1
              ? "border-green-900 text-green-900 "
              : "border-red-900 text-red-900 "
          } w-full my-2 rounded-lg animate__animated animate__fadeInUp flex justify-between items-center`}
          style={{ animationDelay: `${props.index / 3}s` }}>
          <div className="flex items-center">
            <DragIcon size={22} />

            <p>{props.category.name}</p>
          </div>
          <div className="flex items-center">
            {props.category.children.length > 0 ? (
              isExpand ? (
                <UpIcon className="cursor-pointer" onClick={toggleExpand} />
              ) : (
                <DownIcon className="cursor-pointer" onClick={toggleExpand} />
              )
            ) : null}
            <DeleteIcon className="mx-2" />
            <MoreIcon
              className="cursor-pointer"
              size={22}
              onClick={handleMore}
            />
          </div>
        </div>
      </IDragablaItem>
      {isExpand && <SubCategories categories={props.category.children} />}
    </>
  );
};

export default memo(CategoryItem);
