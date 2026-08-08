export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  isCompleted: boolean;
  isStarred: boolean;
  listId: string;
}

export interface TaskList {
  id: string;
  title: string;
  color: string;
  icon?: string;
  taskCount: number;
  completedCount: number;
}

export type FilterType = 'all' | 'pending' | 'completed' | 'starred';
