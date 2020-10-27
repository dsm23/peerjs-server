"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartbeatHandler = void 0;
exports.HeartbeatHandler = (client) => {
    if (client) {
        const nowTime = new Date().getTime();
        client.setLastPing(nowTime);
    }
    return true;
};
