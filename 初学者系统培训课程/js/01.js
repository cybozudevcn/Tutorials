(function () {
    'use strict';
    kintone.events.on('app.record.create.show', function (event) {
        kintone.app.record.setFieldShown('kfcHint', true);
        return event;
    });
    kintone.events.on(['app.record.detail.show', 'app.record.edit.show', 'app.record.print.show'], function (event) {
        kintone.app.record.setFieldShown('kfcHint', false);
        return event;
    });
})();