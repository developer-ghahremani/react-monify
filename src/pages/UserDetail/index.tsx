import * as yup from "yup";

import { useAppDispatch, useAppSelector } from "store";

import { Formik } from "formik";
import IButton from "components/general/IButton";
import { IInput } from "components/general";
import { MainLayout } from "components/layout";
import { setUser } from "store/user";
import { showMessage } from "utils/message";
import { useEditUserMutation } from "store/service";
import { useI18Next } from "i18n";

const UserDetail = () => {
  const { t } = useI18Next();
  const { firstName, lastName, token } = useAppSelector((s) => s.user);
  const [editUser] = useEditUserMutation();
  const dispatch = useAppDispatch();
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.firstName") })),
    lastName: yup
      .string()
      .required(t("messages.required", { fieldName: t("general.lastName") })),
  });

  const handleFinish = async (params: {
    firstName: string;
    lastName: string;
  }) => {
    try {
      const data = await editUser(params).unwrap();
      showMessage(t("general.successfull"), { type: "success" });
      dispatch(setUser({ token, ...data }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="p-4 rounded-md shadow">
        <p>{t("general.userDetail")}</p>
        <Formik
          initialValues={{
            firstName: firstName || "",
            lastName: lastName || "",
          }}
          onSubmit={handleFinish}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <IInput
                  inputClassName="w-ful! border !border-black"
                  label={t("general.firstName")}
                  onChange={handleChange}
                  value={values.firstName}
                  error={errors.firstName}
                  className="mt-4"
                  name="firstName"
                />
                <IInput
                  inputClassName="w-ful! border !border-black"
                  label={t("general.lastName")}
                  onChange={handleChange}
                  value={values.lastName}
                  error={errors.lastName}
                  className="mt-4"
                  name="lastName"
                />
              </div>
              <div className="flex justify-center">
                <IButton className="!w-[40%] mt-4" type="submit">
                  {t("general.submit")}
                </IButton>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

export default UserDetail;
