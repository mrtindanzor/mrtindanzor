import type { VariantProps } from "class-variance-authority";

export type MakeVariantNonNullable<Variant extends Record<string, unknown>> = {
  [k in keyof Variant]: Extract<Variant[k], string | number>;
};

//biome-ignore  lint/suspicious/noExplicitAny: any type needed else it won't work
export type ExtractVariantsTypes<Variant extends (...args: any[]) => unknown> =
  VariantProps<Variant> extends infer ElementVariants
    ? ElementVariants extends Record<string, unknown>
      ? MakeVariantNonNullable<ElementVariants>
      : never
    : never;
