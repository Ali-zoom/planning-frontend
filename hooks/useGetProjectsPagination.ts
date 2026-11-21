"use client";

import { api } from "@/lib/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export type ProjectType = {
  proID: number;
  proname: string;
};

export type ProjectsResponse = {
  projects: ProjectType[];
  totalProjects: number;
  totalPages: number;
  currentPage: number;
  limit: number;
};

export const fetchProjects = async (
  page: number,
  limit: number,
  search?: string,
): Promise<ProjectsResponse> => {
  const result = await api.get<ProjectsResponse>("projects/projects-list", {
    params: { page, limit, search },
  });

  return result.data;
};

const useGetProjectsPagination = (
  page: number,
  limit: number,
  search?: string,
): UseQueryResult<ProjectsResponse> => {
  return useQuery({
    queryKey: ["projects", { page, limit, search }],
    queryFn: () => fetchProjects(page, limit, search),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });
};

export default useGetProjectsPagination;
