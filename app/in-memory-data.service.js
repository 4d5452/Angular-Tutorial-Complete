"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var items = [
            { id: 1, type: 'TV' },
            { id: 2, type: 'Remote' },
            { id: 3, type: 'Keyboard' },
            { id: 4, type: 'Controller' },
            { id: 5, type: 'Laptop' },
            { id: 6, type: 'Watch' }
        ];
        return { items: items };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map