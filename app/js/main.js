    try {
        var body = document.body;
        var parentDiv = document.createElement("div");
        var firstChildDiv = document.createElement("div");
        var secondChildDiv = document.createElement("div");

        parentDiv.className = 'form-container';
        firstChildDiv.className = 'form-left-side-bar';
        secondChildDiv.className = 'form-content';

        var leftSideBarUl = document.createElement('ul');
        var aLiText = ["Text", "Text Area", "Select", "Checkbox", "Radio"];
        var aLiId = ["textLi", "textAreaLi", "selectLi", "checkboxLi", "radioLi"];

        for (var i = 0; i < aLiId.length; i++) {
            var newLeftSideBarLi = document.createElement('li');
            newLeftSideBarLi.setAttribute("id", aLiId[i]);
            var newLeftSideBarLiText = document.createTextNode(aLiText[i]);
            var iPlus = document.createElement("i");
            iPlus.setAttribute('class', 'fa fa-plus');
            newLeftSideBarLi.appendChild(newLeftSideBarLiText);
            newLeftSideBarLi.appendChild(iPlus);
            leftSideBarUl.appendChild(newLeftSideBarLi);
        }

        firstChildDiv.appendChild(leftSideBarUl);
        parentDiv.appendChild(firstChildDiv);
        parentDiv.appendChild(secondChildDiv);
        body.appendChild(parentDiv);

        var formEle = document.createElement("form");
        formEle.id = 'newFormBuilder';
        secondChildDiv.appendChild(formEle);

        var convertBtn = document.createElement('button');
        convertBtn.appendChild(document.createTextNode('Convert to JSON'));
        var iDownload = document.createElement('i');
        iDownload.setAttribute('class', 'fa fa-download');
        convertBtn.appendChild(iDownload);
        convertBtn.setAttribute('id', 'jsonConvert');
        convertBtn.setAttribute('class', 'convert-button');
        convertBtn.setAttribute('onclick', 'convertHtmlToJson();');
        secondChildDiv.appendChild(convertBtn);
        toggleConvertButton(0);

        // create modal
        var modalContentDiv = document.createElement('div');
        modalContentDiv.className = 'modal-content';

        var modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.className = 'modal-header';
        var modHeadSpan = document.createElement('span');
        modHeadSpan.className = 'dismiss';
        modHeadSpan.innerHTML = '&times;';
        var modFootH3 = document.createElement('h2');
        modFootH3.appendChild(document.createTextNode('Input Parameters'));
        modalHeaderDiv.appendChild(modHeadSpan);
        modalHeaderDiv.appendChild(modFootH3);
        modalContentDiv.appendChild(modalHeaderDiv);

        var modalBodyDiv = document.createElement('div');
        modalBodyDiv.className = 'modal-body';
        modalContentDiv.appendChild(modalBodyDiv);

        secondChildDiv.appendChild(modalContentDiv);

        var modal = document.querySelector('.modal-content');
        var rightSideContent = document.querySelector('.form-content');
        var span = document.querySelector('.dismiss');
    } catch (e) {
        console.log(e);
    }

    document.querySelector('#textLi').onclick = function() {
        try {
            mainDivEle = createNewDiv('inp', 'Name', 1);
            var newLabelDiv = createNewDiv('inp', 'Name', 0);
            newLabelDiv.setAttribute('class', 'align-div-10 margin-top-5');
            var newLabel = document.createElement("label");
            var newLabelText = document.createTextNode('Name');
            newLabel.appendChild(newLabelText);
            newLabelDiv.appendChild(newLabel);

            var newInputDiv = createNewDiv('inp', 'Name', 0);
            newInputDiv.setAttribute('class', 'align-div-25');
            var inpEle = document.createElement("input");
            inpEle.setAttribute('class', 'input-text');
            inpEle.type = "text";
            newInputDiv.appendChild(inpEle);

            var newLablDiv = createNewDiv('inp', 'Name', 0);
            newLablDiv.setAttribute('class', 'align-div-65 margin-top-5');
            generateEditAndRemoveIcon(newLablDiv);

            mainDivEle.appendChild(newLabelDiv);
            mainDivEle.appendChild(newInputDiv);
            mainDivEle.appendChild(newLablDiv);

            formEle.appendChild(mainDivEle);
            toggleConvertButton(1);
        } catch (e) {
            console.log(e);
        }
    };

    document.querySelector('#textAreaLi').onclick = function() {
        try {
            mainDivEle = createNewDiv('txtAr', 'Textarea', 1);

            var newLabelDiv = createNewDiv('txtAr', 'Textarea', 0);
            newLabelDiv.setAttribute('class', 'align-div-10 margin-top-5');
            var newLabel = document.createElement("label");
            var newLabelText = document.createTextNode('Text Area');
            newLabel.appendChild(newLabelText);
            newLabelDiv.appendChild(newLabel);

            var newInputDiv = createNewDiv('txtAr', 'Textarea', 0);
            newInputDiv.setAttribute('class', 'align-div-25');
            var inpEle = document.createElement("textarea");
            inpEle.setAttribute('class', 'input-textarea');
            newInputDiv.appendChild(inpEle);

            var newLablDiv = createNewDiv('txtAr', 'Textarea', 0);
            newLablDiv.setAttribute('class', 'align-div-65 margin-top-5');
            generateEditAndRemoveIcon(newLablDiv);

            mainDivEle.appendChild(newLabelDiv);
            mainDivEle.appendChild(newInputDiv);
            mainDivEle.appendChild(newLablDiv);

            formEle.appendChild(mainDivEle);
            toggleConvertButton(1);
        } catch (e) {
            console.log(e);
        }
    };

    document.querySelector('#selectLi').onclick = function() {
        try {
            var aDefOption = ['Test', 'Test 2', 'Test 3'];

            mainDivEle = createNewDiv('sel', 'Select', 1);

            var newLabelDiv = createNewDiv('sel', 'Select', 0);
            newLabelDiv.setAttribute('class', 'align-div-10 margin-top-5');
            var newLabel = document.createElement("label");
            var newLabelText = document.createTextNode('Select');
            newLabel.appendChild(newLabelText);
            newLabelDiv.appendChild(newLabel);

            var newInputDiv = createNewDiv('sel', 'Select', 0);
            newInputDiv.setAttribute('class', 'align-div-25');
            var selEle = document.createElement("select");
            selEle.setAttribute('class', 'input-select');
            newInputDiv.appendChild(selEle);
            addSelectOption(selEle, aDefOption);

            var newLablDiv = createNewDiv('sel', 'Select', 0);
            newLablDiv.setAttribute('class', 'align-div-65 margin-top-5');
            generateEditAndRemoveIcon(newLablDiv);

            mainDivEle.appendChild(newLabelDiv);
            mainDivEle.appendChild(newInputDiv);
            mainDivEle.appendChild(newLablDiv);

            formEle.appendChild(mainDivEle);
            toggleConvertButton(1);
        } catch (e) {
            console.log(e);
        }
    };

    document.querySelector('#checkboxLi').onclick = function() {
        try {
            mainDivEle = createNewDiv('check', 'Checkbox', 1);

            var newLabelDiv = createNewDiv('check', 'Checkbox', 0);
            newLabelDiv.setAttribute('class', 'align-div-10 margin-top-5');
            var newLabel = document.createElement("label");
            var newLabelText = document.createTextNode('Checkbox');
            newLabel.appendChild(newLabelText);
            newLabelDiv.appendChild(newLabel);

            var newInputDiv = createNewDiv('check', 'Checkbox', 0);
            newInputDiv.setAttribute('class', 'align-div-25');
            var inpEle = document.createElement("input");
            inpEle.type = "checkbox";
            newInputDiv.appendChild(inpEle);

            var newLablDiv = createNewDiv('check', 'Checkbox', 0);
            newLablDiv.setAttribute('class', 'align-div-65 margin-top-5');
            generateEditAndRemoveIcon(newLablDiv);

            mainDivEle.appendChild(newLabelDiv);
            mainDivEle.appendChild(newInputDiv);
            mainDivEle.appendChild(newLablDiv);

            formEle.appendChild(mainDivEle);
            toggleConvertButton(1);
        } catch (e) {
            console.log(e);
        }
    };

    document.querySelector('#radioLi').onclick = function() {
        try {
            mainDivEle = createNewDiv('rad', 'Radio', 1);

            var newLabelDiv = createNewDiv('rad', 'Radio', 0);
            newLabelDiv.setAttribute('class', 'align-div-10 margin-top-5');
            var newLabel = document.createElement("label");
            var newLabelText = document.createTextNode('Radio');
            newLabel.appendChild(newLabelText);
            newLabelDiv.appendChild(newLabel);

            var newInputDiv = createNewDiv('rad', 'Radio', 0);
            newInputDiv.setAttribute('class', 'align-div-25');
            var radOneEle = addRadioButton('yes', 'Yes');
            var radTwoEle = addRadioButton('no', 'No');
            newInputDiv.appendChild(radOneEle);
            newInputDiv.appendChild(radTwoEle);

            var newLablDiv = createNewDiv('rad', 'Radio', 0);
            newLablDiv.setAttribute('class', 'align-div-65 margin-top-5');
            generateEditAndRemoveIcon(newLablDiv);

            mainDivEle.appendChild(newLabelDiv);
            mainDivEle.appendChild(newInputDiv);
            mainDivEle.appendChild(newLablDiv);

            formEle.appendChild(mainDivEle);
            toggleConvertButton(1);
        } catch (e) {
            console.log(e);
        }
    };


    span.onclick = function() {
        try {
            modal.style.display = "none";
        } catch (e) {
            console.log(e);
        }
    };

    window.onclick = function(event) {
        try {
            if (event.target.className == 'form-content' || event.target.className == 'form-left-side-bar') {
                modal.style.display = "none";
            }
        } catch (e) {
            console.log(e);
        }
    };

    function createNewDiv(idTxt, labelName, setDivClass) {
        try {
            var newDivEle = document.createElement("div");
            if (setDivClass === 1) {
                newDivEle.setAttribute('class', 'main-div-align');
            }
            return newDivEle;
        } catch (e) {
            console.log(e);
        }
    }

    function addSelectOption(selectElement, aOption) {
        try {
            while (selectElement.hasChildNodes()) {
                selectElement.removeChild(selectElement.lastChild);
            }
            for (var i = 0; i < aOption.length; i++) {
                var option = document.createElement("option");
                option.value = aOption[i];
                option.text = aOption[i];
                selectElement.appendChild(option);
            }
        } catch (e) {
            console.log(e);
        }
    }

    function addRadioButton(value, text) {
        try {
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "radio";
            radio.value = value;

            var label = document.createElement("label");
            label.appendChild(radio);
            label.appendChild(document.createTextNode(text));
            return label;
        } catch (e) {
            console.log(e);
        }
    }

    function generateEditAndRemoveIcon(element) {
        try {
            var iEdit = document.createElement("i");
            iEdit.setAttribute('class', 'fa fa-pencil-square-o');
            iEdit.setAttribute('onclick', 'editRow(event);');

            var iDel = document.createElement("i");
            iDel.setAttribute('class', 'fa fa-times');
            iDel.setAttribute('onclick', 'delRow(event);');

            element.appendChild(iEdit);
            element.appendChild(iDel);
        } catch (e) {
            console.log(e);
        }
    }

    function editRow(evt) {
        try {
            while (modalBodyDiv.hasChildNodes()) {
                modalBodyDiv.removeChild(modalBodyDiv.lastChild);
            }
            var eventOrigin = evt.target;
            eventOrigin.setAttribute('data-ref', 'current');

            var eleType = eventOrigin.parentNode.previousSibling.firstChild.type;
            if (typeof eleType === 'undefined') {
                eleType = 'radio';
            }

            var aModalLabelTxt = ['Label', 'Class', 'ID', 'Name'];
            var aModalInputId = ['lb', 'cl', 'id', 'na'];
            if (eleType === 'text' || eleType === 'textarea') {
                aModalLabelTxt.push('Placeholder');
                aModalInputId.push('pl');
            }
            if (eleType === 'select-one') {
                aModalLabelTxt.push('Options');
                aModalInputId.push('op');
            }
            if (eleType === 'radio') {
                aModalLabelTxt = ['Label', 'ID 1', 'ID 2', 'Class 1', 'Class 2', 'Option 1', 'Option 2', 'Name 1', 'Name 2'];
                aModalInputId = ['lb', 'id1', 'id2', 'cl1', 'cl2', 'op1', 'op2', 'na1', 'na2'];
            }
            for (var i = 0; i < aModalInputId.length; i++) {
                var modalMainDiv = document.createElement('div');
                modalMainDiv.setAttribute('class', 'mod-main-div');
                var modalLabelDiv = document.createElement('div');
                modalLabelDiv.setAttribute('class', 'mod-div-15');
                var modalLabel = document.createElement('label');
                modalLabel.appendChild(document.createTextNode(aModalLabelTxt[i]));
                modalLabelDiv.appendChild(modalLabel);

                var modalInputDiv = document.createElement('div');
                modalInputDiv.setAttribute('class', 'mod-div-85');
                var modalInput = document.createElement('input');
                modalInput.className = "input-text-modal";
                modalInput.type = "text";
                modalInput.id = aModalInputId[i];
                modalInputDiv.appendChild(modalInput);

                modalMainDiv.appendChild(modalLabelDiv);
                modalMainDiv.appendChild(modalInputDiv);
                modalBodyDiv.appendChild(modalMainDiv);
            }
            var changeBtn = document.createElement('button');
            changeBtn.appendChild(document.createTextNode('Save'));
            changeBtn.setAttribute('class', 'change-button');
            changeBtn.setAttribute('onclick', 'changeParameters();');
            modalBodyDiv.appendChild(changeBtn);
            modal.style.display = "block";
        } catch (e) {
            console.log(e);
        }
    }


    function changeParameters() {
        try {
            var editOrigin = document.getElementsByClassName('fa-pencil-square-o');
            var iOrigin = '';
            for (var i = 0; i < editOrigin.length; i++) {
                var dataRef = editOrigin[i].dataset.ref;
                if (typeof dataRef !== 'undefined' && dataRef === 'current') {
                    iOrigin = editOrigin[i];
                    editOrigin[i].dataset.ref = '';
                    break;
                }
            }
            var destination = iOrigin.parentNode.previousSibling;
            var destLength = destination.childNodes.length;

            var row = '';
            var lablRow = '';
            var radioRow1 = '';
            var radioRow2 = '';

            if (destLength === 1) {
                var aModalInputId = ['lb', 'cl', 'id', 'na'];
                row = destination.childNodes[0];
                lablRow = iOrigin.parentNode.previousSibling.previousSibling.childNodes[0];
                if (row.type == 'text' || row.type == 'textarea') {
                    aModalInputId.push('pl');
                } else if (row.type == 'select-one') {
                    aModalInputId.push('op');
                }
                for (var j = 0; j < aModalInputId.length; j++) {
                    var newVal = document.querySelector('#' + aModalInputId[j]);
                    var newOthVal = newVal.value;
                    if (newOthVal) {
                        switch (aModalInputId[j]) {
                            case 'lb':
                                while (lablRow.hasChildNodes()) {
                                    lablRow.removeChild(lablRow.lastChild);
                                }
                                lablRow.appendChild(document.createTextNode(newOthVal));
                                break;
                            case 'na':
                                row.name = newOthVal;
                                break;
                            case 'cl':
                                row.className = newOthVal;
                                break;
                            case 'id':
                                row.id = newOthVal;
                                break;
                            case 'pl':
                                row.placeholder = newOthVal;
                                break;
                            case 'op':
                                var aOption = newOthVal.split(',');
                                addSelectOption(row, aOption);
                                break;
                        }
                    }
                }
            } else if (destLength === 2) {
                var aModalRadId = ['lb', 'id1', 'id2', 'cl1', 'cl2', 'op1', 'op2', 'na1', 'na2'];
                var radInput1 = destination.childNodes[0].childNodes[0];
                var radInput2 = destination.childNodes[1].childNodes[0];
                var radLab1 = destination.childNodes[0].childNodes[1];
                var radLab2 = destination.childNodes[1].childNodes[1];
                lablRow = iOrigin.parentNode.previousSibling.previousSibling.childNodes[0];
                for (var k = 0; k < aModalRadId.length; k++) {
                    var newRadVal = document.querySelector('#' + aModalRadId[k]);
                    var newRadValue = newRadVal.value;
                    if (newRadValue) {
                        switch (aModalRadId[k]) {
                            case 'lb':
                                while (lablRow.hasChildNodes()) {
                                    lablRow.removeChild(lablRow.lastChild);
                                }
                                lablRow.appendChild(document.createTextNode(newRadValue));
                                break;
                            case 'na1':
                                radInput1.name = newRadValue;
                                break;
                            case 'na2':
                                radInput2.name = newRadValue;
                                break;
                            case 'cl1':
                                radInput1.className = newRadValue;
                                break;
                            case 'cl2':
                                radInput2.className = newRadValue;
                                break;
                            case 'id1':
                                radInput1.id = newRadValue;
                                break;
                            case 'id2':
                                radInput2.id = newRadValue;
                                break;
                            case 'op1':
                                radLab1.nodeValue = radInput1.value = newRadValue;
                                break;
                            case 'op2':
                                radLab2.nodeValue = radInput2.value = newRadValue;
                                break;
                        }
                    }
                }
            }
            modal.style.display = "none";
        } catch (e) {
            console.log(e);
        }
    }

    function delRow(evt) {
        try {
            var mainDivEle = evt.target.parentNode.parentNode;
            mainDivEle.remove();
            var myForm = document.querySelector('#newFormBuilder');
            if (myForm.hasChildNodes() === false) {
                toggleConvertButton(0);
            }
        } catch (e) {
            console.log(e);
        }
    }

    function convertHtmlToJson() {
        try {
            var myForm = document.querySelector('#newFormBuilder');
            var aResult = [];
            for (var i = 0; i < myForm.length; i++) {
                var result = {};
                if (myForm[i].type === 'radio') {
                    result.label = myForm[i].parentNode.parentNode.previousSibling.childNodes[0].innerText;
                } else {
                    result.label = myForm[i].parentNode.previousSibling.childNodes[0].innerText;
                }
                result.id = myForm[i].id;
                result.class = myForm[i].className;
                result.name = myForm[i].name;
                result.placeholder = myForm[i].placeholder;
                result.type = myForm[i].type;
                result.value = myForm[i].value;
                aResult.push(result);
            }
            aResult = JSON.stringify(aResult, null, 4);
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(aResult));
            element.setAttribute('download', 'form-builder.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } catch (e) {
            console.log(e.message);
        }
    }

    function toggleConvertButton(condition) {
        try {
            if (condition == 1) {
                convertBtn.style.display = 'block';
            } else {
                convertBtn.style.display = 'none';
            }
        } catch (e) {
            console.log(e.message);
        }
    }
