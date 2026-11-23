import { api } from '@/lib/api';
import { project_tab } from '@/lib/types';
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'



export type ProjectsResponse = {
  project: project_tab;
};

export const fetchProject=async(projectId:number):Promise<ProjectsResponse>=>{
   
 const result=await api.get<ProjectsResponse>(`/projects/project/${projectId}`);
    return result.data
    

   
}
const useGetProjectDetails = (projectId:number): UseQueryResult<ProjectsResponse> => {

    // const queryClient=useQueryClient()
    // let getCashedDate:ProjectsResponse| undefined;
    // getCashedDate=queryClient.getQueryData<ProjectsResponse>(["users",+page])
    


  const query = useQuery({
    queryKey: ["project", {projectId}],
    queryFn: () => fetchProject(projectId),
    staleTime: 1000 * 60, // 1 minute
    // refetchInterval:1000*15 //15 ms
    // initialData: () => {
    //     if (getCashedDate) {
    //       console.log("hi from cached data")
    //       return getCashedDate.users.find((user) => user.id === userId);
    //     }else{
    //         return undefined
    //     }
    // }
  });
  return query;
};
 
export default useGetProjectDetails