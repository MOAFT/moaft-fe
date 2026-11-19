type DividerProps = {
  className?: string; //외부에서 전달할 추가 스타일
} & (
  | {
      type?: "default" | "thick"; //가로 구분선 두께
      vertical?: false;
    }
  | {
      type?: "default"; //세로 구분선은 default만 지원
      vertical: true;
    }
);

export default function Divider({
  type = "default",
  vertical = false,
  className = "",
}: DividerProps) {
  const sizeClass = vertical
    ? "w-px h-[32px]"
    : type === "thick"
      ? "w-full h-[4px]"
      : "w-full h-px";

  return (
    <div
      role="separator"
      aria-orientation={vertical ? "vertical" : "horizontal"}
      className={`shrink-0 bg-border-neutral-default ${sizeClass} ${className}`}
    />
  );
}
