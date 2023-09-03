import {useCallback} from 'react';
import {isArray} from 'lodash';
import {getTODOList} from '../useCases/getTODOList/getTODOList';

/**
 * Hook with functions for work with TODO list
 */
const useTODOList = () => {
  const fetchTODOList = useCallback(async () => {
    const response = await getTODOList();
    console.log(response);
    console.log(response?.data);

    if (response && isArray(response?.data.items)) {
      // dispatch(TODOSliceActions.setNotesList(response.data.items));
    }
  }, []);

  return {
    fetchTODOList,
  };
};

export {useTODOList};
