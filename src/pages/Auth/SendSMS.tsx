import { Formik } from "formik";
import IButton from "components/general/IButton";
import { IInput } from "components/general";
import { authChangeStep } from "store/auth";
import { showMessage } from "utils/message";
import { useAppDispatch } from "store";
import { useI18Next } from "i18n";
import { useSendSMSMutation } from "store/service";

const SendSMS = () => {
  const { t } = useI18Next();
  const [sendSMS] = useSendSMSMutation();
  const dispatch = useAppDispatch();

  const handleFinish = async ({ mobile }: { mobile: string }) => {
    try {
      await sendSMS({ mobile }).unwrap();
      showMessage(t("messages.codeSent"), { type: "success" });
      dispatch(authChangeStep({ step: "sendCode", mobile }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="animate__animated animate__fadeInUp animate__delay-0.4s p-4 mt-4 border border-white rounded-lg">
      <p className=" font-semibold text-white">{t("general.loginSlug")}</p>
      <Formik initialValues={{ mobile: "09126894100" }} onSubmit={handleFinish}>
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
            <IButton
              type="submit"
              className="mt-4 font-bold tracking-widest text-white">
              {t("general.submit")}
            </IButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SendSMS;
