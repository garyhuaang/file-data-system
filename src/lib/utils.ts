import { clsx, type ClassValue } from "clsx"
import { format, parseISO } from "date-fns"
import { twMerge } from "tailwind-merge"
import type { SearchUtilProps } from "./store/types"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const targetCommas = /[,]+/

export const generateId = () => {
	const timestamp = new Date().getTime()
	const randomPart = Math.floor(Math.random() * 10000)

	return timestamp * 10000 + randomPart
}

export function dateToLocaleString(dateString: string) {
	try {
		const date = new Date(dateString).toISOString()
		const parsedDate = parseISO(date)

		return format(parsedDate, "MM/dd/yyyy, h:mm a")
	} catch (error) {
		console.error(`Error while formatting date: ${error}`)
		return
	}
}

export function searchUtil({ type, searchVal, fileVal }: SearchUtilProps) {
	if (type === "tags") {
		const theMVPSearchVal = searchVal as string
		const fileTags = fileVal as string[]
		const searchTags = theMVPSearchVal.split(/[\s+.+,+\-+]/)

		if (!searchTags || searchTags.length === 0) return true

		if (searchTags.length) {
			const matchesFound = searchTags.every(tag => fileTags.includes(tag))

			if (!matchesFound) return false
		}
	} else {
		const searchTerms = searchVal as string
		const fileTerms = fileVal as string

		if (!searchTerms || searchTerms === "") return true

		if (searchTerms.length) {
			const matchesFound = searchTerms
				.toLowerCase()
				.split(/\.+\/,+\s+/)
				.every((term: string) => fileTerms.includes(term))

			if (!matchesFound) return false
		}
	}
	return true
}

