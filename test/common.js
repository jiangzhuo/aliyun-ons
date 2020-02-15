/**
 * XadillaX created at 2016-06-07 17:25:06 With ♥
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 */
"use strict";

var Consumer = require("../").Consumer;
var Producer = require("../").Producer;
var logger = require("../").logger;

var config = require("./config");

module.exports = {
    consumer: new Consumer(config.consumerId, config.topic, "*", config.accessKey, config.secretKey, {
        threadNum: 1,
        namesrvAddr:"http://MQ_INST_1907979290938635_BbxzGa84.mq-internet-access.mq-internet.aliyuncs.com:80",
        // onsAddr: "http://1907979290938635.mqrest.cn-qingdao-public.aliyuncs.com"
        // onsAddr: "http://onsaddr-internet.aliyun.com:80/rocketmq/nsaddr4client-internet"
    }),
    producer: new Producer(config.producerId, config.accessKey, config.secretKey, {
        namesrvAddr:"http://MQ_INST_1907979290938635_BbxzGa84.mq-internet-access.mq-internet.aliyuncs.com:80",
        // onsAddr: "http://1907979290938635.mqrest.cn-qingdao-public.aliyuncs.com"
        // onsAddr: "http://onsaddr-internet.aliyun.com:80/rocketmq/nsaddr4client-internet"
    }),
    logs: []
};

logger.on("data", function(data) {
    module.exports.logs.push(data);
});
