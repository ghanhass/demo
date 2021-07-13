var initialForm = {
    "display": "form",
    "components": [
       {
          "label": "Columns",
          "columns": [
             {
                "components": [
                   {
                      "label": "Columns",
                      "columns": [
                         {
                            "components": [
                               {
                                  "label": "HTML",
                                  "tag": "div",
                                  "attrs": [
                                     {
                                        "attr": "",
                                        "value": ""
                                     }
                                  ],
                                  "content": "<p>République Tunisienne</p>\n<p>Ministère de l'Enseignement Supérieur et de la Recherche Scientifique</p>\n<p class=\"blue\">Projet de Modernisation de l'Enseignement Supérieur en soutien à l'Employabilité</p>\n<p class=\"blue\">Projet de Modernisation de l'Enseignement Supérieur en soutien à l'Employabilité</p>",
                                  "refreshOnChange": false,
                                  "tableView": false,
                                  "key": "html2",
                                  "type": "htmlelement",
                                  "input": false,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "size": "md",
                            "width": 7
                         },
                         {
                            "components": [
                               {
                                  "label": "HTML",
                                  "tag": "div",
                                  "attrs": [
                                     {
                                        "attr": "",
                                        "value": ""
                                     }
                                  ],
                                  "content": "<img class=\"tn_logo\" src=\"https://i.imgur.com/SerOloG.png\">",
                                  "refreshOnChange": false,
                                  "tableView": false,
                                  "key": "html",
                                  "type": "htmlelement",
                                  "input": false,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "size": "md",
                            "width": 5
                         }
                      ],
                      "tableView": false,
                      "key": "columns1",
                      "type": "columns",
                      "input": false
                   },
                   {
                      "label": "Composante 3",
                      "labelPosition": "left-left",
                      "optionsLabelPosition": "right",
                      "customClass": "radio-composante3",
                      "inline": true,
                      "tableView": false,
                      "values": [
                         {
                            "label": "Volet 1",
                            "value": "volet1",
                            "shortcut": ""
                         },
                         {
                            "label": "Volet 2",
                            "value": "volet2",
                            "shortcut": ""
                         }
                      ],
                      "key": "radio1",
                      "type": "radio",
                      "input": true,
                      "hideOnChildrenHidden": false
                   },
                   {
                      "label": "Coordinateur",
                      "labelPosition": "left-left",
                      "tableView": true,
                      "key": "coordinateur",
                      "type": "textfield",
                      "input": true,
                      "hideOnChildrenHidden": false
                   },
                   {
                      "label": "Comité de Suivi",
                      "labelPosition": "left-left",
                      "tableView": true,
                      "key": "comiteDeSuivi",
                      "type": "textfield",
                      "input": true,
                      "hideOnChildrenHidden": false
                   },
                   {
                      "label": "Comité d'exécution",
                      "labelPosition": "left-left",
                      "tableView": true,
                      "key": "comiteDexecution",
                      "type": "textfield",
                      "input": true,
                      "hideOnChildrenHidden": false
                   }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0,
                "size": "sm"
             },
             {
                "components": [
                   {
                      "label": "TITRE DU PROJET",
                      "labelPosition": "left-left",
                      "tableView": true,
                      "key": "titreDuProjet",
                      "type": "textfield",
                      "input": true,
                      "hideOnChildrenHidden": false
                   }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0,
                "size": "sm"
             }
          ],
          "tableView": false,
          "key": "columns",
          "type": "columns",
          "input": false
       },
       {
          "label": "Présentation du projet",
          "autoExpand": false,
          "tableView": true,
          "key": "presentationDuProjet",
          "type": "textarea",
          "labelMargin": 1,
          "input": true
       },
       {
          "label": "Objectifs",
          "autoExpand": false,
          "tableView": true,
          "key": "objectifs",
          "type": "textarea",
          "input": true
       },
       {
          "label": "Méthodologie",
          "autoExpand": false,
          "tableView": true,
          "key": "methodologie",
          "type": "textarea",
          "input": true
       },
       {
          "label": "Livrables",
          "autoExpand": false,
          "tableView": true,
          "key": "livrables",
          "type": "textarea",
          "input": true
       },
       {
          "label": "HTML",
          "attrs": [
             {
                "attr": "",
                "value": ""
             }
          ],
          "content": "<style>\nimg.tn_logo{\n  width: auto;\n  height: 120px;\n  max-width: 100%;\n}\n\np.blue {\n    color: blue;\n    font-weight: 500;\n}\n\n.radio-composante3 .field-wrapper > div:last-child{\n    display:flex;\n    align-items: center;\n}\n\n.radio-composante3 .col-form-label{\n    padding:0;\n}\n\n.radio-composante3 .form-check-label{\n    display:flex;\n    align-items:center;\n}\n</style>",
          "refreshOnChange": false,
          "tableView": false,
          "key": "html1",
          "type": "htmlelement",
          "input": false
       }
    ]
 };
var form;
var formioInfos;
var builder;
window.addEventListener("load",function(){    
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
    var storedFormioPlaygroundJson = initialForm || localStorage.getItem("formioPlaygroundJson");
    if(storedFormioPlaygroundJson){
        formioInfos = initialForm || JSON.parse(localStorage.getItem("formioPlaygroundJson"));
        if(!formioInfos.display){
            formioInfos.display = "form" ;
        }
        jsonTextArea.value = JSON.stringify(storedFormioPlaygroundJson, null, 3);
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
    
})
