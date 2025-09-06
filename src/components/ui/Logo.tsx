import Link from "next/link";
import { cn } from "@/lib/utils";
import { logoColors } from "@/config/branding";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className, 
  showText = true, 
  textColor = "text-brand-dark",
  href = "/",
  size = "md"
}: LogoProps) {
  const sizes = {
    sm: {
      icon: "w-8 h-8",
      text: "text-lg",
      subtext: "text-[10px]",
      gap: "gap-0.5",
      padding: "p-0.5"
    },
    md: {
      icon: "w-10 h-10",
      text: "text-xl",
      subtext: "text-xs",
      gap: "gap-0.5",
      padding: "p-1"
    },
    lg: {
      icon: "w-12 h-12",
      text: "text-2xl",
      subtext: "text-sm",
      gap: "gap-1",
      padding: "p-1.5"
    }
  };

  const currentSize = sizes[size];

  const LogoContent = (
    <div className={cn("flex items-center", className)}>
      {/* Logo Icon - 4 squares with exact brand colors */}
      <div className={cn(
        "rounded grid grid-cols-2",
        currentSize.icon,
        currentSize.gap,
        currentSize.padding
      )}>
        <div 
          className="rounded-sm"
          style={{ backgroundColor: logoColors.topLeft }}
        />
        <div 
          className="rounded-sm"
          style={{ backgroundColor: logoColors.topRight }}
        />
        <div 
          className="rounded-sm"
          style={{ backgroundColor: logoColors.bottomLeft }}
        />
        <div 
          className="rounded-sm"
          style={{ backgroundColor: logoColors.bottomRight }}
        />
      </div>
      
      {showText && (
        <div className="ml-3">
          <span className={cn(
            "font-armstrong font-bold block leading-none",
            currentSize.text,
            textColor
          )}>
            SEAYEEN
          </span>
          <span className={cn(
            "font-armstrong block leading-none",
            currentSize.subtext,
            textColor === "text-white" ? "text-white/80" : "text-brand-gray"
          )}>
            GROUP
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
}