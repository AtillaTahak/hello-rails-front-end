import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectAction } from '../redux/reducers/getGreetingSlice';

function Greeting() {
  const module = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectAction());
  }, [dispatch]);
  return (
    <div>
      {module.data && module.data.error ? (
        <>Oh no, there was an error</>
      ) : module.data.loading ? (
        <>Loading...</>
      ) : module.data ? (
        <>{module.data.name}</>
      ) : null}
    </div>
  );
}

export default Greeting;
