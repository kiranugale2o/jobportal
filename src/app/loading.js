import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  const ar = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];
  return (
    <div className="p-24 flex flex-wrap space-y-3 space-x-5">
      {ar.map((d, i) => {
        return (
          <div key={i} className="space-y-2">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        );
      })}
    </div>
  );
}
