var gameWindow = document.getElementById('window');
var data = document.getElementsByClassName('data');
var Mesh = /** @class */ (function () {
    function Mesh(_a) {
        var x = _a.x, y = _a.y;
        var _this = this;
        this.position_x = x;
        this.position_y = y;
        this.acc_y = 0;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'box');
        // this.setAttribute('id', 'box');
        this.element.style.top = this.position_x + 'px';
        this.element.style.left = this.position_y + 'px';
        gameWindow === null || gameWindow === void 0 ? void 0 : gameWindow.append(this.element);
        var interval = setInterval(function () {
            _this.position_y += _this.acc_y;
            _this.acc_y += 0.1;
            _this.element.style.top = _this.position_y + 'px';
            _this.element.style.left = _this.position_x + 'px';
        }, 10);
        setTimeout(function () {
            clearInterval(interval);
            _this.element.remove();
        }, 5000);
    }
    return Mesh;
}());
gameWindow === null || gameWindow === void 0 ? void 0 : gameWindow.addEventListener('mousemove', function (event) {
    data[0].textContent = 'X: ' + event.clientX;
    data[1].textContent = 'Y: ' + event.clientY;
});
gameWindow === null || gameWindow === void 0 ? void 0 : gameWindow.addEventListener('mousedown', function (event) {
    new Mesh({ x: event.clientX, y: event.clientY });
});
