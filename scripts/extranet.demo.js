var meh = {
  "components": [
      {
          "key": "panel3",
          "input": false,
          "title": "Votre voiture",
          "theme": "danger",
          "components": [
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Adresse IP",
                  "key": "var-adresseIP",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "127.0.0.1",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:384",
                  "lockKey": true,
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "exharjr"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "port",
                  "key": "var-port",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "80",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:549",
                  "lockKey": true,
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "e2g4n9v"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "radio",
                  "label": "Type de la demande",
                  "key": "var-typeDemande",
                  "values": [
                      {
                          "value": "1",
                          "label": "L'achat d’une première voiture"
                      },
                      {
                          "value": "2",
                          "label": "L'achat d’une voiture supplémentaire"
                      },
                      {
                          "value": "3",
                          "label": "Une voiture de fonction"
                      }
                  ],
                  "defaultValue": "",
                  "protected": false,
                  "persistent": true,
                  "hidden": false,
                  "clearOnHide": true,
                  "validate": {
                      "required": true,
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "type": "radio",
                  "$$hashKey": "object:513",
                  "lockKey": true,
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "inline": true,
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "unique": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "fieldSet": false,
                  "id": "eudl3to"
              },
              {
                  "input": true,
                  "tableView": true,
                  "label": "Date de 1ère mise en circulation",
                  "key": "var-dateMiseCirculation",
                  "fields": {
                      "day": {
                          "type": "text",
                          "placeholder": "",
                          "required": false
                      },
                      "month": {
                          "type": "select",
                          "placeholder": "",
                          "required": false
                      },
                      "year": {
                          "type": "text",
                          "placeholder": "",
                          "required": false
                      }
                  },
                  "dayFirst": true,
                  "protected": false,
                  "persistent": true,
                  "hidden": false,
                  "clearOnHide": true,
                  "validate": {
                      "custom": "debugger;\nvar now= new Date();\nvar dateSaisie = new date(data['var-dateMiseCirculation']);\nif(dateSaisie.toISOString() < now.toISOString() && formContainer.data['var-age']<=30])\n{ valid = true\n}else{ valid = \"Veuillez vérifier la date saisie\"}",
                      "required": true,
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "type": "day",
                  "$$hashKey": "object:2176",
                  "lockKey": true,
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "unique": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "id": "eccbzjp"
              },
              {
                  "input": false,
                  "tableView": true,
                  "key": "columns10",
                  "columns": [
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "inputType": "text",
                                  "inputMask": "",
                                  "label": "",
                                  "key": "var-directionAgence",
                                  "placeholder": "",
                                  "prefix": "",
                                  "suffix": "",
                                  "multiple": false,
                                  "defaultValue": "Veuillez vous adresser à l'agence la plus proche",
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": false,
                                      "minLength": "",
                                      "maxLength": "",
                                      "pattern": "",
                                      "custom": "if(data['var-age']<=30){\nvalid=true;\n}else{\nvalid=\"Veuillez vous adresser à l'agence la plus proche\";\n}",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false,
                                      "multiple": false
                                  },
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "type": "textfield",
                                  "$$hashKey": "object:429",
                                  "lockKey": true,
                                  "customClass": "messageErreur",
                                  "disabled": true,
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "refreshOn": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": {
                                      "type": "input"
                                  },
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "mask": false,
                                  "inputFormat": "plain",
                                  "id": "e33iebm"
                              }
                          ],
                          "width": 5,
                          "offset": 3,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:774",
                          "type": "column",
                          "row": ""
                      },
                      {
                          "components": [],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0
                      }
                  ],
                  "type": "columns",
                  "$$hashKey": "object:533",
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "customConditional": "show=(data['var-age']>30);",
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "protected": false,
                  "unique": false,
                  "persistent": false,
                  "hidden": false,
                  "clearOnHide": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "label": "Columns",
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "validate": {
                      "required": false,
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false
                  },
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "tree": false,
                  "autoAdjust": false,
                  "hideOnChildrenHidden": false,
                  "id": "eeb6oca"
              },
              {
                  "input": false,
                  "tableView": true,
                  "key": "columns",
                  "columns": [
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Puissance fiscale",
                                  "key": "var-puissanceFiscale",
                                  "placeholder": "-- Puissance fiscale --",
                                  "data": {
                                      "values": [
                                          {
                                              "value": "2CV",
                                              "label": "2 CV"
                                          },
                                          {
                                              "value": "3CV",
                                              "label": "3 CV"
                                          },
                                          {
                                              "value": "4CV",
                                              "label": "4 CV"
                                          },
                                          {
                                              "value": "5CV",
                                              "label": "5 CV"
                                          },
                                          {
                                              "value": "6CV",
                                              "label": "6 CV"
                                          },
                                          {
                                              "value": "7CV",
                                              "label": "7 CV"
                                          },
                                          {
                                              "value": "8CV",
                                              "label": "8 CV"
                                          },
                                          {
                                              "value": "9CV",
                                              "label": "9 CV"
                                          },
                                          {
                                              "value": "10CV",
                                              "label": "10 CV"
                                          },
                                          {
                                              "value": "11CV",
                                              "label": "11 CV"
                                          },
                                          {
                                              "value": "12CV",
                                              "label": "12 CV"
                                          },
                                          {
                                              "value": "13CV",
                                              "label": "13 CV"
                                          },
                                          {
                                              "value": "14CV",
                                              "label": "14 CV"
                                          },
                                          {
                                              "value": "15CV+",
                                              "label": "15 CV et +"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "",
                                      "headers": [],
                                      "sort": false
                                  },
                                  "dataSrc": "values",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false,
                                      "multiple": false
                                  },
                                  "type": "select",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "$$hashKey": "object:1141",
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "clearOnRefresh": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "ea4irz7"
                              }
                          ],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:1135",
                          "type": "column",
                          "row": ""
                      },
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Nbre de places",
                                  "key": "var-nbrePlace",
                                  "placeholder": "-- Nombre de places --",
                                  "data": {
                                      "values": [
                                          {
                                              "value": "2",
                                              "label": "2"
                                          },
                                          {
                                              "value": "3",
                                              "label": "3"
                                          },
                                          {
                                              "value": "4",
                                              "label": "4"
                                          },
                                          {
                                              "value": "5",
                                              "label": "5"
                                          },
                                          {
                                              "value": "6",
                                              "label": "6"
                                          },
                                          {
                                              "value": "8",
                                              "label": "8"
                                          },
                                          {
                                              "value": "10",
                                              "label": "10"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "",
                                      "headers": [],
                                      "sort": false
                                  },
                                  "dataSrc": "values",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false,
                                      "multiple": false
                                  },
                                  "type": "select",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "$$hashKey": "object:1149",
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "clearOnRefresh": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "e4iacii"
                              }
                          ],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:1136",
                          "type": "column",
                          "row": ""
                      }
                  ],
                  "type": "columns",
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "$$hashKey": "object:1133",
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "protected": false,
                  "unique": false,
                  "persistent": false,
                  "hidden": false,
                  "clearOnHide": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "label": "Columns",
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "validate": {
                      "required": false,
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false
                  },
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "tree": false,
                  "autoAdjust": false,
                  "hideOnChildrenHidden": false,
                  "id": "eycdj17k"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Range",
                  "key": "var-ageRange",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:1056",
                  "lockKey": true,
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "e0l9v0f"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Age",
                  "key": "var-age",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:844",
                  "lockKey": true,
                  "calculateValue": "function dateDiff(dateold, datenew)\n{\n  var ynew = datenew.getFullYear();\n  var mnew = datenew.getMonth();\n  var dnew = datenew.getDate();\n  var yold = dateold.getFullYear();\n  var mold = dateold.getMonth();\n  var dold = dateold.getDate();\n  var diff = ynew - yold;\n  if(mold > mnew) diff--;\n  else\n  {\n    if(mold == mnew)\n    {\n      if(dold > dnew) diff--;\n    }\n  }\n  return diff;\n}\nvar today = new Date();\nvar olday = new Date(data['var-dateMiseCirculation']);\nvalue=dateDiff(olday, today);",
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "eeqjf8lp"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Classe Bonus-Malus",
                  "key": "var-ClasseBonusMalus",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:1085",
                  "lockKey": true,
                  "calculateValue": "if (data['var-typeDemande']=='1'){\n value='08';\n}else{\n value='04';\n}",
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "eff863"
              },
              {
                  "input": false,
                  "tableView": true,
                  "key": "columns3",
                  "columns": [
                      {
                          "components": [
                              {
                                  "multiple": false,
                                  "input": true,
                                  "tableView": true,
                                  "inputType": "number",
                                  "label": "Valeur vénale",
                                  "key": "var-ValeurActuelleVehicule",
                                  "placeholder": "",
                                  "prefix": "",
                                  "suffix": "DT",
                                  "defaultValue": "",
                                  "protected": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "min": null,
                                      "max": null,
                                      "step": "any",
                                      "integer": false,
                                      "multiple": false,
                                      "custom": "debugger;\n\nfunction filter(data, codePack) {\n           var result = [];\n               result = data.filter(function (item) { \n            return item.codePack== codePack\n             });\n           return result;\n       }\n\t   \nfunction dateDiff(dateold, datenew)\n{\n  var ynew = datenew.getFullYear();\n  var mnew = datenew.getMonth();\n  var dnew = datenew.getDate();\n  var yold = dateold.getFullYear();\n  var mold = dateold.getMonth();\n  var dold = dateold.getDate();\n  var diff = ynew - yold;\n  if(mold > mnew) diff--;\n  else\n  {\n    if(mold == mnew)\n    {\n      if(dold > dnew) diff--;\n    }\n  }\n  return diff;\n}\n\nvar today = new Date();\nvar olday = new Date(data['var-dateMiseCirculation']);\ndata['var-age']=dateDiff(olday, today);\n\n\nif (data['var-age'] < 2){\ndata['var-ageRange']=data['var-age']+'-'+(Number(data['var-age'])+1);\n}else{\nif (data['var-age']%2==0){\n   data['var-ageRange']=data['var-age']+'-'+(Number(data['var-age'])+2);\n}else{\ndata['var-ageRange']=(Number(data['var-age'])-1)+'-'+(Number(data['var-age'])+1);\n}\n}\n\nvar filtre=undefined;\nvar pack=data['var-pack'];\nif(pack=='6'){\nvar formule=data['var-formule'];\nvar franchise=data['var-franchiseFormule'];\n   if(formule=='dsv' && franchise=='0'){\n       filtre='3';\n   }else if(formule=='dsv' && franchise=='1'){\n       filtre='4';\n   }else if((formule=='dcu' || formule=='dcu1' ) && franchise=='0'){\n       filtre='5';\n        data['var-packWS']='4';\n   }\n   else if((formule=='dcu' || formule=='dcu1' )&& franchise=='1'){\n       filtre='6';\n      data['var-packWS']='3';\n   }else{\n   filtre='';\n   }\n}else if(pack=='1' || pack=='4'){\nfiltre='1';\n}else{\nfiltre='2';\n}\n\nif((data['var-garantiesDG'] == undefined) && (filtre != undefined) ){\n data['var-garantiesDG']  = filter(JSON.parse(formContainer.data['var-datagrid'] ), filtre);\nconsole.log('pack 1'+filtre);\n}else{\n  if ((data['var-garantiesDG'].length  < '1' )||(data['var-garantiesDG'] [0].codePack != filtre ) || (data['var-garantiesDG'] != undefined && data['var-age'] <15)){\n  data['var-garantiesDG']  = filter(JSON.parse(data['var-datagrid'] ), filtre);\n}\n}\n\nif ((data['var-age']>15) && ( data['var-garantiesDG'] != undefined )){\n\n       var customDataGridData = data['var-garantiesDG'];\nvar indexe=undefined;\n\n\tfor (var i = 0; i < customDataGridData.length; i++) {\n\t\tvar customCurrent = customDataGridData[i]['codegarantie'];\n\t\tif (customCurrent=='54') {\n\t\t\tindexe=i;\n\t\t} \n\t}\n\t\nif (indexe){\ncustomDataGridData.splice(indexe,1); \n}\n}\n\nif(value >1000000){\n    valid=\"Veuillez vous adresser à l agence la plus proche\";\n}else if (value <0 ){\n    valid=\"Veuillez saisir une valeur supérieure à 0\";\n}else{\nvalid = true;\n}\n\n\n\nformContainer.data['var-garantiesDG'].find(function(item, i){\n  if (item.codegarantie == '70'){\n        data['var-gar70']=i;\n  }else if (item.codegarantie == '82'){\n         data['var-gar82']=i;\n  }\n});",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false
                                  },
                                  "type": "number",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "$$hashKey": "object:518",
                                  "description": "Valeur actuelle du véhicule max 1 million de dinars",
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "customClass": "",
                                  "unique": false,
                                  "refreshOn": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": {
                                      "type": "input"
                                  },
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "id": "e4i55o"
                              }
                          ],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:469",
                          "type": "column",
                          "row": ""
                      },
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Mode de paiement souhaité",
                                  "key": "var-fractionnement",
                                  "placeholder": "",
                                  "data": {
                                      "sort": true,
                                      "values": [
                                          {
                                              "value": "Semestriel",
                                              "label": "Semestriel",
                                              "$$hashKey": "object:1309"
                                          },
                                          {
                                              "value": "Annuel",
                                              "label": "Annuel",
                                              "$$hashKey": "object:1314"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "",
                                      "headers": []
                                  },
                                  "dataSrc": "values",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false,
                                      "multiple": false
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:1150",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "clearOnRefresh": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "emr5u7f"
                              }
                          ],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:1132",
                          "type": "column",
                          "row": ""
                      }
                  ],
                  "type": "columns",
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "$$hashKey": "object:430",
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "protected": false,
                  "unique": false,
                  "persistent": false,
                  "hidden": false,
                  "clearOnHide": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "label": "Columns",
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "validate": {
                      "required": false,
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false
                  },
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "tree": false,
                  "autoAdjust": false,
                  "hideOnChildrenHidden": false,
                  "id": "epg3f06"
              },
              {
                  "input": false,
                  "tableView": true,
                  "key": "columns2",
                  "columns": [
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Pack",
                                  "key": "var-pack",
                                  "placeholder": "-- Choix entre 3 packs --",
                                  "data": {
                                      "values": [
                                          {
                                              "value": "1",
                                              "label": "Basique"
                                          },
                                          {
                                              "value": "2",
                                              "label": "Dommage collision"
                                          },
                                          {
                                              "value": "3",
                                              "label": "Tous risques"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "values = [];\n\nif (data) {\n    switch (true) {\n\t\n        case (data['var-age']>10):\n            values = [\n                {\n                    'label': 'Basique',\n                    'value': '1'\n                },\n                {\n                    'label': 'Dommage collision',\n                    'value': '2'\n                }\n            ];\n            break;\n       \n        default:\n            values = [\n                {\n                    'label': 'Basique',\n                    'value': '4'\n                },\n                {\n                    'label': 'Dommage collision',\n                    'value': '5'\n                },\n                {\n                    'label': 'Tous risques',\n                    'value': '6'\n                }\n            ];\n            break;\n    }\n}",
                                      "headers": [],
                                      "sort": false
                                  },
                                  "dataSrc": "custom",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "var-dateMiseCirculation",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "",
                                      "customPrivate": false,
                                      "strictDateValidation": false,
                                      "unique": false,
                                      "multiple": false
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:368",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "clearOnRefresh": false,
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "e3daqrb"
                              }
                          ],
                          "width": 4,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:289",
                          "type": "column",
                          "row": ""
                      },
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Formule",
                                  "key": "var-formule",
                                  "placeholder": "-- Choix formule --",
                                  "data": {
                                      "values": [
                                          {
                                              "value": "dsv",
                                              "label": "DSV",
                                              "$$hashKey": "object:435"
                                          },
                                          {
                                              "value": "dcu",
                                              "label": "DCU",
                                              "$$hashKey": "object:578"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "values = [];\n\nif (data) {\n    switch (true) {\n\t\n        case (data['var-age']>5):\n            values = [\n                {\n                    'label': 'DCU',\n                    'value': 'dcu1'\n                }\n            ];\n            break;\n       \n        default:\n            values = [\n                 {\n                    'label': 'DCU',\n                    'value': 'dcu'\n                },\n                {\n                    'label': 'DSV',\n                    'value': 'dsv'\n                }\n            ];\n            break;\n    }\n}",
                                      "headers": [],
                                      "sort": false
                                  },
                                  "dataSrc": "custom",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "var-dateMiseCirculation",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "if (data['var-pack']=='6' && (input=='dcu' || input=='dcu1')){\n  data['var-affichage']='oui';\n}else{\n data['var-affichage']='non';\n}",
                                      "customPrivate": false,
                                      "strictDateValidation": false
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:312",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "true",
                                      "when": "var-pack",
                                      "eq": "6"
                                  },
                                  "clearOnRefresh": false,
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "efl2ue"
                              }
                          ],
                          "width": 4,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:290",
                          "type": "column",
                          "row": ""
                      },
                      {
                          "components": [
                              {
                                  "input": true,
                                  "tableView": true,
                                  "label": "Choix franchise",
                                  "key": "var-franchiseFormule",
                                  "placeholder": "-- Avec ou sans franchise --",
                                  "data": {
                                      "values": [
                                          {
                                              "value": "1",
                                              "label": "Avec franchise",
                                              "$$hashKey": "object:1767"
                                          },
                                          {
                                              "value": "0",
                                              "label": "Sans franchise",
                                              "$$hashKey": "object:1768"
                                          }
                                      ],
                                      "json": "",
                                      "url": "",
                                      "resource": "",
                                      "custom": "",
                                      "headers": [],
                                      "sort": false
                                  },
                                  "dataSrc": "values",
                                  "valueProperty": "value",
                                  "defaultValue": "",
                                  "refreshOn": "",
                                  "filter": "",
                                  "authenticate": false,
                                  "template": "<span>{{ item.label }}</span>",
                                  "multiple": false,
                                  "protected": false,
                                  "unique": false,
                                  "persistent": true,
                                  "hidden": false,
                                  "clearOnHide": true,
                                  "validate": {
                                      "required": true,
                                      "custom": "",
                                      "customPrivate": false,
                                      "strictDateValidation": false
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:323",
                                  "lockKey": true,
                                  "conditional": {
                                      "show": "",
                                      "when": null,
                                      "eq": ""
                                  },
                                  "customConditional": "show=((data['var-formule']=='dsv' || data['var-formule']=='dcu' || data['var-formule']=='dcu1' ) &&(data['var-pack']=='6'))",
                                  "row": "",
                                  "hideOnChildrenHidden": false,
                                  "prefix": "",
                                  "customClass": "",
                                  "suffix": "",
                                  "redrawOn": "",
                                  "modalEdit": false,
                                  "labelPosition": "top",
                                  "description": "",
                                  "errorLabel": "",
                                  "tooltip": "",
                                  "hideLabel": false,
                                  "tabindex": "",
                                  "disabled": false,
                                  "autofocus": false,
                                  "dbIndex": false,
                                  "customDefaultValue": "",
                                  "calculateValue": "",
                                  "widget": null,
                                  "attributes": {},
                                  "validateOn": "change",
                                  "overlay": {
                                      "style": "",
                                      "left": "",
                                      "top": "",
                                      "width": "",
                                      "height": ""
                                  },
                                  "allowCalculateOverride": false,
                                  "encrypted": false,
                                  "showCharCount": false,
                                  "showWordCount": false,
                                  "properties": {},
                                  "allowMultipleMasks": false,
                                  "clearOnRefresh": false,
                                  "limit": 100,
                                  "lazyLoad": true,
                                  "searchEnabled": true,
                                  "searchField": "",
                                  "minSearch": 0,
                                  "readOnlyValue": false,
                                  "selectFields": "",
                                  "searchThreshold": 0.3,
                                  "fuseOptions": {
                                      "include": "score",
                                      "threshold": 0.3
                                  },
                                  "customOptions": {},
                                  "id": "ewp2pdl"
                              }
                          ],
                          "width": 4,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "$$hashKey": "object:355",
                          "type": "column",
                          "row": ""
                      }
                  ],
                  "type": "columns",
                  "$$hashKey": "object:284",
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "row": "",
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "protected": false,
                  "unique": false,
                  "persistent": false,
                  "hidden": false,
                  "clearOnHide": false,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "label": "Columns",
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "widget": null,
                  "attributes": {},
                  "validateOn": "change",
                  "validate": {
                      "required": false,
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false
                  },
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "tree": false,
                  "autoAdjust": false,
                  "hideOnChildrenHidden": false,
                  "id": "ei8ghs8"
              },
              {
                  "input": true,
                  "tableView": true,
                  "inputType": "text",
                  "inputMask": "",
                  "label": "Pack filtre",
                  "key": "var-packFiltre",
                  "placeholder": "",
                  "prefix": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": "",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": true,
                  "clearOnHide": true,
                  "validate": {
                      "required": false,
                      "minLength": "",
                      "maxLength": "",
                      "pattern": "",
                      "custom": "",
                      "customPrivate": false,
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": false
                  },
                  "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                  },
                  "type": "textfield",
                  "$$hashKey": "object:681",
                  "lockKey": true,
                  "calculateValue": "var pack=data['var-pack'];\nif(pack=='6'){\nvar formule=data['var-formule'];\nvar franchise=data['var-franchiseFormule'];\n   if(formule=='dsv' && franchise=='0'){\n       value='3';\n   }else if(formule=='dsv' && franchise=='1'){\n       value='4';\n   }else if((formule=='dcu' || formule=='dcu1' ) && franchise=='0'){\n       value='5';\n        data['var-packWS']='4';\n   }\n   else if((formule=='dcu' || formule=='dcu1' )&& franchise=='1'){\n       value='6';\n      data['var-packWS']='3';\n   }else{\n   value='';\n   }\n}else if(pack=='1'  || pack=='4'){\nvalue='1';\n}else{\nvalue='2';\n}",
                  "row": "",
                  "customClass": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "widget": {
                      "type": "input"
                  },
                  "attributes": {},
                  "validateOn": "change",
                  "overlay": {
                      "style": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "mask": false,
                  "inputFormat": "plain",
                  "id": "e53k92"
              },
              {
                  "label": "Select",
                  "labelPosition": "top",
                  "widget": null,
                  "placeholder": "",
                  "description": "",
                  "tooltip": "",
                  "customClass": "",
                  "tabindex": "",
                  "hidden": false,
                  "hideLabel": false,
                  "autofocus": false,
                  "disabled": false,
                  "tableView": true,
                  "modalEdit": false,
                  "multiple": true,
                  "dataSrc": "values",
                  "data": {
                      "values": [
                          {
                              "label": "value 1",
                              "value": "value1"
                          },
                          {
                              "label": "value 2",
                              "value": "value2"
                          },
                          {
                              "label": "value 3",
                              "value": "value3"
                          },
                          {
                              "label": "value 4",
                              "value": "value4"
                          },
                          {
                              "label": "value 5",
                              "value": "value5"
                          },
                          {
                              "label": "value 6",
                              "value": "value6"
                          },
                          {
                              "label": "value 7",
                              "value": "value7"
                          },
                          {
                              "label": "value 8",
                              "value": "value8"
                          },
                          {
                              "label": "value 9",
                              "value": "value9"
                          },
                          {
                              "label": "value 10",
                              "value": "value10"
                          }
                      ],
                      "resource": "",
                      "json": "",
                      "url": "",
                      "custom": ""
                  },
                  "valueProperty": "",
                  "dataType": "",
                  "template": "<span>{{ item.label }}</span>",
                  "searchEnabled": true,
                  "selectThreshold": 0.3,
                  "readOnlyValue": false,
                  "customOptions": {},
                  "persistent": true,
                  "protected": false,
                  "dbIndex": false,
                  "encrypted": false,
                  "clearOnHide": true,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "allowCalculateOverride": false,
                  "validateOn": "change",
                  "validate": {
                      "required": false,
                      "customMessage": "",
                      "custom": "",
                      "customPrivate": false,
                      "json": "",
                      "strictDateValidation": false,
                      "unique": false,
                      "multiple": true
                  },
                  "unique": false,
                  "errorLabel": "",
                  "key": "select1",
                  "tags": [],
                  "properties": {},
                  "conditional": {
                      "show": null,
                      "when": null,
                      "eq": "",
                      "json": ""
                  },
                  "customConditional": "",
                  "logic": [],
                  "attributes": {},
                  "overlay": {
                      "style": "",
                      "page": "",
                      "left": "",
                      "top": "",
                      "width": "",
                      "height": ""
                  },
                  "type": "select",
                  "indexeddb": {
                      "filter": {}
                  },
                  "minSearch": 0,
                  "limit": 100,
                  "input": true,
                  "prefix": "",
                  "suffix": "",
                  "refreshOn": "",
                  "redrawOn": "",
                  "showCharCount": false,
                  "showWordCount": false,
                  "allowMultipleMasks": false,
                  "clearOnRefresh": false,
                  "lazyLoad": true,
                  "filter": "",
                  "searchField": "",
                  "authenticate": false,
                  "selectFields": "",
                  "searchThreshold": 0.3,
                  "fuseOptions": {
                      "include": "score",
                      "threshold": 0.3
                  },
                  "id": "eyfwhs",
                  "defaultValue": ""
              }
          ],
          "type": "panel",
          "$$hashKey": "object:299",
          "conditional": {
              "show": "",
              "when": null,
              "eq": ""
          },
          "row": "",
          "placeholder": "",
          "prefix": "",
          "customClass": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "protected": false,
          "unique": false,
          "persistent": false,
          "hidden": false,
          "clearOnHide": false,
          "refreshOn": "",
          "redrawOn": "",
          "tableView": false,
          "modalEdit": false,
          "label": "Panel",
          "labelPosition": "top",
          "description": "",
          "errorLabel": "",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "disabled": false,
          "autofocus": false,
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "widget": null,
          "attributes": {},
          "validateOn": "change",
          "validate": {
              "required": false,
              "custom": "",
              "customPrivate": false,
              "strictDateValidation": false
          },
          "overlay": {
              "style": "",
              "left": "",
              "top": "",
              "width": "",
              "height": ""
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "properties": {},
          "allowMultipleMasks": false,
          "tree": false,
          "breadcrumb": "default",
          "id": "eo1enbe",
          "path": "panel3"
      },
      {
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "DATAGRID",
          "key": "var-datagrid",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": true,
          "clearOnHide": true,
          "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false,
              "strictDateValidation": false,
              "unique": false,
              "multiple": false
          },
          "conditional": {
              "show": "",
              "when": null,
              "eq": ""
          },
          "type": "textfield",
          "$$hashKey": "object:469",
          "lockKey": true,
          "customDefaultValue": "value='[ { \"garantie\":\"Dommages subis par le v\\u00e9hicule\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"},{\\\\\"label\\\\\":\\\\\"1\\\\\",\\\\\"value\\\\\":\\\\\"1\\\\\"},{\\\\\"label\\\\\":\\\\\"2\\\\\",\\\\\"value\\\\\":\\\\\"2\\\\\"},{\\\\\"label\\\\\":\\\\\"8\\\\\",\\\\\"value\\\\\":\\\\\"8\\\\\"},{\\\\\"label\\\\\":\\\\\"4\\\\\",\\\\\"value\\\\\":\\\\\"4\\\\\"},{\\\\\"label\\\\\":\\\\\"12\\\\\",\\\\\"value\\\\\":\\\\\"12\\\\\"},{\\\\\"label\\\\\":\\\\\"16\\\\\",\\\\\"value\\\\\":\\\\\"16\\\\\"},{\\\\\"label\\\\\":\\\\\"20\\\\\",\\\\\"value\\\\\":\\\\\"20\\\\\"}]\" , \"codegarantie\":\"50\" , \"codePack\":\"4\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"1\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"1\" }, { \"garantie\":\"Vol\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"30\" , \"codePack\":\"1\" }, { \"garantie\":\"Incendie\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"40\" , \"codePack\":\"1\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"1\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"1\" }, { \"garantie\":\"Incendie suite \\u00e9meutes\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"41\" , \"codePack\":\"1\" }, { \"garantie\":\"Bris de Glace\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"70\" , \"codePack\":\"1\" }, { \"garantie\":\"Force de la nature\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"74\" , \"codePack\":\"1\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"1\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"1\" }, { \"garantie\":\"Assistance Accident Auto 3A\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"90\" , \"codePack\":\"1\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"4\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"4\" }, { \"garantie\":\"Vol\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"30\" , \"codePack\":\"4\" }, { \"garantie\":\"Incendie\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"40\" , \"codePack\":\"4\" }, { \"garantie\":\"Incendie suite \\u00e9meutes\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"41\" , \"codePack\":\"4\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"4\" }, { \"garantie\":\"Bris de Glace\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"70\" , \"codePack\":\"4\" }, { \"garantie\":\"Force de la nature\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"74\" , \"codePack\":\"4\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"4\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"4\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"4\" }, { \"garantie\":\"Assistance Accident Auto 3A\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"90\" , \"codePack\":\"4\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"5\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"5\" }, { \"garantie\":\"Remplacement de v\\u00e9hicule\\/rem frais location\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"83\" , \"codePack\":\"5\" }, { \"garantie\":\"Dommages subis par le v\\u00e9hicule\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"},{\\\\\"label\\\\\":\\\\\"1\\\\\",\\\\\"value\\\\\":\\\\\"1\\\\\"},{\\\\\"label\\\\\":\\\\\"2\\\\\",\\\\\"value\\\\\":\\\\\"2\\\\\"},{\\\\\"label\\\\\":\\\\\"8\\\\\",\\\\\"value\\\\\":\\\\\"8\\\\\"},{\\\\\"label\\\\\":\\\\\"4\\\\\",\\\\\"value\\\\\":\\\\\"4\\\\\"},{\\\\\"label\\\\\":\\\\\"12\\\\\",\\\\\"value\\\\\":\\\\\"12\\\\\"},{\\\\\"label\\\\\":\\\\\"16\\\\\",\\\\\"value\\\\\":\\\\\"16\\\\\"},{\\\\\"label\\\\\":\\\\\"20\\\\\",\\\\\"value\\\\\":\\\\\"20\\\\\"}]\" , \"codegarantie\":\"50\" , \"codePack\":\"3\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"5\" }, { \"garantie\":\"Valeur de remplacement du v\\u00e9hicule\\u00a0 (3 ans)\\u00a0\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"87\" , \"codePack\":\"5\" }, { \"garantie\":\"Valeur d\\'achat du v\\u00e9hicule \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"85\" , \"codePack\":\"5\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"5\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"5\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"5\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"6\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"6\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"6\" }, { \"garantie\":\"Bris de Glace\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"70\" , \"codePack\":\"6\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"6\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"6\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"6\" }, { \"garantie\":\"Assistance Accident Auto 3A\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"90\" , \"codePack\":\"6\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"2\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"2\" }, { \"garantie\":\"Vol\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"30\" , \"codePack\":\"2\" }, { \"garantie\":\"Incendie\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"40\" , \"codePack\":\"2\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"2\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"2\" }, { \"garantie\":\"Dommages Collision\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"54\" , \"codePack\":\"2\" }, { \"garantie\":\"Incendie suite \\u00e9meutes\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"41\" , \"codePack\":\"2\" }, { \"garantie\":\"Bris de Glace\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"70\" , \"codePack\":\"2\" }, { \"garantie\":\"Force de la nature\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"74\" , \"codePack\":\"2\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"2\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"2\" }, { \"garantie\":\"Assistance Accident Auto 3A\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"90\" , \"codePack\":\"2\" }, { \"garantie\":\"Responsabilit\\u00e9 civile\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"10\" , \"codePack\":\"3\" }, { \"garantie\":\"D\\u00e9fense Recours\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"20\" , \"codePack\":\"3\" }, { \"garantie\":\"Vol\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"30\" , \"codePack\":\"3\" }, { \"garantie\":\"Incendie\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"40\" , \"codePack\":\"3\" }, { \"garantie\":\"Incendie suite \\u00e9meutes\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"41\" , \"codePack\":\"3\" }, { \"garantie\":\"S\\u00e9curit\\u00e9 des Passagers SP\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"65\" , \"codePack\":\"3\" }, { \"garantie\":\"Force de la nature\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"74\" , \"codePack\":\"3\" }, { \"garantie\":\"AssistanceGOLD\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"79\" , \"codePack\":\"3\" }, { \"garantie\":\"CAR GLASS\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"82\" , \"codePack\":\"3\" }, { \"garantie\":\"Remplacement de v\\u00e9hicule\\/rem frais location \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"83\" , \"codePack\":\"3\" }, { \"garantie\":\"Accident Conducteur Corporel \" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"84\" , \"codePack\":\"3\" }, { \"garantie\":\"Valeur d\\'achat du v\\u00e9hicule \" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"85\" , \"codePack\":\"3\" }, { \"garantie\":\"Dommages suite actes de vandalisme\" , \"select\":\"false\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"}]\" , \"codegarantie\":\"86\" , \"codePack\":\"3\" }, { \"garantie\":\"Dommages Cumul\\u00e9s\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"},{\\\\\"label\\\\\":\\\\\"1\\\\\",\\\\\"value\\\\\":\\\\\"1\\\\\"}]\" , \"codegarantie\":\"51\" , \"codePack\":\"5\" }, { \"garantie\":\"Dommages Cumul\\u00e9s\" , \"select\":\"true\" , \"ValeurFranchise\":\"[{\\\\\"label\\\\\":\\\\\"0\\\\\",\\\\\"value\\\\\":\\\\\"0\\\\\"},{\\\\\"label\\\\\":\\\\\"1\\\\\",\\\\\"value\\\\\":\\\\\"1\\\\\"}]\" , \"codegarantie\":\"51\" , \"codePack\":\"6\" } ]';",
          "pre": "(function addcss(css){\n    var head = document.getElementsByTagName('head')[0];\n    var s = document.createElement('style');\n    s.setAttribute('type', 'text/css');\n    if (s.styleSheet) {   // IE\n        s.styleSheet.cssText = css;\n    } else {                // the world\n        s.appendChild(document.createTextNode(css));\n    }\n    head.appendChild(s);\n })('.progress-indicator li:nth-child(1) .glyphicon:before{content:\"\\\\f1b9\"}.progress-indicator li:nth-child(2) .glyphicon:before{content:\"\\\\f07c\"}.progress-indicator li:nth-child(3) .glyphicon:before{content:\"\\\\f007\"}.progress-indicator li:nth-child(4) .glyphicon:before{content:\"\\\\f00c\"}');",
          "calculateValue": "",
          "row": "",
          "customClass": "",
          "refreshOn": "",
          "redrawOn": "",
          "modalEdit": false,
          "labelPosition": "top",
          "description": "",
          "errorLabel": "",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "disabled": false,
          "autofocus": false,
          "dbIndex": false,
          "widget": {
              "type": "input"
          },
          "attributes": {},
          "validateOn": "change",
          "overlay": {
              "style": "",
              "left": "",
              "top": "",
              "width": "",
              "height": ""
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "properties": {},
          "allowMultipleMasks": false,
          "mask": false,
          "inputFormat": "plain",
          "id": "e3675wo"
      },
      {
          "input": true,
          "tableView": true,
          "inputType": "text",
          "inputMask": "",
          "label": "description",
          "key": "var-description",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": "",
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": true,
          "clearOnHide": true,
          "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false,
              "strictDateValidation": false,
              "unique": false,
              "multiple": false
          },
          "conditional": {
              "show": "",
              "when": null,
              "eq": ""
          },
          "type": "textfield",
          "$$hashKey": "object:391",
          "lockKey": true,
          "calculateValue": "$('label.control-label .glyphicon-question-sign').hover(function(){\n            $(this).parent().siblings('.help-block').css('left',$(this).parent().width());\n            $(this).parent().siblings('.help-block').css('top', - $(this).parent().height());\n            $(this).parent().siblings('.help-block').css('position', 'absolute');\n            $(this).parent().siblings('.help-block').css('visibility', 'visible');\n            $(this).parent().siblings('.help-block').css('display', 'block');\n            $(this).parent().siblings('.help-block').css('color','white');\n            $(this).parent().siblings('.help-block').css('font-size', '16px');\n            $(this).parent().siblings('.help-block').css('padding', '4px');\n            $(this).parent().siblings('.help-block').css('border-radius', '9px');\n            $(this).parent().siblings('.help-block').css('box-shadow', '0px 0px 2px 2px #0000002b');\n            $(this).parent().siblings('.help-block').css('max-width', '55%');\n            $(this).parent().siblings('.help-block').css('width', 'fit-content');\n            $(this).parent().siblings('.help-block').css('overflow-wrap', 'break-word');\n            $(this).parent().siblings('.help-block').css('z-index', '999');\n            $(this).parent().siblings('.help-block').css('background', '#c365d3');\n            $(this).parent().siblings('.help-block').css('background', '-moz-linear-gradient(top, #c365d3 0%, #8811a0 94%)');\n            $(this).parent().siblings('.help-block').css('background', '-webkit-linear-gradient(top, #c365d3 0%,#8811a0 94%)');\n            $(this).parent().siblings('.help-block').css('background', 'linear-gradient(to bottom, #d98ace 0%,#8811a0 94%)');\n            $(this).parent().siblings('.help-block').css('filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\\'#c365d3\\', endColorstr=\\'#8811a0\\',GradientType=0 )');\n            $(this).parent().siblings('.help-block').css('background', '-moz-linear-gradient(top, #cb60b3 0%, #8811a0 94%)');\n            $(this).parent().siblings('.help-block').css('background', '#b60b3'); \n            $(this).parent().siblings('.help-block').css('background', '-webkit-linear-gradient(top, #cb60b3 0%,#8811a0 94%)');\n            $(this).parent().siblings('.help-block').css('background', 'linear-gradient(to bottom, #cb60b3 0%,#8811a0 94%)');      \n    }, function(){\n    $(this).parent().siblings('.help-block').css('visibility', 'hidden');\n});\n\n\nif(!$('.progress-indicator li i').hasClass(\"fa\")){\n\t$('.progress-indicator li i').toggleClass(\"fa\")\n}\nif(!$('.progress-indicator li i').hasClass(\"fa\")){\n\t$('.progress-indicator li i').toggleClass(\"fa\")\n}",
          "customDefaultValue": "$('label.control-label').each(function( index ) {\n  if($(this).siblings('.help-block').length > 0){\n        \n       if( $(this).children('span').length==0){\n          $('.help-block').css('visibility', 'hidden');\n          $('.help-block').css('position', 'absolute');\n          $(this).append('<span class=\"glyphicon glyphicon-question-sign\"></span>');\n       }\n   }\n});",
          "row": "",
          "customClass": "",
          "refreshOn": "",
          "redrawOn": "",
          "modalEdit": false,
          "labelPosition": "top",
          "description": "",
          "errorLabel": "",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "disabled": false,
          "autofocus": false,
          "dbIndex": false,
          "widget": {
              "type": "input"
          },
          "attributes": {},
          "validateOn": "change",
          "overlay": {
              "style": "",
              "left": "",
              "top": "",
              "width": "",
              "height": ""
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "properties": {},
          "allowMultipleMasks": false,
          "mask": false,
          "inputFormat": "plain",
          "id": "e5bs8ia"
      }
  ]
}

