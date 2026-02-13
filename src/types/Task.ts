export interface Task {
    id:string;
    name:string;
    description?:string;
    date?: string;
    status: "Pending" | "Completed"
}