import Button from "@components/button";
import LinkButton from "@components/link-button";
import { useForm } from "react-hook-form";

interface IContent {
  content: string;
}

export default function Post() {
  const { register, handleSubmit } = useForm<IContent>();
  const onVaild = (data: IContent) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onVaild)} className="flex flex-col">
      <div className="flex justify-between mt-[-1rem] mx-[-1rem]">
        <LinkButton href="/" type="basic" size="small">
          Cancel
        </LinkButton>
        <Button styleType="point" size="small">
          Post
        </Button>
      </div>
      <textarea
        {...register("content", { required: true })}
        name="content"
        placeholder="What's going on now?"
        className="border-none mx-[-1rem] mt-4 outline-none min-h-[100px] h-[calc(100vh-96px)] focus:ring-0"
      ></textarea>
    </form>
  );
}
