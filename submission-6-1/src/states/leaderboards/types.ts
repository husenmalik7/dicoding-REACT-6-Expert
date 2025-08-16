interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Leaderboard {
  user: User;
  score: number;
}

export type { Leaderboard };
