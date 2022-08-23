// import {NextResponse,NextRequest}
import { signin as form } from "./fomrs";
// Helpers
import validateInput from "../../helpers/validateInput";
import { motion, AnimatePresence } from "framer-motion";
// Icons
import { Fragment, useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  hideSignin,
  showSignup,
  showRestorePassword,
} from "../../redux/features/modalSlicer";
import { signin } from "../../redux/features/authSlicer";
import { addNotification } from "../../redux/features/notificationSlicer";
import { useSigninUserMutation } from "../../features/auth/authApiSlice";
// components
import ButtonPrimary from "../buttons/ButtonPrimary";
import Lottie from "../Lottie";
import { Transition } from "@headlessui/react";

const SignupForm = () => {
  // Global State
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.signin);

  const [signinUser, { data, isLoading, isError, error }] =
    useSigninUserMutation();

  // Local State
  const [values, setValues] = useState(form.fields);
  const [isSuccess, setIsSuccess] = useState(false);
  console.log("values", values);

  // Handlers (event listeners)
  const inputHandler = (e) => {
    const inputIdx = values.findIndex((input) => input.name == e.target.name);
    const isCheckbox = e.target.type === "checkbox";
    const _values = [...values];
    _values[inputIdx].value = isCheckbox ? e.target.checked : e.target.value;
    setValues(_values);
  };

  // Handle Validation
  const validationHandler = (e) => {
    const inputIdx = values.findIndex((input) => input.name == e.target.name);
    validateInput(e, inputIdx, values, setValues);
  };

  // Sign up
  const signinHandler = async (e) => {
    e.preventDefault();

    // Global form  validation
    // required fields validation
    const requiredAny = values.find((field) => field.required == true);
    // is any required fields are empty
    const isEmptyRequiredFields = values.find((field) => field.value == "");
    if (requiredAny && isEmptyRequiredFields) {
      const _values = [...values];
      _values.map((field, i) => {
        if (!_values[i].value && _values[i].required && !_values[i].error)
          _values[i].error = `${field.placeholder} is required!`;
      });
      setValues(_values);
      dispatch(
        addNotification({
          isSuccess: false,
          message: "Signing in Failed!",
          description:
            "All marked Fields are required! Please fill in required empty fields and try again",
        })
      );
      return;
    }

    // is there any error message
    const isErrorMessages = values.find((field) => field.error != "");
    if (isErrorMessages) {
      dispatch(
        addNotification({
          isSuccess: false,
          message: "Signing in Failed!",
          description: (
            <>
              <p>Please correct your entries!</p>
              <ol className="list-disc">
                {values.map(
                  (field, i) => field.error != "" && <li>{field.error}</li>
                )}
              </ol>
            </>
          ),
        })
      );
      return;
    }

    const dataObject = {};
    values.map((field, i) => {
      dataObject = { ...dataObject, [field.name]: field.value };
    });

    await signinUser(dataObject);
    console.log("Form Submitted successfully");
  };
  // manage Global state and notifications
  useEffect(() => {
    if (data?.accessToken) {
      console.log("data", data);
      localStorage.setItem(
        "login",
        JSON.stringify({ userLogin: true, token: data.accessToken })
      );
      dispatch(
        addNotification({
          isSuccess: true,
          status: data.status,
          message: "Let's Do Some Good",
          description: data.email,
        })
      );

      setIsSuccess(true);
      setValues(form.fields);
      dispatch(signin());
    } else if (isError) {
      console.log("error", error);
      dispatch(
        addNotification({
          isSuccess: false,
          status: error.status,
          message: "Sign in Failed!",
          description: error.data?.error || error.error,
        })
      );
    }
  }, [data, isError]);

  return (
    <AnimatePresence exitBeforeEnter>
      {!isSuccess || !form.confirmation?.isConfirmation ? (
        <motion.form
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          key="stuff"
          method="post"
          className="flex flex-col space-y-6 last:-mt-10">
          {form?.title && (
            <h1 className="block text-2xl sm:text-3xl text-left  text-black sm:text-center font-medium">
              {form.title}
            </h1>
          )}
          {form?.subtitle && (
            <h3 className="block text-l sm:text-l text-left  text-black sm:text-center font-medium">
              {form.subtitle}
            </h3>
          )}
          <div className="flex flex-row gap-4 justify-between">HEY 1</div>
          {form.fields.map((field, i) => (
            <field.component
              {...field}
              key={field.name}
              inputHandler={inputHandler}
              validationHandler={validationHandler}
              value={values[i].value}
            />
          ))}
          {/* Sign Up Button */}
          <ButtonPrimary
            idle={form.button.idle}
            action={form.button.action}
            success={form.button.success}
            error={form.button.error}
            actionHandler={signinHandler}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />

          <a
            href="#"
            onClick={() => dispatch(showRestorePassword())}
            className="block text-center text-xs text-army-500 font-medium">
            TROUBLE SIGNING UP?
          </a>

          <div className="flex flex-row gap-[0.81rem] justify-start items-center">
            <p className="block text-center text-xs text-black  font-medium">
              Don&apos;t you have an account?
            </p>
            <div className="flex flex-row gap-2.5 justify-start items-center">
              <button
                className="block text-center text-[0.81rem] text-army-500  font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(hideSignin());
                  setTimeout(() => {
                    dispatch(showSignup());
                  }, 700);
                }}>
                <p>Sign up now →</p>
              </button>
              <div></div>
            </div>
          </div>
        </motion.form>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 3 } }}
          transition={{ ease: "easeOut" }}
          key="message"
          className={form?.confirmation?.formHeight || "h-[335px]"}>
          <Lottie
            className="w-96 h-96 mx-auto -mt-10"
            loop={false}
            path={form?.confirmation?.lottiePath || `104369-check-motion.json`}
          />
          <p className="text-lg text-center -mt-24">
            {form?.confirmation?.message}
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default SignupForm;
