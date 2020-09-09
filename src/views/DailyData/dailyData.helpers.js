import { DAILY_DATA_MODE } from './dailyData.constants';

export const isCreateMode = mode => mode === DAILY_DATA_MODE.CREATE;

export const isEditMode = mode => mode === DAILY_DATA_MODE.EDIT;

export const isViewMode = mode => mode === DAILY_DATA_MODE.VIEW;
