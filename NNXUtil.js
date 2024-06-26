/**
 * Copyright (c) 2024
 * esinkutaykilic@gmail.com
 */

// v1.0.0

'use strict';


const NNXUtil = {}

NNXUtil.EVENT_SOURCE = {
    MOUSE: {
        id: 'mouse',
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup',
    },
    TOUCH: {
        id: 'touch',
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend',
    },
}

NNXUtil.absoluteArray = function(item){
    let resultItem;

    if(item !== undefined){
        if(Array.isArray(item)){
            resultItem = item;
        }else{
            resultItem = [item];
        }
    }

    return resultItem;
}

NNXUtil.getTargetFromMoveEvent = function(e, type){
    let target;

    switch(type){
        case NNXUtil.EVENT_SOURCE.MOUSE.id:
            target = e;
            break;

        case NNXUtil.EVENT_SOURCE.TOUCH.id:
            target = NNXUtil.calcTouchCenter(e.targetTouches);
            break;
    }

    return target;
}

NNXUtil.calcTouchCenter = function(touchList){
    const calcCenter = {
        clientX: 0,
        clientY: 0,
    }

    for(let i = 0; i < touchList.length; i++){
        calcCenter.clientX += touchList.item(i).clientX;
        calcCenter.clientY += touchList.item(i).clientY;
    }

    calcCenter.clientX /= touchList.length;
    calcCenter.clientY /= touchList.length;

    return calcCenter;
}

NNXUtil.virtualNavigate = function(path, state = {}) {
    history.pushState(state, '', path);
    dispatchEvent(new PopStateEvent('popstate', state));
};


export {NNXUtil};
