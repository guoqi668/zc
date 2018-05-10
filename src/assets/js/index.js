function recal(doc, win) {
    let docEl = doc.documentElement;
    let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    let recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return;
        docEl.style.fontSize = 100 * (clientWidth / 411) + 'px';
    };
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
}
export default recal(document, window);
