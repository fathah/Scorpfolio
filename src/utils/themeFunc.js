
export function removeClassInAll(elems, classname) {
    if (Boolean(elems))
        [].forEach.call(elems, function (el) {
            el.classList.remove(classname);
        });
    return;
}

export function addClassInAll(elems, classname) {
    if (Boolean(elems))
        [].forEach.call(elems, function (el) {
            el.classList.add(classname);
        });
    return;
}
