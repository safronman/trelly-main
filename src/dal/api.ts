const prepareHeaders = () => {
	const apiKey = import.meta.env.VITE_API_KEY
	if (!apiKey) return undefined
	
	return {
		'api-key': import.meta.env.VITE_API_KEY
	}
}

export const getTask = (boardId: string, taskId: string) => {
	const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
		headers: prepareHeaders()
	})
		.then(res => res.json())
	return promise
}

export const getTasks = () => {
	const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
		headers: prepareHeaders()
	})
		.then(res => res.json())
	return promise
}

// TYPES
// 🔶 getTask
type GetTaskOutput = { data: TaskDetailsData }

export type TaskDetailsData = {
	id: string
	type: "tasks"
	attributes: {
		title: string
		boardId: string
		status: number
		priority: number
		addedAt: string
		description: string
		boardTitle: string
		order: number
		updatedAt: string
		startDate: string | null
		deadline: string
		attachments: unknown[]
	}
}


// 🔶 getTasks
type GlobalTaskListResponse = {
	data: Task[]
	meta: {
		page: number
		pageSize: number
		totalCount: number
		pagesCount: number
	}
}

export type Task = {
	id: string
	type: "tasks"
	attributes: {
		title: string
		boardId: string
		status: number
		priority: number
		addedAt: string
		attachmentsCount: number
	}
}
