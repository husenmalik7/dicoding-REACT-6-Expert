interface Owner {
  id: string;
  name: string;
  avatar: string;
}

interface ThreadComment {
  id: string;
  content: string;
  createdAt: string;
  owner: Owner;
  upVotesBy: string[];
  downVotesBy: string[];
}

interface ThreadDetail {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  owner: Owner;
  category: string;
  comments: ThreadComment[];
  upVotesBy: string[];
  downVotesBy: string[];
}

export type { ThreadDetail };
