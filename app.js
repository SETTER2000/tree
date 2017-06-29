function Node(data) {
    this.data = data;
    this.children = [];
}

function Tree() {
    this.root = null;
}

Tree.prototype.add = function(data, toNodeData) {
    var node = new Node(data);
    var parent = toNodeData ? this.findBFS(toNodeData) : null;
    if(parent) {
        parent.children.push(node);
    } else {
        if(!this.root) {
            this.root = node;
        } else {
            return 'Root node is already assigned';
        }
    }
};
Tree.prototype.remove = function(data) {
    if(this.root.data === data) {
        this.root = null;
    }

    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        for(var i = 0; i < node.children.length; i++) {
            if(node.children[i].data === data) {
                node.children.splice(i, 1);
            } else {
                queue.push(node.children[i]);
            }
        }
    }
};
Tree.prototype.contains = function(data) {
    return this.findBFS(data) ? true : false;
};
Tree.prototype.findBFS = function(data) {
    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        if(node.data === data) {
            return node;
        }
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    return null;
};
Tree.prototype._preOrder = function(node, fn) {
    if(node) {
        if(fn) {
            fn(node);
        }
        for(var i = 0; i < node.children.length; i++) {
            this._preOrder(node.children[i], fn);
        }
    }
};
Tree.prototype._postOrder = function(node, fn) {
    if(node) {
        for(var i = 0; i < node.children.length; i++) {
            this._postOrder(node.children[i], fn);
        }
        if(fn) {
            fn(node);
        }
    }
};
Tree.prototype.traverseDFS = function(fn, method) {
    var current = this.root;
    if(method) {
        this['_' + method](current, fn);
    } else {
        this._preOrder(current, fn);
    }
};
Tree.prototype.traverseBFS = function(fn) {
    var queue = [this.root];
    while(queue.length) {
        var node = queue.shift();
        if(fn) {
            fn(node);
        }
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
};
Tree.prototype.print = function() {
    if(!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';
    while(queue.length) {
        var node = queue.shift();
        string += node.data.toString() + ' ';
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    console.log(string.slice(0, -2).trim());
};
Tree.prototype.printByLevel = function() {
    if(!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while(queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    console.log(string.trim());
};

var tree = new Tree();
tree.add('Генеральный директор');
tree.add('Финансовый директор', 'Генеральный директор');
tree.add('Главный бухгалтер', 'Генеральный директор');

tree.add('Бухгалтерия','Главный бухгалтер');
tree.add('Группа контроля учета реализации','Бухгалтерия');
tree.add('Группа учета затрат и финансирования прибыли','Бухгалтерия');

tree.add('Помощник руководителя', 'Генеральный директор');
tree.add('Исполнительный директор', 'Генеральный директор');
tree.add('Дирекция управления продуктивной политикой','Исполнительный директор');
tree.add('Департамент управления дилерскими продажами','Исполнительный директор');
tree.add('Отдел дилерских продаж','Исполнительный директор');
tree.add('Департамент материально-технического обеспечения','Исполнительный директор');


tree.add('Отдел оптовых продаж','Департамент управления дилерскими продажами');
tree.add('Отдел развития партнерской сети','Департамент управления дилерскими продажами');

tree.add('Отдел доставок','Департамент материально-технического обеспечения');
tree.add('Отдел закупок','Департамент материально-технического обеспечения');
tree.add('Отдел обработки документов','Департамент материально-технического обеспечения');


tree.add('Отдел логистики','Исполнительный директор');
tree.add('Отдел измерительно техники','Исполнительный директор');
tree.add('Помощник руководителя', 'Исполнительный директор');


tree.add('Административный директор', 'Генеральный директор');
tree.add('Комерческий директор', 'Генеральный директор');
tree.add('Служба охраны труда', 'Генеральный директор');
tree.add('Технический департамент', 'Генеральный директор');
tree.add('Департамент маркетинга', 'Генеральный директор');
tree.add('Отдел маркетинга','Департамент маркетинга');
tree.add('Отдел корпоротивных коммуникаций и PR','Департамент маркетинга');


tree.add('Отдел по договорной и претензионной работе', 'Генеральный директор');
tree.add('Отдел по работе с персоналом', 'Генеральный директор');
tree.add('Административно-хозяйственный департамент', 'Генеральный директор');
tree.add('Секретариат','Административно-хозяйственный департамент');

tree.add('Отдел сопровождения бизнес-операций', 'Генеральный директор');
tree.add('Складской департамент', 'Генеральный директор');

tree.add('Финансовый департамент', 'Финансовый директор');
tree.add('Планово-экономический отдел','Финансовый департамент');
tree.add('Казначейство','Финансовый департамент');

tree.add('Отдел документального процессинга', 'Финансовый директор');

//tree.add('cfo', 'ceo');
//tree.add('accountant', 'cfo');
//tree.add('cmo', 'ceo');

tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
//console.log('tree contains dev1 is true:', tree.contains('dev1')); // => true
//console.log('tree contains dev4 is false:', tree.contains('dev4')); // => false
//console.log('--- BFS');
//tree.traverseBFS(function(node) { console.log(node.data); }); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
//console.log('--- DFS preOrder');
//tree.traverseDFS(function(node) { console.log(node.data); }, 'preOrder'); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
//console.log('--- DFS postOrder');
//tree.traverseDFS(function(node) { console.log(node.data); }, 'postOrder'); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
//tree.remove('cmo');
//tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
//tree.remove('cfo');
//tree.print(); // => ceo | cto | dev1 dev2 dev3
