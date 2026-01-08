"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect"
const words = `"Everything is abstract. Systems are vast and precise.
Ideas scale from a single line of code to global platforms.
Functions stand like pillars. Architectures rise like cities.
We are builders here—who can make machines think and the future move."
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
