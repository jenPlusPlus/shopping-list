// phase one

// The input field should be cleared out after the item has been successfully submitted.

var submitButton = $('.grocery-list-form--submit');
submitButton.on('click', addToList);
submitButton.on('click', clearInput);


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
  list.prepend(`<li>${item}: ${quantity}</li>`);
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
}
