function curriedAdd(total) {
    if (total === undefined) return total || 0;

    return function(num) {
        if (num === undefined) {
            if (total === 0) {
                return 0;
            }
            return total;
        }
        return curriedAdd(total + num);
    };
}


module.exports = { curriedAdd };
