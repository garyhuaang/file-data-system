import { z } from "zod"

export const versionFormSchema = z.object({
	size: z.number(),
	modifiedBy: z.string().min(2).max(50),
	comment: z.string().min(2).max(200),
})

export const searchFormSchema = z.object({
	name: z.string(),
	owner: z.string(),
	mimeType: z.string(),
	tags: z.array(z.string()),
})

export const addFileFormSchema = z.object({
	name: z.string(),
	path: z.string(),
	size: z.number(),
	mimeType: z.string(),
	owner: z.string(),
	comment: z.string(),
	tags: z.array(z.string()),
})
