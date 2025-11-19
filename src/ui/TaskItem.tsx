import {clsx} from "clsx";
import type {Task} from "../dal/api.ts";
import styles from './TaskItem.module.css'

type Props = {
	task: Task
	isSelected: boolean
	onTaskSelected: (taskId: string, boardId: string) => void
}

export function TaskItem(props: Props) {
	const {task, isSelected, onTaskSelected} = props;
	
	const taskSelectedHandler = (task: Task) => {
		onTaskSelected(task.id, task.attributes.boardId)
	}
	
	const taskClassName = clsx(styles.task, {
		[styles.selected]: isSelected,
		[styles.default]: !isSelected,
		[styles.highPriority]: task.attributes.priority >= 2
	})
	
	const titleClassName = clsx({[styles.completed]: task.attributes.status === 2})
	
	return (
		<div key={task.id}
		     className={taskClassName}
		     onClick={() => taskSelectedHandler(task)}>
			<div>
				<p><b>Заголовок</b>: <span className={titleClassName}>{task.attributes.title}</span></p>
				<b>Статус</b>: <input type="checkbox" checked={task.attributes.status === 2}/>
				<p><b>Дата создания задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}</p>
			</div>
		</div>
	)
}
