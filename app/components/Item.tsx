'use client';

import { cn } from "@/utils/cn";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

interface ItemProps {
    id?: number;
    documentIcon?: string;
    active?: boolean;
    expanded?: boolean;
    isSearch?: boolean;
    level?: number;
    onExpand?: () => void;
    onClick: () => void;
    label: string;
    icon?: React.ReactNode;
}

const Item = ({
  id,
  documentIcon,
  active,
  expanded,
  isSearch,
  level = 0,
  onExpand,
  label,
  onClick,
  icon
}: ItemProps) => {
  const ArrowIcon = expanded ? <AiOutlineDown className="h-4 w-4 shrink-0 text-stone-600" /> : <AiOutlineRight className="h-4 w-4 shrink-0 text-stone-600" />;

  return (
    <div
      onClick={onClick}
      role='button'
      style={{ 
        paddingLeft : level ? `${(level * 12) + 12}px` : '12px' 
      }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        // active && "bg-purple-300"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-stone-300 mr-1"
          onClick={() => {}}
        >
          {ArrowIcon}
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">
          {documentIcon}
        </div>
      ) : (
        <p>아이콘</p>
      )}
      <span className="truncate">
        {label}
      </span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none 
        items-center gap-1 rounded border bg-stone-50 px-1.5 font-mono text-[10px] 
        font-medium text-stone-300 opacity-100">
          <span className="text-xs">
                CMD
          </span>k
        </kbd>
      )}
    </div>
  );
};

export default Item;