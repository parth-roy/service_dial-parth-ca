import Image from "next/image";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({
  showTagline = false,
  size = "md",
  className = "",
}: LogoProps) {
  const dims = {
    sm: { width: 28, height: 26, title: "text-base", tagline: "text-[8px] tracking-[0.2em]" },
    md: { width: 36, height: 33, title: "text-lg", tagline: "text-[9px] tracking-[0.22em]" },
    lg: { width: 48, height: 45, title: "text-2xl", tagline: "text-[11px] tracking-[0.25em]" },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Service Dial"
          width={dims.width}
          height={dims.height}
          priority
          style={{ width: "auto", height: "auto" }}
          className="object-contain drop-shadow-xs"
        />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-black tracking-tight text-sd-text ${dims.title}`}>
          Service <span className="text-sd-pink">Dial</span>
        </span>
        {showTagline && (
          <span className={`uppercase font-medium text-sd-muted mt-1 ${dims.tagline}`}>
            SIMPLIFYING BUSINESS
          </span>
        )}
      </div>
    </div>
  );
}
