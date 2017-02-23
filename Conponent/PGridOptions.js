"use strict";
var PGridOptions = (function () {
    function PGridOptions(isResizable, GridID, GridWidth, ColMinWidth) {
        if (ColMinWidth === void 0) { ColMinWidth = 30; }
        this.isResizable = isResizable;
        this.GridID = GridID;
        this.GridWidth = GridWidth;
        this.ColMinWidth = ColMinWidth;
    }
    return PGridOptions;
}());
exports.PGridOptions = PGridOptions;
//# sourceMappingURL=PGridOptions.js.map