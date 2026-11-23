'use client'
import useGetProjectDetails from '@/hooks/useGetProjectDetails'
import { useParams, useSearchParams } from 'next/navigation'

const ProjectDetailsForm = () => {
    const params= useParams()
   
const {projectID}=  params
console.log("projectID",projectID)

console.log( typeof projectID)

const intParams=Number(projectID)
console.log( typeof intParams)

// if(!projectID){
//     return <p>not found</p>
// }

 
const{data,isLoading,isError,error}=useGetProjectDetails(intParams)
if(isLoading){
    return <p>loading</p>
}

if(isError){
    return <p>"error here"</p>
}

console.log("data =========== ",data?.project)

  return (
    <div>ProjectDetailsForm</div>
  )
}

export default ProjectDetailsForm