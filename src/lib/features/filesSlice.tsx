import {
	AddVersionProps,
	File,
	type AddFileProps,
	type SearchFileProps,
	type Version,
} from "../store/types"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateId, sampleFiles, searchUtil } from "../utils"

type filesState = {
	files: File[]
	selectedFile: File | null
	searchResults: File[]
}

const initialState: filesState = {
	files: sampleFiles,
	selectedFile: null,
	searchResults: sampleFiles,
}

const filesSlice = createSlice({
	name: "files",
	initialState,
	reducers: {
		addFile: (state, action: PayloadAction<AddFileProps>) => {
			const currentDate = new Date().toString()
			const newVersion: Version = {
				versionNumber: 1,
				size: action.payload.size,
				modifiedAt: currentDate,
				modifiedBy: action.payload.owner,
				comment: action.payload.comment,
			}
			const newFile = {
				...action.payload,
				createdAt: currentDate,
				modifiedAt: currentDate,
				id: generateId(),
				versions: [newVersion],
			}
			state.files.push(newFile)
		},
		removeFile: (state, action: PayloadAction<File>) => {
			console.log(action.payload)
			state.files = state.files.filter(file => file.id !== action.payload.id)
		},
		selectFile: (state, action: PayloadAction<File>) => {
			state.selectedFile = action.payload
		},
		searchFile: (state, action: PayloadAction<SearchFileProps>) => {
			state.searchResults = state.files.filter(file => {
				const nameFound =
					!action.payload.name ||
					searchUtil({
						type: "string",
						searchVal: action.payload.name,
						fileVal: file.name,
					})

				const typeFound =
					!action.payload.mimeType ||
					searchUtil({
						type: "string",
						searchVal: action.payload.mimeType,
						fileVal: file.mimeType,
					})

				const ownerFound =
					!action.payload.owner ||
					searchUtil({
						type: "string",
						searchVal: action.payload.owner,
						fileVal: file.owner,
					})

				const tagsFound =
					!action.payload.tags ||
					searchUtil({
						type: "tags",
						searchVal: action.payload.tags,
						fileVal: file.tags,
					})

				return nameFound && typeFound && ownerFound && tagsFound
			})
		},
		addVersion: (state, action: PayloadAction<AddVersionProps>) => {
			if (!state.selectedFile) return

			const versions: Version[] = [...(state.selectedFile?.versions || [])]
			const maxVersion: number = versions[versions.length - 1].versionNumber

			versions.push({
				versionNumber: maxVersion + 1,
				size: action.payload.size,
				modifiedAt: new Date().toString(),
				modifiedBy: action.payload.modifiedBy,
				comment: action.payload.comment,
			})
			state.selectedFile.versions = versions
		},
		resetSearch: state => {
			return { ...state, searchResults: [...sampleFiles] }
		},
	},
})

export const {
	addFile,
	removeFile,
	selectFile,
	searchFile,
	addVersion,
	resetSearch,
} = filesSlice.actions

export default filesSlice.reducer
