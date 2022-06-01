import { DraggableContainer, ILoading } from "components/general";
import {
  useGetCategoriesQuery,
  usePatchCategoryMutation,
} from "store/service/category";

import { CategoryItem } from "components/items";
import { DropResult } from "react-beautiful-dnd";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

const Categories = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { t } = useI18Next();
  const [updateCategory] = usePatchCategoryMutation();
  const { data, isFetching } = useGetCategoriesQuery(
    {
      walletId: selectedWallet._id || "",
    },
    { skip: !selectedWallet._id }
  );

  const handleEndDrag = async (result: DropResult) => {
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

  if (isFetching || !data) return <ILoading />;
  return (
    <div className="md:grid-cols-2 grid grid-cols-1 gap-4 mt-4">
      <div className="flex flex-col">
        <p className="text-center">{t("general.cost")}</p>
        <div className="h-[1px] bg-red-800"></div>
        <DraggableContainer onEndDrag={handleEndDrag}>
          {[...data]
            .filter((item) => item.type === -1)
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <CategoryItem index={index} category={item} key={item._id} />
            ))}
        </DraggableContainer>
      </div>
      <div className="flex flex-col">
        <p className="text-center">{t("general.income")}</p>
        <div className="h-[1px] bg-green-800"></div>
        <DraggableContainer onEndDrag={handleEndDrag}>
          {[...data]
            .filter((item) => item.type === 1)
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <CategoryItem index={index} category={item} key={item._id} />
            ))}
        </DraggableContainer>
      </div>
    </div>
  );
};

export default Categories;
