var bodyDom = document.body;

function createAppHeader() {
  var headerDom = createNewElement('header', '', bodyDom);
  var headerContainerDom = createNewElement('div', {class : 'head-container'}, headerDom);
  var headerLogoDom = createNewElement('div', {class : 'head-logo'}, headerContainerDom);
  var headerContentDom = createNewElement('div', {class : 'head-content'}, headerContainerDom);
  createNewElement('h1', {textNode: 'Dynamic Form Builder'}, headerContentDom);
  var logoHrefDom = createNewElement('a', {href : '#'}, headerLogoDom);
  createNewElement('img', {src : '/images/idea-logo.png'}, logoHrefDom);
}
createAppHeader();  // setting up header

function createBodyContent() {
  var mainContainerDom = createNewElement('div', {class: 'form-container'}, bodyDom);
  var leftSideBarDom = createNewElement('div', {class: 'form-left-side-bar'}, mainContainerDom);
  var mainContentDom = createNewElement('div', {class: 'form-content'}, mainContainerDom);

  var ulDom = createNewElement('ul', '', leftSideBarDom);
  var oItemList = [
    { 'liName': 'Form Elements', 'liId': 'EleLi' },
    { 'liName': 'Text', 'liId': 'textLi' },
    { 'liName': 'Text Area', 'liId': 'textAreaLi' },
    { 'liName': 'Select', 'liId': 'selectLi' },
    { 'liName': 'Checkbox', 'liId': 'checkboxLi' },
    { 'liName': 'Radio', 'liId': 'radioLi' }
  ];
  for (var i = 0; i < oItemList.length; i++) {
    var listRow = oItemList[i];
    var liDom;
    if (listRow.liId === 'EleLi') {
      liDom = createNewElement('li', {class: 'li-head', id : listRow.liId, textNode: listRow.liName}, ulDom);
    } else {
      liDom = createNewElement('li', {id : listRow.liId, textNode: listRow.liName}, ulDom);
      createNewElement('i', {class : 'fa fa-plus', title: 'Add a Row'}, liDom);
    }
  }
  createForm(mainContentDom); // setting up footer
  createNav(mainContentDom); // setting up footer
  createAppFooter(mainContentDom); // setting up footer
  createModal(mainContentDom); // setting up modal
}
createBodyContent();

function createForm(mainContentDom) {
  var formDom = createNewElement('form', {id : 'formBuilder', name: 'formBuilder', onsubmit: 'event.preventDefault();'}, mainContentDom);
  var formHeadDivDom = createNewElement('div', {class: 'form-head-div'}, formDom);
  var formHeadFieldSetDom = createNewElement('fieldset', {class: 'form-head-fieldset'}, formHeadDivDom);
  createNewElement('legend', {textNode: 'Form Details'}, formHeadFieldSetDom);
  createNewElement('input', {type: 'text', class: 'form-head-input', placeholder: 'Form Name'}, formHeadFieldSetDom);
  createNewElement('textarea', {class: 'form-head-textarea', placeholder: 'Form Description'}, formHeadFieldSetDom);
  createNewElement('button', {id: 'submitForm', class: 'submit-button', textNode: 'Submit', title: 'Submit Form'}, formDom);
  elementShowHide(0, 0);  // hide convert button once created
}

function createNav() {
  var formDom = getElementById('formBuilder');
  var convertToJsonNavDom = createNewElement('nav', {class: 'float-convert-btn'}, formDom);
  var convertBtnDom = createNewElement('button', {id: 'convertToJson', class: 'convert-button', textNode: 'Convert to JSON', onclick: 'convertHtmlToJson();', title: 'Download Form as JSON'}, convertToJsonNavDom);
  createNewElement('i', {class: 'fa fa-download'}, convertBtnDom);
}
function createAppFooter(mainContentDom) {
  var footerDom = createNewElement('footer', '', mainContentDom);
  var footerContentDom = createNewElement('div', {textNode: 'Copyright 2017, Ideas2IT Technologies Private Limited'}, footerDom);
  var iCopyrightDom = createNewElement('i', {class: 'fa fa-copyright'});
  footerContentDom.insertBefore(iCopyrightDom, footerContentDom.firstChild);
}

