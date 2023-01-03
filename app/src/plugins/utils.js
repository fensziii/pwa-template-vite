export const formatBytes = function (bytes, decimals = 2) {
    if (bytes === 0){ return "0 Bytes"; }
    var k       = 1024;
    var dm      = decimals < 0 ? 0 : decimals;
    var sizes   = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    var i       = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const paginate = (items, page = 1, perPage = 10) => {
    const offset            = perPage * (page - 1);
    const totalPages        = Math.ceil(items.length / perPage);
    const paginatedItems    = items.slice(offset, perPage * page);
    return {
        previousPage: page - 1 ? page - 1 : null,
        nextPage    : (totalPages > page) ? page + 1 : null,
        total       : items.length,
        totalPages  : totalPages,
        items       : paginatedItems
    };
};

export const msToTime    = function (s) {
    function pad(n, z) { z = z || 2; return ("00" + n).slice(-z); }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return pad(hrs) + ":" + pad(mins) + ":" + pad(secs) + "." + pad(ms, 3);
};

export const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) { window.requestAnimationFrame(step); }
    };
    window.requestAnimationFrame(step);
};

export const on = (event_type, search, callback) => {
    document.addEventListener(event_type, function (event) {
        function finder(el, str) {
            if(el === null) return;
            const isMatch = el.matches(str);
            if(isMatch === false){
                finder(el.parentElement, search);
            } else {
                callback.call(event.target, { target : el, event : event });
            }
        }
        finder(event.target, search);
    });
};