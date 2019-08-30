import { checkPermission } from "./common/utils";

App({
    roomName: undefined,
    appid: 'ead903g53',
    userId: undefined,
    roomToken: undefined,
    url: 'wss://rtmpgate.cloudvdn.com/',

    onLaunch: function () {
        checkPermission()
    },
});
