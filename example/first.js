const SymbolTree  = require('symbol-tree');
const tree = new SymbolTree();

let parent = {};
let a = {depart: 'Ген. дир.'}; // or `new Whatever()`
let b = {depart: 'Бухгалтерия'};
let c = {depart: 'Главный бухгалтер'};
let d = {depart: 'Группа контроля учета реализации'};
let e = {depart: 'Финансовый директор'};
let f = {depart: 'Исполнительный директор'};
let g = {depart: 'Группа учета затрат и финансирования прибыли'};
let i = {depart: 'Помощник руководителя'};

tree.prependChild(parent, a); // insert a as the first child
// tree.appendChild(parent,c ); // insert c as the last child
// tree.insertAfter(a, b); // insert b after a, it now has the same parent as a
tree.insertAfter(a, c); // insert c after a, it now has the same parent as a
tree.insertAfter(a, e); // insert e after a, it now has the same parent as a
tree.insertAfter(a, f); // insert f after a, it now has the same parent as a
tree.insertAfter(a, i); // insert i after a, it now has the same parent as a
tree.insertAfter(c, b); // insert g after b, it now has the same parent as a
tree.insertAfter(b, d); // insert e after b, it now has the same parent as a
tree.insertAfter(b, g); // insert g after b, it now has the same parent as a


// console.log(tree.firstChild(parent) === a);
// console.log(tree.nextSibling(tree.firstChild(parent)) === b);
// console.log(tree.lastChild(parent) === c);

let grandparent = {};
tree.prependChild(grandparent, parent);
console.log(tree.firstChild(tree.firstChild(grandparent)) === a);
console.log('FIRST', tree.firstChild(parent));
console.log('LAST', tree.lastChild(parent));
console.log('PREVIOUS', tree.previousSibling (f));
// tree.add('Генеральный директор');
// tree.add('Финансовый директор', 'Генеральный директор');
// tree.add('Главный бухгалтер', 'Генеральный директор');
//
// tree.add('Бухгалтерия','Главный бухгалтер');
// tree.add('Группа контроля учета реализации','Бухгалтерия');
// tree.add('Группа учета затрат и финансирования прибыли','Бухгалтерия');
//
// tree.add('Помощник руководителя', 'Генеральный директор');
// tree.add('Исполнительный директор', 'Генеральный директор');
// tree.add('Дирекция управления продуктивной политикой','Исполнительный директор');
// tree.add('Департамент управления дилерскими продажами','Исполнительный директор');
// tree.add('Отдел дилерских продаж','Исполнительный директор');
// tree.add('Департамент материально-технического обеспечения','Исполнительный директор');
//
//
// tree.add('Отдел оптовых продаж','Департамент управления дилерскими продажами');
// tree.add('Отдел развития партнерской сети','Департамент управления дилерскими продажами');
//
// tree.add('Отдел доставок','Департамент материально-технического обеспечения');
// tree.add('Отдел закупок','Департамент материально-технического обеспечения');
// tree.add('Отдел обработки документов','Департамент материально-технического обеспечения');
//
//
// tree.add('Отдел логистики','Исполнительный директор');
// tree.add('Отдел измерительно техники','Исполнительный директор');
// tree.add('Помощник руководителя', 'Исполнительный директор');
//
//
// tree.add('Административный директор', 'Генеральный директор');
// tree.add('Комерческий директор', 'Генеральный директор');
// tree.add('Служба охраны труда', 'Генеральный директор');
// tree.add('Технический департамент', 'Генеральный директор');
// tree.add('Департамент маркетинга', 'Генеральный директор');
// tree.add('Отдел маркетинга','Департамент маркетинга');
// tree.add('Отдел корпоротивных коммуникаций и PR','Департамент маркетинга');
//
//
// tree.add('Отдел по договорной и претензионной работе', 'Генеральный директор');
// tree.add('Отдел по работе с персоналом', 'Генеральный директор');
// tree.add('Административно-хозяйственный департамент', 'Генеральный директор');
// tree.add('Секретариат','Административно-хозяйственный департамент');
//
// tree.add('Отдел сопровождения бизнес-операций', 'Генеральный директор');
// tree.add('Складской департамент', 'Генеральный директор');
//
// tree.add('Финансовый департамент', 'Финансовый директор');
// tree.add('Планово-экономический отдел','Финансовый департамент');
// tree.add('Казначейство','Финансовый департамент');
//
// tree.add('Отдел документального процессинга', 'Финансовый директор');
// tree.add('ceo');
// tree.add('cto', 'ceo');
// tree.add('dev1', 'cto');
// tree.add('dev2', 'cto');
// tree.add('dev3', 'cto');
// tree.add('cfo', 'ceo');
// tree.add('accountant', 'cfo');
// tree.add('cmo', 'ceo');
//
// tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
// tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
// console.log('tree contains dev1 is true:', tree.contains('dev1')); // => true
// console.log('tree contains dev4 is false:', tree.contains('dev4')); // => false
// console.log('--- BFS');
// tree.traverseBFS(function(node) { console.log(node.data); }); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
// console.log('--- DFS preOrder');
// tree.traverseDFS(function(node) { console.log(node.data); }, 'preOrder'); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
// console.log('--- DFS postOrder');
// tree.traverseDFS(function(node) { console.log(node.data); }, 'postOrder'); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
// tree.remove('cmo');
// tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
// tree.remove('cfo');
// tree.print(); // => ceo | cto | dev1 dev2 dev3
