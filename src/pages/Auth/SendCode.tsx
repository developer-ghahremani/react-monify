import { useAppDispatch, useAppSelector } from "store";

import { BackIcon } from "components/icons";
import { Formik } from "formik";
import IButton from "components/general/IButton";
import { IInput } from "components/general";
import React from "react";
import { authChangeStep } from "store/auth";
import { pageNames } from "constant";
import { setUser } from "store/user";
import { showMessage } from "utils/message";
import { useI18Next } from "i18n";
import { useLoginMutation } from "store/service";
import { useNavigate } from "react-router-dom";

const SendCode = () => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const { mobile = "" } = useAppSelector((s) => s.auth);
  const [sendLogin] = useLoginMutation();
  const navigate = useNavigate();

  const handleBack = () => {
    dispatch(authChangeStep({ step: "sendSMS" }));
  };

  const handleFinish = async (params: { code: string }) => {
    try {
      const data = await sendLogin({ password: params.code, mobile }).unwrap();
      showMessage(t("messages.welcome"), { type: "success" });
      dispatch(setUser(data));
      navigate(pageNames.home, { replace: true });
    } catch (error) {
      console.log(error, "ASLE GHAZIE");
    }
  };

  return (
    <>
      <BackIcon
        className="hover:scale-110 hover:shadow-2xl text-lg text-white cursor-pointer"
        onClick={handleBack}
      />
      <div className="animate__animated animate__fadeInUp animate__delay-0.4s p-4 mt-4 border border-white rounded-lg">
        <p className=" font-semibold text-white">{t("general.enterCode")}</p>
        <Formik initialValues={{ code: "" }} onSubmit={handleFinish}>
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <IInput
                name="code"
                inputClassName="text-bold mt-4 text-xl tracking-widest text-white"
                placeholder={t("general.code")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
                maxLength={6}
              />
              <IButton
                type="submit"
                className="mt-4 font-bold tracking-widest text-white">
                {t("general.submit")}
              </IButton>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SendCode;
