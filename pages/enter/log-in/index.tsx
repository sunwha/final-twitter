import Header from "@components/header";
import Input from "@components/input";
import LinkButton from "@components/link-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import EnterPassword from "./EnterPassword";
import Button from "@components/button";
import useMutation from "lib/client/useMutation";

interface IEmailForm {
  userEmail: string;
}

export default function LogIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [check, { loading, data, error }] = useMutation("/api/user/check");
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<IEmailForm>({ mode: "onChange" });
  const onEmailValid = (data: IEmailForm) => {
    check(data);
  };
  useEffect(() => {
    if (data?.ok && !loading) {
      setEmail(data.userEmail);
    } else if (data?.message && !loading) {
      setErrorMessage(data?.message || "Something went wrong");
    }
  }, [data, email]);
  return !email ? (
    <section>
      <Header back={true} />
      <section className="pt-24">
        <h2 className="pb-6 text-2xl font-extrabold tracking-widest">
          Sign in to T
        </h2>
        <LinkButton href="/github" type="basic">
          Sign in with GitHub
        </LinkButton>
        <span className="py-2 block text-center text-sm text-gray-600">or</span>
        <form onSubmit={handleSubmit(onEmailValid)}>
          <Input
            type="email"
            name="userEmail"
            label="Email"
            register={register}
            errors={errors}
            isDirty={dirtyFields.userEmail}
            required
          />
          {errorMessage && (
            <p className="pt-4 text-red-500 text-center">{errorMessage}</p>
          )}
          <div className="pt-6">
            <Button styleType="point" disabled={!isValid}>
              Next
            </Button>
          </div>
        </form>
        <div className="pt-6">
          <LinkButton href="/" type="basic">
            Forget password?
          </LinkButton>
        </div>
        <div className="pt-12">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link href="/enter/sign-up">
              <span className="text-blue-600">Sign up</span>
            </Link>
          </p>
        </div>
      </section>
    </section>
  ) : (
    <EnterPassword email={email} />
  );
}
