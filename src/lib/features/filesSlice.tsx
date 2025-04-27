import {
	AddVersionProps,
	File,
	SearchFileProps,
	type AddFileProps,
	type Version,
} from "../store/types"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateId, sampleFiles } from "../utils"

type filesState = {
	files: File[]
	selectedFile: File | null
	searchResults: File[]
}

const initialState: filesState = {
	files: sampleFiles,
	selectedFile: null,
	searchResults: [],
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
		// removeFile: (state, action: PayloadAction<File>) => {},
		selectFile: (state, action: PayloadAction<File>) => {
			state.selectedFile = action.payload
		},
		searchFile: (state, action: PayloadAction<SearchFileProps>) => {
			console.log(action.payload)
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
	},
})

export const {
	addFile,
	//  removeFile,
	selectFile,
	searchFile,
	addVersion,
} = filesSlice.actions

export default filesSlice.reducer