function createModal(mainContentDom) {
  var modalMainDom = createNewElement('div', {class: 'modal'}, mainContentDom);     // setting up modal
  var modalContentDom = createNewElement('div', {class: 'modal-content'}, modalMainDom);
  var modalHeaderDom = createNewElement('div', {class: 'modal-header'}, modalContentDom);
  var modalHeaderSpanDom = createNewElement('span', {class: 'dismiss'}, modalHeaderDom);
  createNewElement('i', {class: 'fa fa-times', title: 'Close Modal'}, modalHeaderSpanDom);
  createNewElement('h2', {textNode: 'Input Parameters'}, modalHeaderDom);
  createNewElement('div', {class: 'modal-body'} , modalContentDom);
}

var modal = querySelector('.modal');
var modalSpan = querySelector('.dismiss');

// once clicked the close icon hide the modal
modalSpan.onclick = function() {
  modal.style.display = 'none';
};

// by clicking outside the modal close it
window.onclick = function(event) {
  if (event.target.className === 'form-content' || event.target.className === 'form-left-side-bar') {
    modal.style.display = 'none';
  }
};

function createNewElement(eleName, oAttribute, parentEle) {
  var ele = document.createElement(eleName);
  if (oAttribute) {
    for (var attr in oAttribute) {
      var attrValue = oAttribute[attr];
      if (attr === 'textNode') {
        ele.appendChild(document.createTextNode(attrValue));
      } else {
        ele.setAttribute(attr, attrValue);
      }
    }
  }
  if (parentEle) {
    parentEle.appendChild(ele);
  }
  return ele;
}

var formElementCount = 0;
function generateInput(labelName, element, eleClass, eleType) {
  formElementCount++;
  var oAttribute = {};
  if (eleClass) {
    oAttribute.class = eleClass;
  }
  if (eleType) {
    oAttribute.type = eleType;
  }

  var mainDivDom = createNewElement('div', {class: 'main-div-align', onmouseover: 'mouseAction(1, '+formElementCount+');', onmouseout: 'mouseAction(0, '+formElementCount+');'});

  var labelDivDom = createNewElement('div', {class: 'align-div-20 margin-top-5'}, mainDivDom);
  createNewElement('label', {textNode: labelName}, labelDivDom);

  var inputDivDom = createNewElement('div', {class: 'align-div-70'}, mainDivDom);

  if (labelName === 'Radio') {
    var yesLabelDom = createNewElement('label', {textNode: 'Yes'}, inputDivDom);
    createNewElement(element, {name: 'radio', type: eleType, value: 'yes'}, yesLabelDom);
    var noLabelDom = createNewElement('label', {textNode: 'No'}, inputDivDom);
    createNewElement(element, {name: 'radio', type: eleType, value: 'no'}, noLabelDom);
  } else {
    var inputDom = createNewElement(element, oAttribute, inputDivDom);
    if (element === 'select') {
      var aDefOption = ['Test', 'Test 2', 'Test 3'];
      addSelectOption(inputDom, aDefOption);
    }
  }

  var iconDivDom = createNewElement('div', {id : 'icon-div-'+formElementCount, class: 'align-div-10 margin-top-5'}, mainDivDom);
  createNewElement('i', {class: 'fa fa-pencil-square-o', onclick: 'editRow(event);', title: 'Edit Row'}, iconDivDom);
  createNewElement('i', {class: 'fa fa-trash-o', onclick: 'delRow(event);', title: 'Delete Row'}, iconDivDom);

  var formDom = getElementById('formBuilder');
  var submitBtnDom = getElementById('submitForm');
  formDom.insertBefore(mainDivDom, submitBtnDom);
  elementShowHide(1, 0);
  elementShowHide(0, formElementCount);
}

function getElementById(id) {
  return document.getElementById(id);
}

function createTextNode(text, element) {
  element.appendChild(document.createTextNode(text));
}

function querySelector(selector) {
  return document.querySelector(selector);
}

getElementById('textLi').onclick = function() {
  generateInput('Name', 'input', 'input-text', 'text');
};

getElementById('textAreaLi').onclick = function() {
  generateInput('Textarea', 'textarea', 'input-textarea');
};

getElementById('selectLi').onclick = function() {
  generateInput('Select', 'select', 'input-select');
};

getElementById('checkboxLi').onclick = function() {
  generateInput('Checkbox', 'input', '', 'checkbox');
};

getElementById('radioLi').onclick = function() {
  generateInput('Radio', 'input', '', 'radio');
};

