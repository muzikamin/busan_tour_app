import { Form } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSearchResult = () => {};

  return (
    <div>
      <PageTitle title="검색하기" />

      <>
        <Form onSubmit={handleSubmit(onSearchResult)}>
          <input
            {...register("keyword", {
              required: "검색내용을 입력해 주세요",
            })}
            type="text"
            placeholder="검색내용 입력..."
          />
          <button>
            <FiSearch />
          </button>
        </Form>
      </>
    </div>
  );
};
