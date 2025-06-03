(function () {
    'use strict';
    kintone.events.on(['app.record.index.show'], function (event) {
        var query = kintone.app.getQuery();
        var queryCondition = kintone.app.getQueryCondition()
        console.log(query);
        console.log(queryCondition);
        return event;
    });
})();