function addSelectOption(selectDom, aOption) {
  while (selectDom.hasChildNodes()) {
    selectDom.removeChild(selectDom.lastChild);
  }
  for (var i = 0; i < aOption.length; i++) {
    var selectVal = aOption[i];
    var selectOption = createNewElement('option',{value: selectVal}, selectDom);
    selectOption.text = selectVal;
  }
}

function editRow(evt) {
  var modalBodyDom = querySelector('.modal-body');
  // to remove all previous node form modal body
  while (modalBodyDom.hasChildNodes()) {
    modalBodyDom.removeChild(modalBodyDom.lastChild);
  }

  // get event origin to set id, To edit that row parameters
  var eventOriginDom = evt.target;
  eventOriginDom.setAttribute('id', 'clickedIcon');

  // to get which input type in that row
  var rowType = eventOriginDom.parentNode.previousSibling.firstChild.type;

  var aModalInputParameter = [];
  // set radio button parameters to edit
  if (typeof rowType === 'undefined') {
    aModalInputParameter = [
      {labelText: 'Label', inputId: 'lbl'},
      {labelText: 'ID 1', inputId: 'id1'},
      {labelText: 'Class 1', inputId: 'cls1'},
      {labelText: 'Option 1', inputId: 'opt1'},
      {labelText: 'Name 1', inputId: 'nam1'},
      {labelText: 'ID 2', inputId: 'id2'},
      {labelText: 'Class 2', inputId: 'cls2'},
      {labelText: 'Option 2', inputId: 'opt2'},
      {labelText: 'Name 2', inputId: 'nam2'}
    ];
  } else {
    // set other input parametere to edit
    aModalInputParameter = [
      {labelText: 'Label', inputId: 'lbl'},
      {labelText: 'Class', inputId: 'cls'},
      {labelText: 'ID', inputId: 'id'},
      {labelText: 'Name', inputId: 'nam'}
    ];

    if (rowType === 'text' || rowType === 'textarea') {
      var placeHoldParam = {labelText: 'Placeholder', inputId: 'plceHl'};
      aModalInputParameter.push(placeHoldParam);
    }

    if (rowType === 'select-one') {
      var selOptionParam = {labelText: 'Options', inputId: 'opt'};
      aModalInputParameter.push(selOptionParam);
    }
  }
  // setting up that input parameters in modal body
  for (var i = 0; i < aModalInputParameter.length; i++) {
    var inputParamRow = aModalInputParameter[i];
    var modalMainDiv = createNewElement('div', {class: 'mod-main-div'}, modalBodyDom);
    var modalLabelDiv = createNewElement('div', {class: 'mod-div-15'}, modalMainDiv);
    createNewElement('label', {textNode : inputParamRow.labelText}, modalLabelDiv);

    var modalInputDiv = createNewElement('div', {class: 'mod-div-85'}, modalMainDiv);
    createNewElement('input', {class: 'input-text-modal',id: inputParamRow.inputId, type: 'text'}, modalInputDiv);
  }
  createNewElement('button', {class: 'change-button', textNode: 'Save', onclick: 'changeParameters();'}, modalBodyDom);
  modal.style.display = 'block';
}

