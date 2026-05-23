import type { ComponentProps } from "react";

/**
 * Max-width content container with the project's horizontal rhythm.
 * 1200px cap matches the Workbench macrostructure's centered tour layout.
 */
export function Container({
  children,
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
