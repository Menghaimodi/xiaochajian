import html2canvas from "html2canvas";

html2canvas(document.getElementByld(container), {
    backgroundColor: "transparent",
    allowTaint: true,
}).then((canvas) => {
    console.log(canvas);
    //将画布展示到最前端
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    document.getElementByld("canvas").style.position = "fixed ";
    document.getElementByld("canvas").style.top = "0";
    document.getElementByld("canvas").style.left = "0";
    document.getElementByld("canvas")._style.zindex = "9999";
    //下载图片到本地
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpg");
    a.download = "图片";
    a.click();
});