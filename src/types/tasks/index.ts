export type Task = {
  title: string;
  id: string;
  order: number;
};

export type NewTask = {
  title: string;
};

export type NewTaskPayload = {
  title: string;
  userId: string;
  description: string;
};

export type EditTaskPayload = {
  title: string;
  order: number;
  description: string;
  userId: string;
  // boardId: string;
  // columnId: string;
};
