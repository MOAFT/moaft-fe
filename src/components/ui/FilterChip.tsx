type FilterChipProps = {
  label: string; //칩에 표시할 필터 이름
  selected: boolean; //현재 필터가 선택되었는지 나타냄
  onClick?: () => void; //칩을 클릭했을 때 실행할 함수
};

export default function FilterChip({
  label,
  selected,
  onClick,
}: FilterChipProps) {
  const variantClasses = selected
    ? "bg-gray-700 text-common-white"
    : "bg-common-white text-gray-600";

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`inline-flex h-10 w-fit items-center justify-center whitespace-nowrap rounded-moaft-full border-0 px-4 py-2 font-ko-body text-moaft-16 font-moaft-medium leading-moaft-24 tracking-moaft-normal hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${variantClasses}`}
    >
      {label}
    </button>
  );
}
