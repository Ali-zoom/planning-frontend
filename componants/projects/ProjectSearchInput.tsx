"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const ProjectSearchInput = ({ search, setSearch }: Props) => {
  const handelSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex items-center justify-between ">
      <Input
        className="max-w-sm bg-accent"
        type="search"
        placeholder="بحث في المشاريع"
        onChange={handelSearchChange}
      />
      <Button className=" py-5 px-3" variant={"default"}>
        اضافة مشروع
      </Button>
    </div>
  );
};

export default ProjectSearchInput;
