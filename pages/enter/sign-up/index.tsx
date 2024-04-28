import Header from "@components/header";
import LinkButton from "@components/link-button";
import Terms from "@components/terms";
import Link from "next/link";

export default () => (
  <section>
    <Header back={true} />
    <div className="pt-24">
      <div>
        <h2 className="pb-6 text-2xl font-extrabold tracking-widest">
          Join Today.
        </h2>
        {/* <LinkButton href="/github" type="basic">
          Sign up with GitHub
        </LinkButton>
        <span className="py-2 block text-center text-sm text-gray-600">or</span> */}
        <LinkButton href="/create-account" type="point">
          Create account
        </LinkButton>
        <Terms />
      </div>
      <div className="pt-12">
        <p className="text-gray-600 text-sm">
          Have an account already?{" "}
          <Link href="/enter/log-in">
            <span className="text-blue-600">Log in</span>
          </Link>
        </p>
      </div>
    </div>
  </section>
);
