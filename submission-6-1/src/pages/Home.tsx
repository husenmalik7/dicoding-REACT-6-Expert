import { Link } from 'react-router-dom';

import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon';
import ThumbsDownIcon from '../assets/icons/ThumbsDownIcon';
import CommentIcon from '../assets/icons/CommentIcon';

function Home() {
  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Diskusi Tersedia</h2>

      <p className="w-fit rounded-lg border-1 p-1 text-sm">#redux</p>

      <Link to={'/999a'} className="text-xl font-medium text-blue-600 visited:text-purple-600">
        Bagaimana pengalamanmu belajar Redux?
      </Link>
      <p>Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?</p>
      <div className="flex items-center gap-2.5 bg-amber-500">
        <div className="flex items-center gap-1">
          <ThumbsUpIcon />
          <p>1</p>
        </div>

        <div className="flex items-center gap-1">
          <ThumbsDownIcon />
          <p>0</p>
        </div>

        <div className="flex items-center gap-1">
          <CommentIcon />
          <p>1</p>
        </div>

        <p>811 hari lalu</p>
        <p>Dibuat oleh Dimas Saputra</p>
      </div>
    </div>
  );
}

export default Home;
