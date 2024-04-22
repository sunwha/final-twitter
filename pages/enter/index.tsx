import LinkButton from "@components/link-button";

export default () => (
  <section>
    <header>
      <h1
        className="text-5xl font-extrabold"
        style={{ textShadow: "4px 4px 0 rgba(37, 99, 235, 1)" }}
      >
        T
      </h1>
      <p className="pt-10 text-4xl font-extrabold tracking-widest">
        Happening
        <br /> now
      </p>
    </header>
    <div className="pt-10">
      <div>
        <h2 className="pb-4 text-xl font-extrabold tracking-widest">
          Join Today.
        </h2>
        <LinkButton href="/github" type="basic">
          Sign up with GitHub
        </LinkButton>
        <span className="py-2 block text-center text-sm text-gray-600">or</span>
        <LinkButton href="/create-account" type="point">
          Create account
        </LinkButton>
        <p className="text-xs pt-1">
          By signing up, you agree to the{" "}
          <a href="" className="text-blue-600">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-600">
            Privacy Policy
          </a>
          , including{" "}
          <a href="" className="text-blue-600">
            Cookie Use
          </a>
          .
        </p>
      </div>
      <div className="pt-10">
        <h2 className="pb-3 font-bold">Already have an account?</h2>
        <LinkButton href="/enter/log-in" type="basic">
          Sign in
        </LinkButton>
      </div>
    </div>
  </section>
);
