import BottonBox from "@components/bottonbox";
import Button from "@components/button";
import Header from "@components/header";
import Link from "next/link";
import Input from "@components/input";
import { useForm } from "react-hook-form";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

export default function EnterPassword({ email }: { email: string }) {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<ILoginForm>({ mode: "onChange" });
  const onValid = (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <section>
      <Header back={true} />
      <section className="pt-4">
        <h2 className="pb-7 text-2xl font-bold">Enter your password</h2>
        <form onSubmit={handleSubmit(onValid)}>
          <ul>
            <li className="pt-6">
              <Input
                type="text"
                name="userEmail"
                value={email}
                label="Email"
                register={register}
                errors={errors}
                readOnly
              />
            </li>
            <li className="pt-6">
              <Input
                type="password"
                name="userPassword"
                label="Password"
                register={register}
                errors={errors}
                isDirty={dirtyFields.userPassword}
                required
                onChange={() => trigger()}
              />
              <p className="text-xs pt-1">
                <a href="" className="text-blue-600">
                  Forgot password?
                </a>
              </p>
            </li>
          </ul>
          <BottonBox>
            <Button styleType="point" size="large" disabled={!isValid}>
              Log in
            </Button>
            <p className="text-gray-600 text-sm pt-5">
              Don't have an account?{" "}
              <Link href="/enter/sign-up">
                <span className="text-blue-600">Sign up</span>
              </Link>
            </p>
          </BottonBox>
        </form>
      </section>
    </section>
  );
}
