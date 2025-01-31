'use client';

import { cn } from "@/utils/cn";
import { useState } from "react";
import Item from "./Item";
import { DOCUMENT_TYPE } from "@/types/type";

interface DocumentsListProps {
  parentDocumentId?: string;
  level?: number;
  data?: DOCUMENT_TYPE[];
}

const DocumentsList = ({
  // parentDocumentId,
  level = 0,
  data = []
}: DocumentsListProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId]
    }));
  };

  return (
    <>
      {data.length === 0 && (
        <p style={{
          paddingLeft: level ? `${(level * 12) + 25}px` : undefined
        }}
        className={cn(
          "text-sm font-medium text-stone-300",
          level === 0 && "hidden"
        )}
        >
          No Pages inside
        </p>
      )}
      {data.map((document) => (
        <div key={document.id}>
          <Item
            id={document.id}
            onClick={() => {}}
            label={document.title}
            documentIcon={document.icon}
            level={level}
            onExpand={() => onExpand(document.id)}
            expanded={expanded[document.id]}
            isParent={document.children  ? true : false}
          />
          {expanded[document.id] && document?.children && (
            <DocumentsList 
              parentDocumentId={document.id}
              level={level + 1}
              data={document?.children}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default DocumentsList;
