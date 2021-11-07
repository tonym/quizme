import { createContext } from 'preact';

const ColorModeContext = createContext({ toggleColorMode: (): void => {} });

export default ColorModeContext;
