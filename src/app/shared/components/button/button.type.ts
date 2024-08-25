const variants = ['primary', 'secondary'] as const;

export type Variant = (typeof variants)[number];

const types = ['button', 'reset', 'submit'];

export type Types = (typeof types)[number];
