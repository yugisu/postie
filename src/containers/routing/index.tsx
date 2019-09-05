import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchPosts } from 'store/posts/actions';
import { RootState } from 'store/types';

import { NotFound } from 'containers/not-found';
import { Spinner } from 'components/spinner';
import { Thread } from 'containers/thread';

export const Routing = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.posts, shallowEqual);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/posts' />
      </Route>

      <Route path='/posts'>
        <Thread />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
