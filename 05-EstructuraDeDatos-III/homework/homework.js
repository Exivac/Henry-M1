'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(val) { 
  // Create the root of the tree with the given value and left & right entries
  this.value = val
  this.left = null
  this.right = null

  this.gSize = 1
}

BinarySearchTree.prototype.insert = function(val){
  let node = new BinarySearchTree(val)
  
  if (val <= this.value && this.left == null){ //Create a new node in left side if val is less-than value
    this.left = node
    this.gSize++
    return

  } else if (val > this.value && this.right == null){ //Create new node in Right side if val is more-than value
    this.right = node
    this.gSize++
    return

  //vv If neither of the above, rerun the insertion with the corresponding side vv//

  } else if (val <= this.value && this.left !== null){ //Less-than case
    return this.left.insert(val)

  } else if (val > this.value && this.right !== null){ //More-than case
    return this.right.insert(val)
  }
  //^^ If neither of the above, rerun the insertion with the corresponding side ^^//
}

BinarySearchTree.prototype.contains = function(val){
  if (this.value == val) return true
  
  if (val <= this.value && this.left !== null){
    return this.left.contains(val)
  } else if (val > this.value && this.right !== null){
    return this.right.contains(val)
  }
  return false
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){

  
  if (order === 'pre-order'){
    cb(this.value)
    if(this.left)this.left.depthFirstForEach(cb, order)
    if(this.right)this.right.depthFirstForEach(cb, order)
  }
  
  if (order === 'post-order'){
    if(this.left)this.left.depthFirstForEach(cb, order)
    if(this.right)this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  
  if (!order || order === 'in-order'){
    if(this.left)this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right)this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
  cb (this.value)
  if (this.left) arr.push(this.left)
  if(this.right) arr.push(this.right)
  if (arr.length) arr.shift().breadthFirstForEach(cb, arr)
}

BinarySearchTree.prototype.size = function(){
  return this.gSize
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
