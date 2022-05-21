import { Formik } from "formik";
import IButton from "components/general/IButton";
import { IInput } from "components/general";
import React from "react";
import { useI18Next } from "i18n";

const Home = () => {
  const { t } = useI18Next();

  const handleFinish = (params: { mobile: string }) => {
    console.log(params);
  };

  return (
    <div className="bg-primary font-vazir flex items-center justify-center w-full min-h-screen">
      <div className=" md:w-[30rem] w-[90%]">
        <p className="animate__animated animate__fadeInUp text-3xl font-bold text-center text-white">
          {t("general.monify")}
        </p>

        <div className="animate__animated animate__fadeInUp animate__delay-0.4s p-4 mt-4 border border-white rounded-lg">
          <p className=" font-semibold text-white">{t("general.loginSlug")}</p>
          <Formik initialValues={{ mobile: "" }} onSubmit={handleFinish}>
            {({ handleSubmit, handleChange, handleBlur, values }) => (
              <form autoComplete="off" onSubmit={handleSubmit}>
                <IInput
                  name="mobile"
                  className="text-bold mt-4 text-xl tracking-widest"
                  placeholder={t("general.mobile")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  maxLength={15}
                />
                <IButton type="submit" className="mt-4">
                  {t("general.submit")}
                </IButton>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Home;
