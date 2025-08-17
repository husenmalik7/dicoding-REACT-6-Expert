import { Link } from 'react-router-dom';
import ThumbsUp from '../assets/icons/Thumbsup';

function Home() {
  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Diskusi Tersedia</h2>

      <p className="w-fit rounded-lg border-1 p-1 text-sm">#redux</p>

      <Link to={'/asdlqwe'} className="text-xl font-medium text-blue-600 visited:text-purple-600">
        Bagaimana pengalamanmu belajar Redux?
      </Link>
      <p>Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?</p>
      <div className="flex items-center bg-amber-500">
        <ThumbsUp />
        <p>1</p>
      </div>
      <p>1 0 1 811 hari lalu Dibuat oleh Dimas Saputra</p>
    </div>
  );
}

export default Home;
