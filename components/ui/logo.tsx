export default function Logo({ withText }: { withText?: boolean }) {
  return (
    <div className="flex items-center gap-4  w-fit">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="3" stroke="#5160B3" strokeWidth="2" />
        <circle cx="4" cy="14" r="3" stroke="#5160B3" strokeWidth="2" />
        <circle cx="14" cy="9" r="3" stroke="#5160B3" strokeWidth="2" />
        <circle cx="24" cy="14" r="3" stroke="#5160B3" strokeWidth="2" />
        <circle cx="14" cy="19" r="3" stroke="#5160B3" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" stroke="#5160B3" strokeWidth="2" />
      </svg>
      {withText && (
        <h1 className="text-xl w-fit font-bold text-app">OreDigital</h1>
      )}
    </div>
  );
}
