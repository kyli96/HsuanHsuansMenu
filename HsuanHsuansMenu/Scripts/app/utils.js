var utils = utils || {};
$.extend(utils, {
    getDisplayDate: function (dateString) {
        var d;
        if (dateString)
        {
            d = new Date(dateString);
        }
        if (!d)
        {
            d = new Date();
        }
        return (d.getUTCMonth() + 1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear();
    }
});