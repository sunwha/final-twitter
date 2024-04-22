import BottonBox from "@components/bottonbox";
import Header from "@components/header";
import Input from "@components/input";
import LinkButton from "@components/link-button";

export default () => {
  return (
    <section>
      <Header back={true} />
      <section className="pt-4">
        <h2 className="pb-7 text-2xl font-bold">Create your account</h2>
        <form action="">
          <ul>
            <li>
              <Input type="text" name="name" />
            </li>

            <li className="pt-6">
              <Input type="text" name="email" />
            </li>
            <li className="pt-6">
              <Input type="password" name="password" />
            </li>
          </ul>
          <BottonBox>
            <LinkButton href="/" type="point" size="large" disabled={true}>
              Next
            </LinkButton>
          </BottonBox>
        </form>
      </section>
    </section>
  );
};
