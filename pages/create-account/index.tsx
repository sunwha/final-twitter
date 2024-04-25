import BottonBox from "@components/bottonbox";
import Button from "@components/button";
import Header from "@components/header";
import Input from "@components/input";
import useMutation from "lib/client/useMutation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  createName: string;
  createEmail: string;
  createPassword: string;
}
export default () => {
  const [create, { loading, data, error }] = useMutation("/api/user/create");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onValid = (data: IFormInput) => {
    if (loading) return;
    create(data);
  };
  useEffect(() => {
    if (data?.ok && !loading) {
      router.push("/enter/log-in");
    } else if (data?.message && !loading) {
      setErrorMessage(data?.message || "Something went wrong");
    }
  }, [data, router]);
  return (
    <section>
      <Header back={true} />
      <section className="pt-4">
        <h2 className="pb-7 text-2xl font-bold">Create your account</h2>
        <form onSubmit={handleSubmit(onValid)}>
          <ul>
            <li>
              <Input
                type="text"
                name="createName"
                label="Name"
                register={register}
                errors={errors}
                isDirty={dirtyFields.createName}
                required
              />
            </li>

            <li className="pt-6">
              <Input
                type="email"
                label="Email"
                name="createEmail"
                register={register}
                errors={errors}
                isDirty={dirtyFields.createEmail}
                required
              />
            </li>
            <li className="pt-6">
              <Input
                type="password"
                label="Password"
                name="createPassword"
                register={register}
                errors={errors}
                isDirty={dirtyFields.createPassword}
                required
              />
            </li>
          </ul>
          <BottonBox>
            <Button
              styleType="point"
              size="large"
              disabled={!isDirty || !isValid}
            >
              Create Account
            </Button>
          </BottonBox>
          {errorMessage && (
            <p className="pt-4 text-red-500 text-center">{errorMessage}</p>
          )}
        </form>
      </section>
    </section>
  );
};
