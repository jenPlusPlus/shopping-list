// phase three

// There is edit functionality


var submitButton = $('.grocery-list-form--submit');
submitButton.attr('disabled', true);
submitButton.on('click', addToList);
submitButton.on('click', clearInput);

var itemInputBox = $('.grocery-list-form--item');
itemInputBox.on('input', enableSubmit);

var quantityInputBox = $('.grocery-list-form--quantity');
quantityInputBox.on('input', enableSubmit);


function getList() {
  var list = $('.grocery-list');
  return list;
}

function getItem() {
  var item = $('.grocery-list-form--item').val();
  return item;
}

function getQuantity() {
  var quantity = $('.grocery-list-form--quantity').val();
  return quantity;
}

function createElement(list, item, quantity) {
  var groceryItem = `<li class="grocery-list-item" contenteditable='true'>${item}: ${quantity}<button class="delete">Delete</button></li>`
  list.prepend(groceryItem);
  addDeleteListener(groceryItem);
}

function addToList(e) {
  e.preventDefault();
  var list = getList();
  var item = getItem();
  var quantity = getQuantity();
  createElement(list, item, quantity);
}

function clearInput(e) {
  e.preventDefault();

  var itemInput = $('.grocery-list-form--item');
  itemInput.val('');

  var quantityInput = $('.grocery-list-form--quantity');
  quantityInput.val('');

  disableSubmit();
  itemInput.focus();
}

function enableSubmit(e) {
  e.preventDefault();
  var itemInput = getItem();
  var quantityInput = getQuantity();
  if(itemInput != '' && quantityInput != '') {
    if(validateQuantity() == false) {
      submitButton.attr('disabled', false);
    }
  }
}

function disableSubmit() {
  submitButton.attr('disabled', true);
}

function validateQuantity() {
  var quantity = getQuantity();
  var quantityInt = parseInt(quantity, 10);
    return isNaN(quantityInt);
}

function addDeleteListener(groceryItem) {
  var deleteButton = $('.delete').first();
  deleteButton.on('click', deleteItem);
}

function deleteItem(e){
  e.preventDefault();
  var item = e.target.closest('.grocery-list-item');
  item.remove();
}
