'use client'
import React from 'react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {  EditProjectData, editProjectSchema } from '@/lib/validation/zod-schema'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { project_tab } from '@/lib/types'
import { Button } from '@/components/ui/button'

interface Props {
  project: project_tab;
}

const ProjectEditForm = ({ project }: Props) => {




const {
    register,
    handleSubmit,
    setError,

    formState: { errors },
  } = useForm<EditProjectData>({
    mode: "onChange",
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      proID:project.proID,
      Estethmar: project.Estethmar,
      Bab: project.Bab,
      Keshem: project.Keshem,
      Qataa: project.Qataa,
      Mada: project.Mada,
      Nawaa: project.Nawaa,
      Tasalsl: project.Tasalsl,
      proname: project.proname,
      KalfaEdrag: project.KalfaEdrag,
      Jehamostafed: project.Jehamostafed,
      EdragYear: project.EdragYear,
      adedMkawenat:project.adedMkawenat,
      
      notes: project.notes,
      currentKulfa:project.Nawaa,

      makwenat:project.makwenat,
    },
  });


   const onSubmit = async (data: EditProjectData) => {

    console.log("data ========",data)
    // const formData = new FormData();

    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone || "");
    // formData.append("streetAddress", data.streetAddress || "");
    // formData.append("postalCode", data.postalCode || "");
    // formData.append("city", data.city || "");
    // formData.append("country", data.country || "");
    // formData.append("role", isAdmin ? UserRole.ADMIN : UserRole.USER);

    // // ✅ file
    // if (selectedFile) {
    //   formData.append("image", selectedFile);
    // }

    // await axios.post("/api/user/profile", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    // toast.success("user profile updated", { position: "top-center" });
    // await update();
    // router.refresh();
  };





  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* //tabweeb */}
        <div className="flex  items-center gap-x-5 ">
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="esthmar">الاستثمار</FieldLabel>
            <Input
              className="hide-arrows"
              id="esthmar"
              type="number"
              {...register("Estethmar")}
            />
            <FieldDescription className="absolute top-full text-destructive">
              {errors.Estethmar?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="bab">الباب</FieldLabel>
            <Input
              id="bab"
              type="text"
              defaultValue={52}
              {...register("Bab")}
            />
            <FieldDescription className="absolute top-full text-destructive">
              {errors.Bab?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="keshem">القسم</FieldLabel>
            <Input id="keshem" type="text" className="hide-arrows"  {...register("Keshem")} />
            <FieldDescription className="absolute top-full text-destructive">
              {errors.Keshem?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="qataa">القطاع</FieldLabel>
            <Input id="qataa" type="text" className="hide-arrows"  {...register("Qataa")} />
            <FieldDescription className="absolute top-full text-destructive">
              {errors.Qataa?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="mada">مادة</FieldLabel>
            <Input id="mada" type="text" className='hide-arrows'  {...register("Mada")} />
            <FieldDescription className="absolute top-full text-destructive">
                {errors.Mada?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="nawaa">النوع</FieldLabel>
            <Input id="nawaa" type="text" className='hide-arrows'  {...register("Nawaa")}/>
            <FieldDescription className="absolute top-full text-destructive">
                {errors.Nawaa?.message}
            </FieldDescription>
          </Field>
          <Field className="w-full max-w-16 relative">
            <FieldLabel htmlFor="tasalsel">التسلسل</FieldLabel>
            <Input id="tasalsel" type="text" className='hide-arrows'  {...register("Tasalsl")} />
<FieldDescription className="absolute top-full text-destructive">
                {errors.Tasalsl?.message}
            </FieldDescription>          </Field>
        </div>
        {/* //project name */}
        <div className="flex">
          <Field className="w-full relative">
            <FieldLabel htmlFor="proName">اسم المشروع</FieldLabel>

            <Textarea id="proName" placeholder="اسم المشروع" {...register("proname")} />
            <FieldDescription className="absolute top-full text-destructive">
                {errors.proname?.message}
            </FieldDescription>    
          </Field>
        </div>

        {/* //kulaf */}
        <div className="flex  items-center gap-x-5 ">
          <Field className="">
            <FieldLabel htmlFor="kulfaEdrag">كلفة الادراج</FieldLabel>
            <Input id="kulfaEdrag" type="text" placeholder="كلفة الادراج" />
            <FieldDescription></FieldDescription>
          </Field>
          <Field className="">
            <FieldLabel htmlFor="kulfaHalya">الكلفة الحالية</FieldLabel>
            <Input id="kulfaHalya" type="text" placeholder="الكلفة الحالية" />
            <FieldDescription></FieldDescription>
          </Field>
          <Field className="">
            <FieldLabel htmlFor="edragYear">سنة الادراج</FieldLabel>
            <Input id="edragYear" type="text" placeholder="سنة الادراج" />
            <FieldDescription></FieldDescription>
          </Field>
        </div>

        {/* jeha Mostafeda */}
        <div className="flex items-center">
          <Field className="">
            <FieldLabel htmlFor="jehaMostafeda">الجهة المستفيدة</FieldLabel>
            <Input
              id="jehaMostafeda"
              placeholder="الجهة المستفيدة"
              type="text"
            />
            <FieldDescription></FieldDescription>
          </Field>
        </div>

        {/* //notes */}
        <div className="flex">
          <Field className="w-full ">
            <FieldLabel htmlFor="notes">الملاحظات</FieldLabel>

            <Textarea id="notes" placeholder="الملاحظات" />
            <FieldDescription></FieldDescription>
          </Field>
        </div>

        <Button type="submit">submit</Button>
      </form>
    </section>
  );
}

export default ProjectEditForm