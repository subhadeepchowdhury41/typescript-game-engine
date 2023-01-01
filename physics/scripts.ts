const gameWindow: HTMLElement | null = document.getElementById('window');
const data = document.getElementsByClassName('data');

class Mesh {
    private element: HTMLDivElement;
    private position_x: number;
    private position_y: number;
    private acc_y: number;
    
    constructor({x, y}) {
        this.position_x = x;
        this.position_y = y;
        this.acc_y = 0;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'box');
        // this.setAttribute('id', 'box');

        this.element.style.top = this.position_x + 'px';
        this.element.style.left = this.position_y + 'px';
        gameWindow?.append(this.element);

        let interval = setInterval(() => {
            this.position_y += this.acc_y;
            this.acc_y += 0.1;
            this.element.style.top = this.position_y + 'px';
            this.element.style.left = this.position_x + 'px';
        }, 10);

        setTimeout(() => {
            clearInterval(interval);
            this.element.remove();
        }, 5000);
    }
}

gameWindow?.addEventListener('mousemove', event => {
    data[0].textContent = 'X: ' + event.clientX;
    data[1].textContent = 'Y: ' + event.clientY;
});

gameWindow?.addEventListener('mousedown', event => {
    new Mesh({x: event.clientX, y: event.clientY});
});