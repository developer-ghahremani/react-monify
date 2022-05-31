import * as yup from "yup";

import { IButton, IInput, ISelect } from "components/general";
import { usePostWalletMutation } from "store/service/wallet";

import { Formik } from "formik";
import { MainLayout } from "components/layout";
import { pageNames } from "constant";
import { useI18Next } from "i18n";
import { useNavigate } from "react-router-dom";
import { useGetFinancialUnitsQuery } from "store/service/financialUnits";

const AddWallet = () => {
  const { t } = useI18Next();
  const { data = [] } = useGetFinancialUnitsQuery();
  const [createWallet] = usePostWalletMutation();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup.string().required(),
    financialUnitId: yup.string().required(),
  });

  const handleFinish = async (params: {
    name: string;
    financialUnitId: string;
  }) => {
    try {
      await createWallet(params);
      navigate(pageNames.wallets.list, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout title={t("general.addWallet")}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", financialUnitId: "" }}
        onSubmit={handleFinish}>
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
    </MainLayout>
  );
};

export default AddWallet;
