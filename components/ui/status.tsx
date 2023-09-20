export default function StatusView({ status }: { status: string }) {
  return (
    <div
      className={` text-green-600 flex items-center gap-1 p-1 rounded-full   my-2 w-fit  bg-green-600/20`}
    >
      <div
        className={
          status == "DANGER"
            ? `w-3 h-3 rounded-full bg-red-600`
            : `w-3 h-3 rounded-full bg-green-600`
        }
      ></div>
      <span
        className={
          status == "DANGER"
            ? `text-red-600 text-xs w-fit`
            : `text-green-600 text-xs w-fit`
        }
      >
        {status}
      </span>
    </div>
  );
}
