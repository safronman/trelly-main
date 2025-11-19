import {useTasks} from "../bll/useTasks.ts";
import {TaskItem} from "./TaskItem.tsx";

type Props = {
	selectedTaskId: string | null
	onTaskSelected: (taskId: string, boardId: string) => void
	onTaskReset: () => void
}

export function TasksList(props: Props) {
	const {selectedTaskId, onTaskSelected, onTaskReset} = props
	
	const {tasks} = useTasks()
	
	if (tasks === null) {
		return <h1>Загрузка...</h1>;
	}
	
	if (tasks.length === 0) {
		return <h1>Задачи отсутствуют</h1>;
	}
	
	return (
		<div>
			<button onClick={onTaskReset}>reset</button>
			<hr/>
			{tasks.map((task) => {
				return <TaskItem
					key={task.id}
					task={task}
					isSelected={task.id === selectedTaskId}
					onTaskSelected={onTaskSelected}
				/>
			})}
		</div>
	)
}
