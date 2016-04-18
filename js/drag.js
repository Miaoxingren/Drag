window.onload = function () {
    function Drag(obj) {
        this.obj = obj;
    }
    Drag.prototype = {
        constructor: Drag,
        getMosuePos: function(e) {
            e = e || window.event;
            var eX = e.pageX || e.clientX + document.body.scrollLeft - document.body.clientLeft,
                eY = e.pageY || e.clientY + document.body.scrollTop - document.body.clientTop;
            return {
                x: eX,
                y: eY
            }
        },
        getCurPos: function (e) {
            e = e || window.event;
            var eX = e.pageX || e.clientX + document.body.scrollLeft - document.body.clientLeft,
                eY = e.pageY || e.clientY + document.body.scrollTop - document.body.clientTop;
            return {
                x: eX - this.obj.offsetLeft,
                y: eY - this.obj.offsetTop
            }
        },
        initDrag: function () {
            var that = this;
            this.obj.onmousedown = function (e) {
                var curPos = that.getCurPos(e);
                console.info(curPos);
                document.onmousemove = function (e) {
                    var mousePos = that.getMosuePos(e);
                    console.info(mousePos);
                    that.obj.style.marginLeft = mousePos.x - curPos.x + "px";
                    that.obj.style.marginTop = mousePos.y - curPos.y + "px";
                };
                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            };

        }
    };
    var drag = document.getElementById("drag"),
        dragable = new Drag(drag);
    dragable.initDrag();
};