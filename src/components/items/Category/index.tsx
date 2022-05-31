import { CategoryInrterface } from "models/category.model";
import { DragIcon } from "components/icons";
import IDragablaItem from "components/general/IDraggable/IDraggableItem";

type Props = {
  category: CategoryInrterface;
  index: number;
};

const CategoryItem = (props: Props) => {
  return (
    <IDragablaItem id={props.category._id} index={props.index}>
      <div
        className={`py-4 px-5 border ${
          props.category.type === 1 ? "border-green-900" : "border-red-900"
        } w-full rounded-lg my-2 animate__animated animate__fadeInUp`}
        style={{ animationDelay: `${props.index / 3}s` }}>
        <div className="flex items-center">
          <DragIcon
            className={`${
              props.category.type === 1 ? "text-green-900" : "text-red-900"
            }`}
            size={22}
          />
          <p>{props.category.order}</p>

          <p
            className={`text-white ${
              props.category.type === 1 ? "text-green-900" : "text-red-900"
            }`}>
            {props.category.name}
          </p>
        </div>
      </div>
    </IDragablaItem>
  );
};

export default CategoryItem;
