export type DOCUMENT_TYPE = {
    id: string;
    title: string;
    parentDocument?: string;
    children: DOCUMENT_TYPE[] | null;
    icon?: string;
    content?: string;
    corverImage?: string;
    userId?: number;
    isArchived?: boolean;
    isPublished?: boolean;
}