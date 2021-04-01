export const getAppLanguage = state => state.app.language;
export const getLanguageChangedByUser = state => state.app.languageChangedByUser;
export const getApplicationReseted = state => state.app.applicationReseted;
export const getUploadHistoricalDataStateErrorMessageVisible = state =>
  state.app.uploadHistoricalDataState.errorMessageVisible;
export const getFontScale = state => state.app.fontScale;
export const getWarningInEuropeTermState = state => state.app.warningInEuropeTerm;
export const getFirstRunTime = state => state.app.firstRunTime;
export const getApplicationLiked = state => state.app.rating && state.app.rating.applicationLiked;
export const getToShowRatingTimestamps = state => (state.app.rating && state.app.rating.toShowTimestamps) || [];
export const getShowedRatingTimestamps = state => (state.app.rating && state.app.rating.showedTimestamps) || [];
