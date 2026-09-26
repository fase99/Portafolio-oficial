import type { Difficulty } from "@/lib/writeup-types";

const levels: Record<Difficulty, string> = {
  Fácil: "easy",
  Medio: "medium",
  Difícil: "hard",
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className="diff" data-level={levels[difficulty] ?? "easy"}>
      {difficulty}
    </span>
  );
}
