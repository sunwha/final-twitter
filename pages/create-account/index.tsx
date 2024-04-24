import BottonBox from "@components/bottonbox";
import Button from "@components/button";
import Header from "@components/header";
import Input from "@components/input";
import { useForm } from "react-hook-form";

interface IFormInput {
  createName: string;
  createEmail: string;
  createPassword: string;
}
export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onValid = (data: IFormInput) => {
    console.log(data);
  };
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
            <Button styleType="point" size="large" disabled={true}>
              Next
            </Button>
          </BottonBox>
        </form>
      </section>
    </section>
  );
};
