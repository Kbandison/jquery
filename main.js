'use strict';

let div = $('<div>Click Here!</div>');
let page = $('body')
let list = $('<ul></ul>');
let input = $('#myInput');

page.append(div);
page.append(list);

div.on('click', e => {
  e.preventDefault();

  let li = $(`<li>${input.val()}</li>`);
  list.append(li);
  input.val('');
})