import { Form } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Input, position, Stack, styled, Text } from "@chakra-ui/react";
import { _detailData } from "../api";
import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filterTitle = movies.filter((p) => {
    return p.TITLE.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <PageTitle title="검색하기" />
      <>
        <input type="text" value={search} onChange={onChange} />
      </>
    </div>
  );
};
