var form;
var formioInfos;
var builder;
window.onload = function(){    
    var formElement = document.getElementById('formio');
    var builderElement = document.getElementById('builder');

    var jsonTextArea = document.getElementById('json');
    var applyJsonActionBtn = document.getElementById("apply-json-action-btn");
    var copyJsonActionBtn = document.getElementById("copy-json-action-btn");
    var saveJsonActionBtn = document.getElementById("save-json-action-btn");
    var clearJsonActionBtn = document.getElementById("clear-json-action-btn");
    var resetJsonActionBtn = document.getElementById("reset-json-action-btn");
    var formSelect = document.getElementById('form-select');

    var onReady = function() {
        builder.instance.on('change', onBuild);
    };
      
    var setDisplay = function(display) {
        builder.setDisplay(display).then(onReady);
    };
    
    var onForm = function(form) {
        window.form = form;
        form.on('render', function() {
            //...
        });
        form.on('submit', function() {
            //...
        });
    };
      
    var onBuild = function(build) {
        jsonTextArea.value = (JSON.stringify(builder.instance.schema, null, 3));
        if(form){
            form.setForm(builder.instance.form);
        }
        else{
            Formio.createForm(formElement, builder.instance.form).then(onForm);
        }
    };
    /**START action buttons**/
    applyJsonActionBtn.addEventListener("click", function(){
        var obj = JSON.parse(jsonTextArea.value);
        form.setForm(obj);
        builder.instance.setForm(obj);
    });
    copyJsonActionBtn.addEventListener("click", function(){
        jsonTextArea.select();
        document.execCommand("copy")
    });
    saveJsonActionBtn.addEventListener("click", function(){
        localStorage.setItem("formioPlaygroundJson", jsonTextArea.value);
    });
    clearJsonActionBtn.addEventListener("click", function(){
        localStorage.removeItem("formioPlaygroundJson");
    });

    resetJsonActionBtn.addEventListener("click", function(){
        var obj = {
            "display": "form",
            "components": []
        }
        jsonTextArea.value = JSON.stringify(obj, null, 3);
    });
    /**END action buttons**/
    var storedFormioPlaygroundJson = localStorage.getItem("formioPlaygroundJson");
    if(storedFormioPlaygroundJson){
        formioInfos = JSON.parse(localStorage.getItem("formioPlaygroundJson"));
        if(!formioInfos.display){
            formioInfos.display = "form" ;
        }
        jsonTextArea.value = storedFormioPlaygroundJson;
    }
    else{
        formioInfos = {
            "display": "form",
            "components": []
        }
        jsonTextArea.value = JSON.stringify(formioInfos, null, 3);
    }
    
    
    builder = new Formio.FormBuilder(builderElement, formioInfos, {
        baseUrl: 'https://examples.form.io'
    });
    Formio.createForm(formElement, builder.instance.form).then(onForm);
    formSelect.value = formioInfos.display;  
    
    
    // Handle the form selection.
    
    formSelect.addEventListener("change", function() {
      setDisplay(this.value);
    });
    
    builder.instance.ready.then(onReady);
    
}