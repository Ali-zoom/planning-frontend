"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useGetProjectsPagination, {
  fetchProjects,
} from "@/hooks/useGetProjectsPagination";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const ProjectsData = ({ search, setSearch }: Props) => {
  const router = useRouter();

  const limit = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState<string>();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const queryClient = useQueryClient();
  useEffect(() => {
    const nextPage = currentPage + 1;

    queryClient.query({
      queryKey: ["projects", { limit: limit, page: nextPage, search: search }],
      queryFn: () => fetchProjects(nextPage, limit, search),
    });
  }, [search, currentPage, queryClient]);

  const { data, isPending, isError, error, isFetching } =
    useGetProjectsPagination(currentPage, limit, search);

  function goToPage(page: number) {
    if (page < 1) return;

    setCurrentPage(page);
  }

  if (isPending) return <p>Loading projects...</p>;

  if (isError) {
    return <p className="text-red-500">{error.message}</p>;
  }

  const { projects, totalProjects, totalPages } = data;
  return (
    <div className="mt-4">
      <h2 className=" font-semibold">نتائج البحث ({totalProjects})</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-stretch">
        {projects.length === 0 ? (
          <p className="text-destructive">لاتوجد بيانات تطابق البحث</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.proID}
              name={project.proname}
              price={40000000}
            />
          ))
        )}
      </div>

      {/* pagination start here */}
      {totalPages > 0 && (
        <div className="mt-2 space-y-3">
          {/* <p className="text-center text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p> */}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={currentPage <= 1}
                  onClick={(event) => {
                    event.preventDefault();
                    if (currentPage > 1) {
                      goToPage(currentPage - 1);
                    }
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (page) =>
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1,
                )
                .map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(event) => {
                        event.preventDefault();
                        goToPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={currentPage >= totalPages}
                  onClick={(event) => {
                    event.preventDefault();
                    if (currentPage < totalPages) {
                      goToPage(currentPage + 1);
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ProjectsData;
