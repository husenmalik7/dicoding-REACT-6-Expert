import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveThreads } from '../states/threads/action';

import type { AppDispatch, RootState } from '../states';

import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon';
import ThumbsDownIcon from '../assets/icons/ThumbsDownIcon';
import CommentIcon from '../assets/icons/CommentIcon';

function Home() {
  const threads = useSelector((state: RootState) => state.threads);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
  }, [dispatch]);


  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Diskusi Tersedia</h2>


      {threads.map((thread, index) => (

        <div key={index}>
          <p className="w-fit rounded-lg border-1 p-1 text-sm">#redux</p>

          <Link to={'/999a'} className="text-xl font-medium text-blue-600 visited:text-purple-600">
            {thread.title}
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


      ))}

    </div>
  );
}

export default Home;
