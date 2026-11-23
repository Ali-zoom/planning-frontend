import ProjectDetailsForm from '@/componants/project-details/ProjectDetailsForm'
import React, { Suspense } from 'react'

const ProjectByIdPage = () => {
  return (
<main className="myContainer mt-4">
      <h1>projecy details</h1>
      <Suspense>
      <ProjectDetailsForm />

      </Suspense>
    </main>  )
}

export default ProjectByIdPage