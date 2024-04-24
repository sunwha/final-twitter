import Header from "@components/header";
import Input from "@components/input";
import LinkButton from "@components/link-button";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Enter from "..";
import EnterPassword from "./EnterPassword";
import Button from "@components/button";

interface IEmailForm {
  userEmail: string;
}

export default function LogIn() {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<IEmailForm>({ mode: "onChange" });
  const onEmailValid = (data: IEmailForm) => {
    setEmail(data.userEmail);
  };
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