/**
 * General-purpose function to apply fixes on the DOM on form render
 * @param {Object} formContainer Formio Object (a form wizard)
 */
function formioFixes(formContainer){
  function callback1(domElement){
    let textareaElements = domElement.querySelectorAll(".formio-component-datagrid td textarea");
    //console.log("textareaElements = ", textareaElements);
    for(let index = 0; index < textareaElements.length; index++){
      let textareaElement = textareaElements[index];
      textareaElement.style.height= '0px';
      textareaElement.style.height = (textareaElement.scrollHeight + 1) + 'px';
    }
  }
  
  function callback2(){
    window.addEventListener("resize", function(event){
      let resizeId;
      clearTimeout(resizeId);
      resizeId = setTimeout(callback1(document, true), 750);  
    });
  }
  formContainer.on("render", function(ev){ 
    callback1(document);
    callback2();
  });
}

// Applying data to the form
// ~applyDataDemo(requestExample.variables, formContainer, function() {
//	console.log("post apply data callback");
// })
var applyDataDemo = function (data, formioObject, callback) {
  extranet.applyData(data, formioObject, callback)
};

// validating the form
// ~validateFormDemo(formContainer)
var validateFormDemo = function (formioObject) {
  return extranet.validateForm(formioObject);
};

// Test is The Form In The Last Page
// ~isTheFormInTheLastPageDemo(formContainer)
var isTheFormInTheLastPageDemo = function (formioObject) {
  return extranet.isTheFormInTheLastPage(formioObject);
};

