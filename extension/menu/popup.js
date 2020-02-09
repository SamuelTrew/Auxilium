var lc1306 = jQuery.noConflict(true);

(function ($) {

    $(function () {

        chrome.storage.sync.get('colorfilteringValue', function (obj) {

            var noValue = obj.colorfilteringValue === null || obj.colorfilteringValue === undefined;
            $("input[name=type][value=" + (noValue ? "deactive" : obj.colorfilteringValue) + "]").prop('checked', true);

            if (obj.colorfilteringValue !== 'deactivate' && !noValue) {
                run();
            }

        });

        $('input[name="type"]:radio').change(
            function () {

                var newValue = $('input[name=type]:checked', '#cvd_radios').val();
                chrome.storage.sync.set({ 'colorfilteringValue': newValue }, function () {

                    if (newValue !== 'deactivate') {
                        chrome.tabs.executeScript({ file: 'menu/background.js' });
                    } else {
                        chrome.tabs.executeScript({ file: 'menu/reload.js' });
                    }

                });
            }
        );

    });

})(lc1306);