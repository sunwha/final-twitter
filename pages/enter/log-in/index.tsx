import BottonBox from "@components/bottonbox";
import Header from "@components/header";
import Input from "@components/input";
import LinkButton from "@components/link-button";
import Link from "next/link";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
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
        <Input type="text" name="email" />
        <div className="pt-6">
          <LinkButton href="/" type="point">
            Next
          </LinkButton>
        </div>
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
    <section>
      <Header back={true} />
      <section className="pt-4">
        <h2 className="pb-7 text-2xl font-bold">Enter your password</h2>
        <ul>
          <li className="pt-6">
            <Input type="text" name="email" value={email} disabled />
          </li>
          <li className="pt-6">
            <Input type="password" name="password" />
            <p className="text-xs pt-1">
              <a href="" className="text-blue-600">
                Forgot password?
              </a>
            </p>
          </li>
        </ul>
        <BottonBox>
          <LinkButton href="/" type="point" size="large" disabled={true}>
            Log in
          </LinkButton>
          <p className="text-gray-600 text-sm pt-5">
            Don't have an account?{" "}
            <Link href="/enter/sign-up">
              <span className="text-blue-600">Sign up</span>
            </Link>
          </p>
        </BottonBox>
      </section>
    </section>
  );
}
