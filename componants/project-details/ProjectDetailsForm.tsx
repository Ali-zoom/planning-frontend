'use client'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useGetProjectDetails from '@/hooks/useGetProjectDetails'
import { useParams, useSearchParams } from 'next/navigation'

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

console.log("data =========== ",data?.project)

  return (
    <section>
      <form>
        {/* //tabweeb */}
        <div className='flex  items-center gap-x-5 '>

          <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="esthmar">الاستثمار</FieldLabel>
      <Input
        id="esthmar"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="bab">الباب</FieldLabel>
      <Input
        id="bab"
        type="text"
        defaultValue={52}
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="keshem">القسم</FieldLabel>
      <Input
        id="keshem"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="qataa">القطاع</FieldLabel>
      <Input
        id="qataa"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="mada">مادة</FieldLabel>
      <Input
        id="mada"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="nawaa">النوع</FieldLabel>
      <Input
        id="nawaa"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className='w-full max-w-16'>
      <FieldLabel htmlFor="tasalsel">التسلسل</FieldLabel>
      <Input
        id="tasalsel"
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>

        </div>
        {/* //project name */}
        <div className='flex'>
          <Field className='w-full '>
      <FieldLabel htmlFor="proName">اسم المشروع</FieldLabel>
     

      <Textarea id='proName' placeholder="اسم المشروع" />
      <FieldDescription>
      </FieldDescription>
    </Field>
        </div>

        {/* //kulaf */}
         <div className='flex  items-center gap-x-5 '>

          <Field className=''>
      <FieldLabel htmlFor="kulfaEdrag">كلفة الادراج</FieldLabel>
      <Input
        id="kulfaEdrag"
        type="text"
        placeholder='كلفة الادراج'
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className=''>
      <FieldLabel htmlFor="kulfaHalya">الكلفة الحالية</FieldLabel>
      <Input
        id="kulfaHalya"
        type="text"
        placeholder='الكلفة الحالية'
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
    <Field className=''>
      <FieldLabel htmlFor="edragYear">سنة الادراج</FieldLabel>
      <Input
        id="edragYear"
        type="text"
        placeholder='سنة الادراج'
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
  
   
    
  

        </div>

        {/* jeha Mostafeda */}
        <div className='flex items-center'>
           <Field className=''>
      <FieldLabel htmlFor="jehaMostafeda">الجهة المستفيدة</FieldLabel>
      <Input
        id="jehaMostafeda"
        placeholder='الجهة المستفيدة'
        type="text"
      />
      <FieldDescription>
      </FieldDescription>
    </Field>
        </div>

         {/* //notes */}
        <div className='flex'>
          <Field className='w-full '>
      <FieldLabel htmlFor="notes">الملاحظات</FieldLabel>
     

      <Textarea id='notes' placeholder="الملاحظات" />
      <FieldDescription>
      </FieldDescription>
    </Field>
        </div>
      </form>
    </section>
  )
}

export default ProjectDetailsForm