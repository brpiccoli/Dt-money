import { z } from "zod"

export const searchFormSchema = z.object({
    query: z.string(),
  })
  
  export type SearchFormInputs = z.infer<typeof searchFormSchema>