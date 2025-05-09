import { z } from "zod"

import {
	versionFormSchema,
	type addFileFormSchema,
} from "@/lib/forms/formSchemas"

export type Version = {
	versionNumber: number
	size: number | null
	modifiedAt: string
	modifiedBy: string
	comment: string
}

export type File = {
	id: number
	name: string
	path: string
	size: number | null
	mimeType: string
	createdAt: string
	modifiedAt: string
	owner: string
	tags: string[]
	versions: Version[]
}

export type FileModelState = {
	files: File[]
	selectedFile: File | null
	searchResults: File[]
}

export type SearchFileProps = {
	name: string
	mimeType: string
	owner: string
	tags: string
}

export type AddFileProps = {
	name: string
	path: string
	size: number | null
	mimeType: string
	owner: string
	comment: string
	tags: string
}

export type AddVersionProps = {
	size: number
	modifiedBy: string
	comment: string
}

type VersionFormFieldName = keyof z.infer<typeof versionFormSchema>
type AddFileFormFieldName = keyof z.infer<typeof addFileFormSchema>

export type AddVersionField = {
	name: VersionFormFieldName
	label: string
	placeholder: string
}

export type AddFileFieldState = {
	name: AddFileFormFieldName
	label: string
	placeholder: string
}

export type SearchFieldState = {
	name: string
	label: string
	placeholder: string
}

export type SearchUtilProps = {
	type: "tags" | "string"
	searchVal: string | string[] | number
	fileVal: string | string[] | number
}
