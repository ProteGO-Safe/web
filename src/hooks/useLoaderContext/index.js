import { useContext } from 'react';
import LoaderContext from '../../context/LoaderContext';

const useLoaderContext = () => useContext(LoaderContext);

export default useLoaderContext;
