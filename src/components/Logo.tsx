import Image from "next/image";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({
  showTagline = false,
  size = "md",
  className = "",
  variant = "light",
}: LogoProps) {
  const dims = {
    sm: {
      width: 28,
      height: 26,
      title: "text-base tracking-tight",
      tagline: "text-[7.5px] tracking-[0.24em]",
      tm: "text-[14.5px] ml-0.5",
    },
    md: {
      width: 35,
      height: 33,
      title: "text-[19px] xl:text-[20px] tracking-tight leading-none",
      tagline: "text-[8.5px] tracking-[0.22em] leading-none",
      tm: "text-[17.5px] xl:text-[18.5px] ml-1",
    },
    lg: {
      width: 48,
      height: 45,
      title: "text-2xl tracking-tight leading-none",
      tagline: "text-[10px] tracking-[0.25em] leading-none",
      tm: "text-[22px] ml-1.5",
    },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none shrink-0 ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Service Dial TM"
          width={dims.width}
          height={dims.height}
          priority
          style={{ width: "auto", height: "auto" }}
          className="object-contain drop-shadow-xs"
        />
      </div>

      <div className="flex flex-col justify-center gap-0.5">
        <span
          className={`font-black ${
            variant === "dark" ? "text-white" : "text-sd-text"
          } ${dims.title} inline-flex items-baseline`}
        >
          Service&nbsp;<span className="text-sd-pink">Dial</span>
          <span
            className={`font-black tracking-tight inline-block logo-tm-gradient ${dims.tm}`}
          >
            TM
          </span>
        </span>
        {showTagline && (
          <span
            className={`uppercase font-bold ${
              variant === "dark" ? "text-slate-400" : "text-sd-muted-2"
            } ${dims.tagline}`}
          >
            SIMPLIFYING BUSINESS
          </span>
        )}
      </div>
    </div>
  );
}
