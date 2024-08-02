export type DOCUMENT_TYPE = {
    id: number;
    title: string;
    parentDocument?: number;
    content: string;
    icon?: string;
    corverImage?: string;
    userId?: number;
    isArchived?: boolean;
    isPublished?: boolean;
}