import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import type { AppDispatch, RootState } from '../states';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function ThreadDetail() {
  const { id } = useParams();
  const threadDetail = useSelector((states: RootState) => states.threadDetail);
  const dispatch = useDispatch<AppDispatch>();

  console.log(threadDetail);

  useEffect(() => {
    if (id) {
      dispatch(asyncReceiveThreadDetail(id));
    }
  }, [id, dispatch]);

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Diskusi Tersedia</h2>

      <p>detail trhead</p>
    </div>
  );
}

export default ThreadDetail;