// extracting the data from the form
// ~getDataToSubmitDemo(formContainer, JSON.parse(requestExample.form), requestExample.prefix)
var getDataToSubmitDemo = function (formioObject, formConfig, prefix) {
  return
};

var data;

var bootstrapStyle;

var requestId;

var language;

var connectedUsername;

var connectedUserRoles;

var connectedUserDetails; 

var connectedNumCorrespondance; 

var recaptchaSiteKey;

var callbacks = window.parent.window.callbacks;

var form;

var platform;

var formContainer;

window.parent.window.isLastPage = function (prefix) {
  if (isTheFormInTheLastPageDemo(formContainer) == 1)
    return {
      status: 200
    }
  else return {
    status: 400
  }
}

window.parent.window.validate = function (prefix) {
  
  if (validateFormDemo(formContainer) == 1)
    return {
      status: 200,
      body: extranet.getDataToSubmit(formContainer, JSON.parse(form), prefix)
    }
  else return {
    status: 400
  }

}

window.parent.window.saveTask = function (prefix) {
    return {
      body: extranet.getDataToSubmit(formContainer, JSON.parse(form), prefix)
    }
}

window.parent.window.render = function (params) {

  data = window.parent.window.data;
  bootstrapStyle = window.parent.window.bootstrapStyle;
  requestId = window.parent.window.requestId;
  language = window.parent.window.language;
  connectedUsername = window.parent.window.connectedUsername;
  connectedUserRoles = window.parent.window.connectedUserRoles;
  connectedUserDetails = window.parent.window.connectedUserDetails;
  connectedNumCorrespondance = window.parent.window.connectedNumCorrespondance;
  recaptchaSiteKey = window.parent.window.recaptchaSiteKey;
  platform =  window.parent.window.platform;
  
  if(language == undefined){
    language = localStorage.getItem('language');
  }

  window.parent.window.Alfresco = { constants: { JS_LOCALE : language}};

  if(bootstrapStyle == null) {
    bootstrapStyle = "bootstrap-default.css";
  }

  if(bootstrapStyle == "bootstrap-default.css" && language == "ar"){
    bootstrapStyle = "bootstrap-default-rtl.css"
  }
  
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",'<link rel="stylesheet" type="text/css" href="styles/bootstrap/' + bootstrapStyle + '">');

  if(language == "ar"){
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",'<link rel="stylesheet" type="text/css" href="styles/formio-rtl.full.css">');
  } else {
    document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",'<link rel="stylesheet" type="text/css" href="styles/formio.full.css">');
  }

  form = data.form.replace(/\\n/g, "\\n");
  form = form.replace(/\\'/g, "\\'");
  form = form.replace(/\\&/g, "\\&");
  form = form.replace(/\\r/g, "\\r");
  form = form.replace(/\\t/g, "\\t");
  form = form.replace(/\\b/g, "\\b");
  form = form.replace(/\\f/g, "\\f");


  formContainer = extranet.renderForm('formio', meh, data.readOnly,language);

  formioFixes(formContainer)

  formContainer.ready.then(function () {
    applyDataDemo(JSON.parse(data.variables), formContainer, function () {
      callbacks.ready();

      onFormioHeightChange(document.getElementById("formio"), function () {
        callbacks.resize();
      });
      onWizardFormioScroll();
    });
    this.initMap();
  });

}

function onFormioHeightChange(elm, callback) {
  var lastHeight = elm.clientHeight,
    newHeight;
  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight != newHeight)
      callback();
    lastHeight = newHeight;

    if (elm.onElementHeightChangeTimer)
      clearTimeout(elm.onElementHeightChangeTimer);

    elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}

