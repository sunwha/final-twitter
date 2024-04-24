import BottonBox from "@components/bottonbox";
import Button from "@components/button";
import Header from "@components/header";
import Input from "@components/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFindPassword {
  confirmEmail: string;
  confirmNumber: number;
}
export default () => {
  const [sendEmail, setSendEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFindPassword>({ mode: "onChange" });
  const onValid = (data: IFindPassword) => {
    console.log(data);
  };
  return (
    <section>
      <Header back={true} />
      <section className="pt-4">
        <h2 className="pb-7 text-2xl font-bold">Find your password</h2>
        <form onSubmit={handleSubmit(onValid)}>
          <ul>
            <li className="pt-6">
              <Input
                type="email"
                label="Email"
                name="confirmEmail"
                register={register}
                errors={errors}
                isDirty={dirtyFields.confirmEmail}
                required
              />
            </li>
            {sendEmail && (
              <li className="pt-6">
                <Input
                  type="number"
                  label="Confirm number"
                  name="confirmNumber"
                  register={register}
                  errors={errors}
                  isDirty={dirtyFields.confirmNumber}
                  required
                />
              </li>
            )}
          </ul>
          <BottonBox>
            {!sendEmail ? (
              <Button styleType="point" size="large" disabled={true}>
                Send Email
              </Button>
            ) : (
              <Button styleType="point" size="large" disabled={true}>
                Submit
              </Button>
            )}
          </BottonBox>
        </form>
      </section>
    </section>
  );
};
