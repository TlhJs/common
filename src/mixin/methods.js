export default {
    /**
     * @param message
     * @param completeCallback  确定后的回调
     * @param title
     * @param buttonLabel
     * @constructor
     */
    $_qxz_cdv_alert(message, completeCallback, title = '提示', buttonLabel = '确定') {
        navigator.notification.alert(message, completeCallback, title, buttonLabel);
    },
    /**
     * Open a native confirm dialog, with a customizable title and button text.
     * The result that the user selects is returned to the result callback.
     *
     * @param {String} message           Message to print in the body of the alert
     * @param {Function} resultCallback  The callback that is called when user clicks on a button.
     * @param {String} title             Title of the alert dialog (default: Confirm)
     * @param {Array} buttonLabels   Array of the labels of the buttons (default: ['OK', 'Cancel'])
     */
    $_qxz_cdv_confirm(message, resultCallback, title = '提示', buttonLabels = ['确定', '取消']) {
        navigator.notification.confirm(message, resultCallback, title, buttonLabels);
    },
    $_qxz_cdv_file() {
        return cordova.file;
    },
    $_qxz_cdv_fileOpen2() {
        return cordova.plugins.fileOpener2;
    }
};
