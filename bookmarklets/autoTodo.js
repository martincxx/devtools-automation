var autoTodo = new function() {
    this.toggleAll = function() {
        document.querySelector("#toggle-all").click();
    }

    this.toggleItem = function(item) {
        item.click();
    }

    this.selectItemX =function (x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
    }
    this.newTodo = function (task) {
        document.querySelector("input.new-todo").value = task;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

     this.deleteTodo = function(task) {
        document.querySelector("ul.todo-list > li:nth-child(" + task + ") button.destroy").click()
    }

    this.clearCompleted = function() {
        document.querySelector("button.clear-completed").click();
    }

    this.filterCompleted= function() {
        location.hash = "/completed";
    }

    this.filterActive = function() {
        location.hash = "/active";
    }

    this.filterAll = function() {
        location.hash = "/";
    }

    this.amendTodo = function(x, amendedValue) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") label").dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = amendedValue;
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));

    }
}
