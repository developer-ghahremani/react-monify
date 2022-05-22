import React from "react";
import SendCode from "./SendCode";
import SendSMS from "./SendSMS";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

const Auth = () => {
  const { step } = useAppSelector((s) => s.auth);
  const { t } = useI18Next();
  return (
    <div className="bg-primary font-vazir flex items-center justify-center w-full min-h-screen">
      <div className=" md:w-[30rem] w-[90%]">
        <p className="animate__animated animate__fadeInUp text-3xl font-bold text-center text-white">
          {t("general.monify")}
        </p>
        {step === "sendSMS" ? <SendSMS /> : <SendCode />}
      </div>
    </div>
  );
};

export default Auth;
