import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"section">, "children"> & {
  id?: string;
  label?: string;
  children: ReactNode;
};

/**
 * Vertical-rhythm section wrapper.
 * Spacing between major sections is --space-9..10 (96-128px) per
 * layout-and-space.md ("don't subdivide sections with sub-rules — the
 * section break is the visual rhythm").
 */
export function Section({
  id,
  label,
  children,
  className = "",
  ...props
}: Props) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`py-20 sm:py-28 lg:py-32 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