function onWizardFormioScroll() {
  if(JSON.parse(form).display !== 'wizard') {
    return;
  }

  var lastScrollTop = 0;
  window.addEventListener('scroll',function(e) {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if(st === 0) {
      document.body.classList.remove("wizard-scroll-down");
      document.body.classList.remove("wizard-scroll-up");
    } else 
    if (st < lastScrollTop){
      document.body.classList.add("wizard-scroll-down");
      document.body.classList.remove("wizard-scroll-up");
    } else {
      document.body.classList.remove("wizard-scroll-down");
      document.body.classList.add("wizard-scroll-up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
}

function initMap() {
  if(formContainer != null) {
    var geoVneuron = formContainer.data["var-geoVneuron"];
    if(geoVneuron != null) {
      // The map
      var map = new google.maps.Map(document.getElementById('vneuronMap'));
      // custom positions
      var bounds = new google.maps.LatLngBounds();
      var positions = geoVneuron.split('+');
      positions.forEach(element => {
        var mark = element.split(',');
		
		    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">' + mark[2] + '</h4>'+
            '<div id="bodyContent">'+
            '<h5>' + mark[3] +'</H5>'+
	          '<h5>' + mark[4] +'</H5>'+
	          '<h5>' + mark[5] +'</H5>'+
            '</div>'+
            '</div>';

		    var infowindow = new google.maps.InfoWindow({
		    	content: contentString
		    });
      
        var marker = new google.maps.Marker({position: {lat: Number(mark[0]), lng: Number(mark[1])},title: mark[2] , map: map});
		    marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
      
        marker.addListener('mouseout', function() {
          infowindow.close();
        });
      
        bounds.extend(new google.maps.LatLng(Number(mark[0]), Number(mark[1])));
      });
      // map zoom 
      map.fitBounds(bounds);
    }
  }
};

if(callbacks != null || callbacks != undefined){
  callbacks.init();
}
