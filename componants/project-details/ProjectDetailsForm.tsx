'use client'

import useGetProjectDetails from '@/hooks/useGetProjectDetails'
import { useParams, useSearchParams } from 'next/navigation'
import ProjectEditForm from './ProjectEditForm';



const ProjectDetailsForm = () => {
    const params= useParams()
   
const {projectID}=  params


const intParams=Number(projectID)



 
const{data,isLoading,isError,error}=useGetProjectDetails(intParams)
if(isLoading){
    return <p>loading</p>
}

if(isError){
    return <p>"error here"</p>
}

 if (!data?.project) {
    return <p>Project not found</p>;
  }


  


  return (
     <ProjectEditForm project={data.project} />
  )
}

export default ProjectDetailsForm