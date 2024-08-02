'use client';

import { cn } from "@/utils/cn";
import { useState } from "react";
import Item from "./Item";
import { DOCUMENT_TYPE } from "@/types/type";

interface DocumentsListProps {
  parentDocumentId?: number;
  level?: number;
  data?: DOCUMENT_TYPE[];
}

const DocumentsList = ({
  parentDocumentId,
  level = 0,
  data = []
}: DocumentsListProps) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const onExpand = (documentId: number) => {
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
          "text-sm font-medium text-muted-foreground/80",
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
          />
          {/* {expanded[document.id] && document?.children && (
            <DocumentsList 
              parentDocumentId={document.id}
              level={level + 1}
              data={document?.children}
            />
          )} */}
        </div>
      ))}
    </>
  );
};

export default DocumentsList;
