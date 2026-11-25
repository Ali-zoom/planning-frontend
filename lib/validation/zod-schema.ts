
import { z } from "zod";


// Makwenat schema
export const makwenatSchema = z.object({
  mukwenID: z.number(),
  projectID: z.number(),

  mukwenName: z.string().optional(),
  KulfaTotal: z.string().optional(),
  txtehala: z.string().optional(),
  txtcompany: z.string().optional(),
  txtakedNumber: z.string().optional(),
  dtakedDate: z.string().optional(),
  txtnotes: z.string().optional(),
  muda: z.string().optional(),
  txtLocation: z.string().optional(),
  txtContractName: z.string().optional(),
  txtMobashraDate: z.string().optional(),
  txtMokemName: z.string().optional(),
  txtMobile: z.string().optional(),
  imageData: z.string().optional(),

  // Replace these placeholders with the actual nested schemas
  motabaa_fanya: z.array(z.any()),
  motabaa_Maly: z.array(z.any()),
  motabaa_Qanwn: z.array(z.any()),
});


// Project schema
export const editProjectSchema = z.object({
  
proID:z.number(),
  Estethmar: z.string().min(1,{message:"*"}).optional(),
  Bab: z.string().min(1,{message:"*"}).optional(),
  Keshem: z.string().min(1,{message:"*"}).optional(),
  Qataa: z.string().min(1,{message:"*"}).optional(),
  Mada: z.string().min(1,{message:"*"}).optional(),
  Nawaa: z.string().min(1,{message:"*"}).optional(),
  Tasalsl: z.string().min(1,{message:"*"}).optional(),

  proname: z.string().min(1,{message:"*"}).optional(),
  KalfaEdrag: z.string().optional(),
  Jehamostafed: z.string().min(1,{message:"*"}).optional(),
  EdragYear: z.string().optional(),
  adedMkawenat: z.string().optional(),



  notes: z.string().optional(),
  currentKulfa: z.string().optional(),

  makwenat: z.array(makwenatSchema),
});





// Add schema
// export const addProjectSchema = projectSchema.omit({
//   proID: true,

// });

// // Edit schema
// export const editProjectSchema = projectSchema.extend({
//   proID: z.number(),
// });

// Types
// export type ProjectFormData = z.infer<typeof projectSchema>;
// export type AddProjectData = z.infer<typeof addProjectSchema>;
export type EditProjectData = z.infer<typeof editProjectSchema>;
export type MakwenatFormData = z.infer<typeof makwenatSchema>;