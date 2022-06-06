(() => {

    class Editor {
        constructor(implementador) {
            this.implementador = implementador;
        }

        print(width, height, color) {
            this.implementador.setWidth(width);
            this.implementador.setHeight(height);
            this.implementador.setColor(color);
            this.implementador.print();
        }
    }

    class EditorWithClear extends Editor {

        constructor(implementador) {
            super(implementador);
        }
        
        clear(){
            
            console.log(this.implementador);
            this.implementador.setWidth(0);
            this.implementador.setHeight(0);
            this.implementador.print();
        }

    }


    class HtmlPainter {

        constructor(container) {
            this.container = container;
            this.width = "1px";
            this.height = "1px";
            this.color = "#000000";
        }


        setWidth(width) {
            this.width = width+'px';
        }
        
        setHeight(height) {
            this.height = height+'px';
        }
        
        setColor(color) {
            this.color = color;
        }

        print(){
            this.container.innerHTML = `<div
                style="width:${this.width};height:${this.height};background:${this.color}"
            ></div>`
        }

    }

    class CanvasPainter {

        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = this.canvas.getContext("2d");
            this.width = 1;
            this.height = 1;
            this.color = "#000000";
        }


        setWidth(width) {
            this.width = width;
        }
        
        setHeight(height) {
            this.height = height;
        }
        
        setColor(color) {
            this.color = color;
        }

        print(){
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(0,0, this.width, this.height);
        }

    }

    const range = document.querySelector('#range');
    const editorColor = document.querySelector('#editorColor');

    const container = document.querySelector('#content');
    const canvas = document.querySelector('#canvas');
    
    
    // const editor = new Editor(new  HtmlPainter(container));
    // const editor = new Editor(new  CanvasPainter(canvas));
    const editor = new EditorWithClear(new HtmlPainter(container));

    range.addEventListener('input', (e) => {
        const width = e.target.value;
        const height = e.target.value;
        const color = editorColor.value;
        editor.print(width, height, color);
    });
    
    editorColor.addEventListener('input', (e) => {
        const width = range.value;
        const height = range.value;
        const color = e.target.value;
        editor.print(width, height, color);
    });

    btn.addEventListener('click', () =>{
        editor.clear();
    });

})();