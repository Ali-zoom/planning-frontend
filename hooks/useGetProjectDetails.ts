import { api } from "@/lib/api";
import { project_tab } from "@/lib/types";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export type ProjectsResponse = {
  project: project_tab;
};

export const fetchProject = async (
  projectId: number,
): Promise<ProjectsResponse> => {
  const result = await api.get<ProjectsResponse>(
    `/projects/project/${projectId}`,
  );
  return result.data;
};

const useGetProjectDetails = (
  projectId: number,
): UseQueryResult<ProjectsResponse> => {

  //get data from cached first
  const queryClient = useQueryClient();
  let getCashedDate;
  getCashedDate = queryClient.getQueriesData<{ projects: project_tab[] }>({
    queryKey: ["project-list"],
    exact: false,
  });

  const project = getCashedDate
    .flatMap(([_, data]) => data?.projects ?? [])
    .find((project) => project.proID === projectId);
  // console.log("hi from cached data", project);

  const query = useQuery({
    queryKey: ["project", { projectId }],
    queryFn: () => {
      // console.log("Calling NestJS API...");
      return fetchProject(projectId);
    },
    staleTime: 1000 * 60 * 5, // 1 minute
    // refetchInterval:1000*15 //15 ms
    initialData: project ? { project } : undefined,
  });
  return query;
};

export default useGetProjectDetails;
