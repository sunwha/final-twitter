export default function inputRules(name: string, required?: boolean) {
  switch (name) {
    case "createName":
      return {
        required: required && "This name is required.",
        minLength: {
          value: 3,
          message: "Name must be at least 3 characters.",
        },
      };
    case "createEmail":
      return {
        required: required && "This email is required.",
      };
    case "createPassword":
      return {
        required: required && "This password is required.",
        minLength: {
          value: 5,
          message: "Password must be at least 5 characters.",
        },
      };
    case "userEmail":
      return {
        required: required && "This email is required.",
      };
    case "userPassword":
      return {
        required: required && "This password is required.",
        minLength: {
          value: 5,
          message: "Password must be at least 5 characters.",
        },
      };
    default:
      return {};
  }
}
