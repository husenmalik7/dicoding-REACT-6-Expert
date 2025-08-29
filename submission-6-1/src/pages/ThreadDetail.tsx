import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { AppDispatch } from '../states';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon';
import ThumbsDownIcon from '../assets/icons/ThumbsDownIcon';
import selectMappedThreads from '../states/threadDetail/selector';

import { postedAt } from '../utils';

function ThreadDetail() {
  const { id } = useParams();

  const threadDetail = useSelector(selectMappedThreads);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id, dispatch]);

  return (
    <div className="p-8">
      <p className="w-fit rounded-lg border-1 p-1 text-sm">#{threadDetail?.category}</p>
      <h2 className="my-4 text-3xl font-medium">{threadDetail?.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: threadDetail?.body ?? '' }} />
      <div className="my-4 flex items-center gap-2.5">
        <div className="flex items-center gap-1">
          <ThumbsUpIcon />
          <p>{threadDetail?.upVotesBy?.length ?? 0}</p>
        </div>

        <div className="flex items-center gap-1">
          <ThumbsDownIcon />
          <p>{threadDetail?.downVotesBy?.length ?? 0}</p>
        </div>

        <p>Dibuat oleh</p>
        <img className="h-6 rounded-full" src={threadDetail?.owner?.avatar} alt={threadDetail?.owner?.name} />
        <p>{threadDetail?.owner?.name}</p>
        <p>{threadDetail?.postedAt}</p>
      </div>
      <p className="text-xl font-medium">Beri komentar </p>
      <div className="flex gap-x-1">
        <Link to="/login" className="text-blue-600 visited:text-purple-600">
          <p>Login</p>
        </Link>
        untuk memberi komentar
      </div>

      <p className="my-4 text-xl font-medium">Komentar ({threadDetail?.comments?.length})</p>
      {threadDetail?.comments?.map((comment, index) => (
        <div key={index}>
          <div className="flex">
            <div className="flex flex-1 gap-2">
              <img className="h-6 rounded-full" src={comment?.owner?.avatar} alt={comment?.owner?.name} />
              <p>{comment?.owner?.name}</p>
            </div>
            <p>{postedAt(comment?.createdAt)}</p>
          </div>

          <p className="my-2" dangerouslySetInnerHTML={{ __html: comment?.content ?? '' }} />
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <ThumbsUpIcon />
              <p>{comment?.upVotesBy.length ?? 0}</p>
            </div>

            <div className="flex items-center gap-1">
              <ThumbsDownIcon />
              <p>{comment?.downVotesBy.length ?? 0}</p>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />
        </div>
      ))}
    </div>
  );
}

export default ThreadDetail;
