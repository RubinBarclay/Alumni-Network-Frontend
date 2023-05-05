import * as yup from "yup";

export const profileFormSchema = yup.object({
  name: yup.string(),
  pictureUrl: yup.string().url("Please enter a valid URL"),
  status: yup.string().max(50),
  bio: yup.string().max(500),
  funFact: yup.string().max(50),
}).required();

export type ProfileFormData = yup.InferType<typeof profileFormSchema>;