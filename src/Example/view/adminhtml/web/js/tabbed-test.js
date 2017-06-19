require([
        'jquery',
        'jquery/ui'
    ],
    function($, accordion) {
        $("#vertical_tabs").accordion({
            heightStyle: "content"
        });
    }
);

require([
        'jquery',
        'jquery/ui'
    ],
    function($, tabs) {
        $("#horizontal_tabs").tabs();
    }
);