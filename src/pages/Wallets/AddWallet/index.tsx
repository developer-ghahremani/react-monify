import * as yup from "yup";

import { IButton, IInput, ILoading, ISelect } from "components/general";
import {
  useGetWalletQuery,
  usePatchWalletMutation,
  usePostWalletMutation,
} from "store/service/wallet";
import { useLocation, useNavigate } from "react-router-dom";

import { Formik } from "formik";
import { MainLayout } from "components/layout";
import { pageNames } from "constant";
import { parse } from "query-string";
import { useGetFinancialUnitsQuery } from "store/service/financialUnits";
import { useI18Next } from "i18n";

const AddWallet = () => {
  const { t } = useI18Next();
  const { search } = useLocation();
  const { walletId } = parse(search);
  const { data: selectedWallet, isFetching } = useGetWalletQuery(
    { walletId: typeof walletId === "string" ? walletId : "" },
    { skip: !walletId }
  );

  const { data = [] } = useGetFinancialUnitsQuery();
  const [createWallet] = usePostWalletMutation();
  const [updateWallet] = usePatchWalletMutation();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup.string().required(),
    financialUnitId: yup.string().required(),
  });

  const handleFinish = async (params: {
    name: string;
    financialUnitId: string;
  }) => {
    const handleAdd = async () => {
      try {
        await createWallet(params);
        navigate(pageNames.wallets.list, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };

    const handleEdit = async (wId: string) => {
      try {
        await updateWallet({ walletId: wId, ...params });
        navigate(pageNames.wallets.list, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };

    if (!!walletId && typeof walletId === "string") return handleEdit(walletId);
    handleAdd();
  };

  return (
    <MainLayout title={t("general.addWallet")}>
      {!!walletId && !selectedWallet && isFetching ? (
        <ILoading />
      ) : (
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: walletId ? selectedWallet?.name || "" : "",
            financialUnitId: walletId
              ? selectedWallet?.financialUnitId?._id || ""
              : "",
          }}
          onSubmit={handleFinish}
          enableReinitialize>
          {({ handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="md:grid-cols-2 grid grid-cols-1 gap-4 mt-4">
                <IInput
                  label={t("general.name")}
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                />
                <ISelect
                  label={t("general.financialUnit")}
                  value={values.financialUnitId}
                  error={errors.financialUnitId}
                  name="financialUnitId"
                  onChange={handleChange}
                  options={[{ _id: "", name: "" }, ...data]?.map((item) => ({
                    value: item._id,
                    children: item.name,
                  }))}
                />
              </div>
              <IButton
                type="submit"
                varient="primary"
                className="!w-auto mt-4 px-8 text-white">
                {t("general.submit")}
              </IButton>
            </form>
          )}
        </Formik>
      )}
    </MainLayout>
  );
};

export default AddWallet;