function changeParameters() {
  var iOriginDom = getElementById('clickedIcon');  // get the icon clicked to edit that row
  iOriginDom.removeAttribute('id');  // unset the id after getting the clicked icon dom
  var destination = iOriginDom.parentNode.previousSibling;  // get the input element node
  var destLength = destination.childNodes.length;
  var row = '';
  var lablRow = '';

  if (destLength === 1) {  // updating other then radio by given modal input ID
    var aModalInputId = ['lbl', 'cls', 'id', 'nam'];
    row = destination.childNodes[0];
    lablRow = iOriginDom.parentNode.previousSibling.previousSibling.childNodes[0];
    if (row.type == 'text' || row.type == 'textarea') {
      aModalInputId.push('plceHl');
    } else if (row.type == 'select-one') {
      aModalInputId.push('opt');
    }
    for (var j = 0; j < aModalInputId.length; j++) {
      var newVal = getElementById(aModalInputId[j]);
      var newInputVal = newVal.value;
      if (newInputVal) {
        switch (aModalInputId[j]) {
          case 'lbl':
            while (lablRow.hasChildNodes()) {
              lablRow.removeChild(lablRow.lastChild);
            }
            createTextNode(newInputVal, lablRow);
            break;
          case 'nam':
            row.name = newInputVal;
            break;
          case 'cls':
            row.className = row.className+' '+newInputVal;
            break;
          case 'id':
            row.id = newInputVal;
            break;
          case 'plceHl':
            row.placeholder = newInputVal;
            break;
          case 'opt':
            var aOption = newInputVal.split(',');
            addSelectOption(row, aOption);
            break;
          default:
            break;
        }
      }
    }
  } else if (destLength === 2) {  // updating other radio by given modal input ID
    var aModalRadioInputId = ['lbl', 'id1', 'id2', 'cls1', 'cls2', 'opt1', 'opt2', 'nam1', 'nam2'];
    var radioInput1 = destination.childNodes[0].childNodes[1];
    var radioInput2 = destination.childNodes[1].childNodes[1];
    var radioLabel1 = destination.childNodes[0].childNodes[0];
    var radioLabel2 = destination.childNodes[1].childNodes[0];
    lablRow = iOriginDom.parentNode.previousSibling.previousSibling.childNodes[0];
    for (var k = 0; k < aModalRadioInputId.length; k++) {
      var newRadVal = getElementById(aModalRadioInputId[k]);
      var newRadioInputValue = newRadVal.value;
      if (newRadioInputValue) {
        switch (aModalRadioInputId[k]) {
          case 'lbl':
            while (lablRow.hasChildNodes()) {
                lablRow.removeChild(lablRow.lastChild);
            }
            createTextNode(newRadioInputValue, lablRow);
            break;
          case 'nam1':
            radioInput1.name = newRadioInputValue;
            break;
          case 'nam2':
            radioInput2.name = newRadioInputValue;
            break;
          case 'cls1':
            radioInput1.className = radioInput1.className+' '+newRadioInputValue;
            break;
          case 'cls2':
            radioInput2.className = radioInput2.className+' '+newRadioInputValue;
            break;
          case 'id1':
            radioInput1.id = newRadioInputValue;
            break;
          case 'id2':
            radioInput2.id = newRadioInputValue;
            break;
          case 'opt1':
            radioLabel1.nodeValue = radioInput1.value = newRadioInputValue;
            break;
          case 'opt2':
            radioLabel2.nodeValue = radioInput2.value = newRadioInputValue;
            break;
          default:
            break;
        }
      }
    }
  }
  modal.style.display = 'none';
}

function delRow(evt) {
  evt.target.parentNode.parentNode.remove();
  var myForm = getElementById('formBuilder');
  if (myForm.childNodes.length === 3) {
    elementShowHide(0, 0);
  }
}

function convertHtmlToJson() {
  var myForm = getElementById('formBuilder');
  var aResult = [];
  for (var i = 0; i < myForm.length; i++) {
    var formRow = myForm[i];
    if (formRow.id === 'convertToJson' || formRow.className === 'form-head-fieldset') {
      continue;
    }
    if (formRow.className === 'form-head-input') {
      aResult.push({'name': formRow.value});
      continue;
    }
    if (formRow.className === 'form-head-textarea') {
      aResult.push({'desc': formRow.value});
      continue;
    }
    var labelVal;
    if (formRow.className !== 'submit-button') {
      if (formRow.type === 'radio') {
        labelVal = formRow.parentNode.parentNode.previousSibling.childNodes[0].innerText;
      } else {
        labelVal = formRow.parentNode.previousSibling.childNodes[0].innerText;
      }
    }
    var result = {
      'label': labelVal,
      'id': formRow.id,
      'class': formRow.className,
      'name': formRow.name,
      'placeholder': formRow.placeholder,
      'type': formRow.type,
      'value': formRow.value
    };
    aResult.push(result);
  }
  var jsonData = JSON.stringify(aResult, null, 4);
  // download converted json as a file
  var downloadJsonDom = createNewElement('a', {download: 'form-builder.json', href: 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData)}, bodyDom);
  downloadJsonDom.style.display = 'none';
  downloadJsonDom.click();
  bodyDom.removeChild(downloadJsonDom);
}

function elementShowHide(condition, formElementCount) {
  var id = formElementCount ? 'icon-div-'+formElementCount : 'submitForm';
  getElementById(id).style.display = condition ? 'inline-block' : 'none';
}

function mouseAction(condition, index) {
  getElementById('icon-div-'+index).style.display = condition ? 'inline-block' : 'none';
}