export const sampleFiles = [
	{
		id: 0,
		name: "report.pdf",
		path: "/documents/reports/",
		size: 1024000,
		mimeType: "application/pdf",
		createdAt: "2022-10-20T09:30:00Z",
		modifiedAt: "2023-01-20T14:45:00Z",
		owner: "alice.smith",
		tags: ["report", "financial", "2023"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2023-01-15T10:30:00Z",
				size: 950000,
				modifiedBy: "alice.smith",
				comment: "Initial draft of quarterly financial report",
			},
			{
				versionNumber: 2,
				modifiedAt: "2023-01-18T11:20:00Z",
				size: 1000000,
				modifiedBy: "alice.smith",
				comment: "Updated with feedback from finance team",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-01-20T14:45:00Z",
				size: 1024000,
				modifiedBy: "charlie.davis",
				comment: "Final version with CEO approval and signatures",
			},
		],
	},
	{
		id: 1,
		name: "logo.png",
		path: "/assets/images/",
		size: 45600,
		mimeType: "image/png",
		createdAt: "2022-10-20T14:30:00Z",
		modifiedAt: "2022-11-05T09:15:00Z",
		owner: "bob.johnson",
		tags: ["logo", "image", "branding"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2022-10-20T14:30:00Z",
				size: 42000,
				modifiedBy: "bob.johnson",
				comment: "Initial design draft with old color palette",
			},
			{
				versionNumber: 2,
				modifiedAt: "2022-10-28T16:45:00Z",
				size: 43500,
				modifiedBy: "diana.wong",
				comment: "Updated with new brand colors",
			},
			{
				versionNumber: 3,
				modifiedAt: "2022-11-05T09:15:00Z",
				size: 45600,
				modifiedBy: "bob.johnson",
				comment: "Final version with optimized compression for web",
			},
		],
	},
	{
		id: 2,
		name: "user_data.csv",
		path: "/data/exports/",
		size: 2500000,
		mimeType: "text/csv",
		createdAt: "2023-02-10T16:20:00Z",
		modifiedAt: "2023-03-15T11:10:00Z",
		owner: "charlie.davis",
		tags: ["data", "users", "export"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2023-02-10T16:20:00Z",
				size: 1950000,
				modifiedBy: "charlie.davis",
				comment: "Initial data export from primary user database",
			},
			{
				versionNumber: 2,
				modifiedAt: "2023-02-25T13:40:00Z",
				size: 2300000,
				modifiedBy: "charlie.davis",
				comment: "Added new user fields and purchase history",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-03-15T11:10:00Z",
				size: 2500000,
				modifiedBy: "eve.martinez",
				comment: "Merged with regional user data and cleaned duplicates",
			},
		],
	},
	{
		id: 3,
		name: "app.js",
		path: "/project/src/",
		size: 15200,
		mimeType: "application/javascript",
		createdAt: "2022-10-12T13:45:00Z",
		modifiedAt: "2023-03-01T17:30:00Z",
		owner: "alice.smith",
		tags: ["code", "javascript", "frontend"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2022-10-12T13:45:00Z",
				size: 8600,
				modifiedBy: "alice.smith",
				comment: "Initial implementation of core application features",
			},
			{
				versionNumber: 2,
				modifiedAt: "2022-12-05T10:15:00Z",
				size: 12400,
				modifiedBy: "frank.lee",
				comment: "Added authentication module and user session handling",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-03-01T17:30:00Z",
				size: 15200,
				modifiedBy: "alice.smith",
				comment: "Refactored for performance and added new UI components",
			},
		],
	},
	{
		id: 4,
		name: "config.json",
		path: "/project/config/",
		size: 4800,
		mimeType: "application/json",
		createdAt: "2022-12-01T10:00:00Z",
		modifiedAt: "2023-02-28T09:15:00Z",
		owner: "bob.johnson",
		tags: ["config", "settings"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2022-12-01T10:00:00Z",
				size: 3200,
				modifiedBy: "bob.johnson",
				comment: "Initial configuration setup for development environment",
			},
			{
				versionNumber: 2,
				modifiedAt: "2023-01-15T14:30:00Z",
				size: 3900,
				modifiedBy: "charlie.davis",
				comment: "Added production environment settings and API keys",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-02-28T09:15:00Z",
				size: 4800,
				modifiedBy: "bob.johnson",
				comment: "Updated service endpoints and added new feature flags",
			},
		],
	},
	{
		id: 5,
		name: "config.cc.json",
		path: "/project/config/",
		size: 4900,
		mimeType: "application/json",
		createdAt: "2022-12-01T10:00:00Z",
		modifiedAt: "2023-02-28T09:15:00Z",
		owner: "bob.johnson",
		tags: ["config", "settings"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2022-12-01T10:00:00Z",
				size: 3200,
				modifiedBy: "bob.johnson",
				comment: "Initial configuration setup for development environment",
			},
			{
				versionNumber: 2,
				modifiedAt: "2023-01-15T14:30:00Z",
				size: 3900,
				modifiedBy: "charlie.davis",
				comment: "Added production environment settings and API keys",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-02-28T09:15:00Z",
				size: 4800,
				modifiedBy: "bob.johnson",
				comment: "Updated service endpoints and added new feature flags",
			},
		],
	},
	{
		id: 6,
		name: "config.whoa.cc.json",
		path: "/project/config/",
		size: 500000,
		mimeType: "application/json",
		createdAt: "2022-12-01T10:00:00Z",
		modifiedAt: "2023-02-28T09:15:00Z",
		owner: "bob.johnson",
		tags: ["config", "settings"],
		versions: [
			{
				versionNumber: 1,
				modifiedAt: "2022-12-01T10:00:00Z",
				size: 3200,
				modifiedBy: "bob.johnson",
				comment: "Initial configuration setup for development environment",
			},
			{
				versionNumber: 2,
				modifiedAt: "2023-01-15T14:30:00Z",
				size: 3900,
				modifiedBy: "charlie.davis",
				comment: "Added production environment settings and API keys",
			},
			{
				versionNumber: 3,
				modifiedAt: "2023-02-28T09:15:00Z",
				size: 4800,
				modifiedBy: "bob.johnson",
				comment: "Updated service endpoints and added new feature flags",
			},
		],
	},
]
