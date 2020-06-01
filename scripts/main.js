var Input = /** @class */ (function () {
    function Input() {
        var _this = this;
        this.field = document.getElementById("search");
        var rect = this.cumulativeOffset(this.field);
        setCoords(rect.left, rect.top);
        this.field.oninput = function (e) { return _this.OnInput(); };
    }
    Input.prototype.cumulativeOffset = function (element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
            ;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    ;
    Input.prototype.OnInput = function () {
        this.Circles();
    };
    Input.prototype.Circles = function () {
        render.play();
        animateParticules();
    };
    return Input;
}());
window.onload = function () {
    initFireworks();
    var input = new Input();
};
//# sourceMappingURL=main.js.map