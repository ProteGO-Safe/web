export const isAndroidWebView = () => !!window.NativeBridge;
export const isIOSWebView = () => !!window.webkit;
export const isWebView = () => isAndroidWebView() || isIOSWebView();
export const isLocalPWA = () => window.location.hostname === '';
