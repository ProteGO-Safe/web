import { useContext } from 'react';
import MenuContext from '../../context/MenuContext';

const useMenuContext = () => useContext(MenuContext);

export default useMenuContext;
