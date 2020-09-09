import { resources } from '../../locales/resources';

export const languages = (() => Object.keys(resources).map(item => item))();
