import { ny } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export const BeamButton = ({ ...props }: ButtonProps) => {
  return (
    <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#ff2975_0%,#ffb900_100%)] group-hover:bg-none" />
      <Button
        {...props}
        className={ny(
          "h-10 px-2 rounded-full font-semibold text-text-foreground backdrop-blur-xl bg-background w-full",
          props.className
        )}
      />
    </div>
  );
};
