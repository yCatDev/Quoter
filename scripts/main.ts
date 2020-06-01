
class Input {
    private field: Element;
    constructor() {
        this.field = document.getElementById("search");
        let rect = this.cumulativeOffset((this.field as HTMLElement));
        setCoords(rect.left, rect.top);
        (this.field as HTMLElement).oninput = (e) => this.OnInput();
    }
    private cumulativeOffset(element: HTMLElement) {
        let top = 0, left = 0;
        do {
            top += element.offsetTop  || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent as HTMLElement;;
        } while(element);

        return {
            top: top,
            left: left
        };
    };
    private OnInput():void
    {
        this.Circles();
    }

    private Circles(): void
    {
        render.play();
        animateParticules();
    }
}

window.onload = function() {
    initFireworks();
    let input = new Input();
}