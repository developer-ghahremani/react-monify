import { useAppDispatch, useAppSelector } from "store";

import IModal from "components/general/IModal";
import { closeAddSource } from "store/modal";
import { useI18Next } from "i18n";

const AddSource = () => {
  const { sourceModal } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const handleClose = () => {
    dispatch(closeAddSource());
  };

  return (
    <IModal isOpen={sourceModal.isOpen} onRequestClose={handleClose}>
      <p className="text-2xl font-bold">{t("general.addSource")}</p>
    </IModal>
  );
};

export default AddSource;
