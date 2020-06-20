/*var initialForm = {
    "display": "wizard",
    "page": 0,
    "numPages": 4,
    "components": [
       {
          "key": "panel4",
          "input": false,
          "title": "كيفية التصريح",
          "components": [
             {
                "input": true,
                "tableView": true,
                "label": "tooltipForm",
                "key": "var-tooltipForm",
                "hidden": true,
                "type": "textfield",
                "lockKey": true,
                "$$hashKey": "object:166"
             },
             {
                "input": false,
                "tableView": true,
                "key": "columns12",
                "columns": [
                   {
                      "components": [
                         {
                            "input": false,
                            "tableView": true,
                            "key": "columns11",
                            "columns": [
                               {
                                  "components": [
                                     {
                                        "key": "html27",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "",
                                              "attr": ""
                                           }
                                        ],
                                        "className": "declarationEntetePageFr",
                                        "content": "Déclaration en ligne du bénéficiaire effectif",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:855",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     }
                                  ],
                                  "width": 12,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "$$hashKey": "object:796",
                                  "size": "md"
                               },
                               {
                                  "components": [],
                                  "width": 6,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "size": "md"
                               }
                            ],
                            "type": "columns",
                            "$$hashKey": "object:784",
                            "label": "Columns"
                         },
                         {
                            "input": false,
                            "tableView": true,
                            "key": "columns13",
                            "columns": [
                               {
                                  "components": [
                                     {
                                        "label": "HTML",
                                        "tag": "div",
                                        "attrs": [
                                           {
                                              "value": "",
                                              "attr": ""
                                           }
                                        ],
                                        "content": "<div class='tooltipTriangleOuter fr'>\n</div>\n<div class='tooltipTriangleInner fr'>\n</div>",
                                        "refreshOnChange": false,
                                        "customClass": "highlightme",
                                        "tableView": false,
                                        "key": "html",
                                        "type": "htmlelement",
                                        "input": false,
                                        "$$hashKey": "object:785",
                                        "hideOnChildrenHidden": false
                                     },
                                     {
                                        "key": "html28",
                                        "input": false,
                                        "tag": "h4",
                                        "attrs": [
                                           {
                                              "value": "",
                                              "attr": ""
                                           }
                                        ],
                                        "className": "accueilDeclarationFrTitre",
                                        "content": "Comment déclarer",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1381",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html29",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "1. Préparation de la déclaration",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1382",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html30",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "2. impression du formulaire obtenu en format pdf",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1383",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html32",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "3. signature du formulaire par le représentant légal de la société",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1384",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html33",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "4. Copie de la carte d'identité du bénéficiaire effectif et celle du représentant légal",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1385",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html60",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "5. Quittance de paiement des frais  (20 DT)",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1386",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html34",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListFr",
                                        "content": "6. Dépôt de la déclaration auprès du bureau régional le plus proche contre un reçu",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1387",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html31",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align: left;direction: ltr;color:red",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationFrNB",
                                        "content": "La déclaration doit être faite exclusivement en arabe.",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1388",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     }
                                  ],
                                  "width": 12,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "$$hashKey": "object:1375",
                                  "size": "md"
                               },
                               {
                                  "components": [],
                                  "width": 6,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "size": "md"
                               }
                            ],
                            "type": "columns",
                            "$$hashKey": "object:786",
                            "label": "Columns"
                         }
                      ],
                      "width": 5,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:775",
                      "size": "md"
                   },
                   {
                      "components": [],
                      "width": 2,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:776",
                      "size": "md"
                   },
                   {
                      "components": [
                         {
                            "input": false,
                            "tableView": true,
                            "key": "columns",
                            "columns": [
                               {
                                  "components": [
                                     {
                                        "key": "html42",
                                        "input": false,
                                        "tag": "h2",
                                        "attrs": [
                                           {
                                              "value": "",
                                              "attr": ""
                                           }
                                        ],
                                        "className": "declarationEntetePageAr",
                                        "content": "التصريح على الخط بالمستفيد الحقيقي",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1854",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     }
                                  ],
                                  "width": 12,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "$$hashKey": "object:1851",
                                  "size": "md"
                               },
                               {
                                  "components": [],
                                  "width": 6,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "size": "md"
                               }
                            ],
                            "type": "columns",
                            "$$hashKey": "object:811",
                            "label": "Columns"
                         },
                         {
                            "input": false,
                            "tableView": true,
                            "key": "columns2",
                            "columns": [
                               {
                                  "components": [
                                     {
                                        "key": "html3",
                                        "input": false,
                                        "tag": "div",
                                        "attrs": [
                                           {
                                              "value": "",
                                              "attr": ""
                                           }
                                        ],
                                        "content": "<div class='tooltipTriangleOuter ar'>\n</div>\n<div class='tooltipTriangleInner ar'>\n</div>",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1966",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html41",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size:30px;font-weight:bold",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationArTitre",
                                        "content": "كيفية التصريح",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:916",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html36",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "1.إعداد التصريح",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:917",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html37",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "2.طباعة التصريح",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:918",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html38",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "3.إمضاء التصريح من قبل الممثل القانوني للشركة",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:919",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html39",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "4.نسخة من بطاقة هوية المستفيد الحقيقي ومثلها للممثل القانوني",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:920",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html40",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "5.وصل خلاص بقيمة 20 د",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:921",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html59",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "font-size: 28px;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationListAr",
                                        "content": "6.إيداع التصريح في أقرب مكتب جهوي مقابل وصل",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:922",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "key": "html35",
                                        "input": false,
                                        "tag": "h2",
                                        "attrs": [
                                           {
                                              "value": "color:red",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "accueilDeclarationArNB",
                                        "content": "يجب أن يكون التصريح باللغة العربية فقط.",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:923",
                                        "hideOnChildrenHidden": false,
                                        "tableView": false,
                                        "label": "HTML"
                                     }
                                  ],
                                  "width": 12,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "$$hashKey": "object:830",
                                  "size": "md"
                               },
                               {
                                  "components": [],
                                  "width": 6,
                                  "offset": 0,
                                  "push": 0,
                                  "pull": 0,
                                  "size": "md"
                               }
                            ],
                            "type": "columns",
                            "$$hashKey": "object:812",
                            "label": "Columns"
                         }
                      ],
                      "width": 5,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:777",
                      "size": "md"
                   }
                ],
                "type": "columns",
                "$$hashKey": "object:2384",
                "label": "Columns"
             },
             {
                "input": true,
                "tableView": true,
                "label": "Script de modification de l'interface du wizard",
                "key": "var-scriptWizard",
                "hidden": true,
                "type": "textfield",
                "$$hashKey": "object:2514",
                "lockKey": true,
                "customDefaultValue": "if(window.language==\"fr\"){\n      $('body').addClass(\"ltr\");\n}else if(window.language==\"ar\"){\n      $('body').addClass(\"rtl\");\n}\n\nif(window.language==\"ar\"){\n   $('.btn-wizard-nav-next').html(\"موالي\");\n   $('.btn-wizard-nav-previous').html(\"عودة\");\n}else if(window.language==\"fr\"){\n   $('.btn-wizard-nav-next').html(\"Suivant\");\n   $('.btn-wizard-nav-previous').html(\"Précédent\");\n}\n\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").html(\"<b>إرسال التصريح</b>\");\nwindow.parent.$('.btn.btn-outline-default.lunch-process-btn').css(\"display\",\"none\");\nwindow.parent.$('.request-key-generator').css(\"display\",\"none\");",
                "calculateValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\nwindow.parent.$('.request-key-generator').css(\"display\",\"none\");"
             }
          ],
          "type": "panel",
          "$$hashKey": "object:1107",
          "tableView": false,
          "label": "Panel"
       },
       {
          "type": "panel",
          "title": "الشركة",
          "components": [
             {
                "key": "html8",
                "input": false,
                "tag": "h2",
                "attrs": [
                   {
                      "value": "color:rgb(36, 58, 81);font-weight:bold;text-align:right;",
                      "attr": "style"
                   }
                ],
                "className": "societeEntetePageAr",
                "content": "fr:INFORMATIONS RELATIVES A LA SOCIETE DECLARANTE|ar:معلومات تخص الشركة القائمة بالتصريح",
                "type": "htmlelement",
                "$$hashKey": "object:1173",
                "tableView": false,
                "label": "HTML"
             },
             {
                "key": "html53",
                "input": false,
                "tag": "hr",
                "attrs": [
                   {
                      "value": "margin-bottom:35px;margin-top:0px;border-top:2px solid rgb(36, 58, 81);",
                      "attr": "style"
                   }
                ],
                "type": "htmlelement",
                "$$hashKey": "object:1533",
                "tableView": false,
                "label": "HTML"
             },
             {
                "input": true,
                "tableView": true,
                "label": "Adresse du serveur",
                "key": "var-adresseServeur",
                "defaultValue": "192.168.1.53",
                "hidden": true,
                "type": "textfield",
                "lockKey": true,
                "$$hashKey": "object:1116"
             },
             {
                "input": true,
                "tableView": true,
                "label": "Port du serveur",
                "key": "var-port",
                "defaultValue": "80",
                "hidden": true,
                "type": "textfield",
                "$$hashKey": "object:1161",
                "lockKey": true
             },
             {
                "input": false,
                "tableView": true,
                "key": "columns7",
                "columns": [
                   {
                      "components": [
                         {
                            "key": "panel7",
                            "input": false,
                            "components": [
                               {
                                  "key": "panel5",
                                  "input": false,
                                  "components": [
                                     {
                                        "key": "html2",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "text-align:right;margin-top:2px;font-weight:x-large;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "idEntrepriseHeader",
                                        "content": "رقم المعرف الوحيد للشركات المرسمة بالسجل",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1001",
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns25",
                                        "columns": [
                                           {
                                              "components": [],
                                              "width": 3,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1038",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html12",
                                                    "input": false,
                                                    "tag": "a",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "rechercheEntreprise fa",
                                                    "content": "بحث",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:692",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 5,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1039",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-idEntreprise",
                                                    "placeholder": "fr:exemple 00000000A |ar:0000000A مثال",
                                                    "validate": {
                                                       "custom": "if((!input || input==\"\") && (!data[\"var-idRegistre\"] || data[\"var-idRegistre\"]==\"\")){\n     valid =\" الرجاء إدخال معرف شركة صحيح\";\n}else{\n    if(data[\"var-raisonSociale\"] && data[\"var-raisonSociale\"]!=\"\"){\n         valid = true;\n   \n    }else{\n         valid = \"الرجاء إدخال معرف صحيح\";\n    }\n}"
                                                    },
                                                    "type": "textfield",
                                                    "lockKey": true,
                                                    "customClass": "idEntrepriseInput",
                                                    "$$hashKey": "object:644",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:602",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:1002",
                                        "label": "Columns"
                                     }
                                  ],
                                  "type": "panel",
                                  "customClass": "idEntrepriseInputPanel",
                                  "$$hashKey": "object:988",
                                  "tableView": false,
                                  "label": "Panel"
                               },
                               {
                                  "type": "panel",
                                  "components": [
                                     {
                                        "key": "html15",
                                        "input": false,
                                        "tag": "h3",
                                        "attrs": [
                                           {
                                              "value": "margin-right:auto;margin-left:auto;text-align:right;",
                                              "attr": "style"
                                           }
                                        ],
                                        "className": "erreurEntreprise",
                                        "content": "لم يتم العثور على نتائج",
                                        "type": "htmlelement",
                                        "$$hashKey": "object:1012",
                                        "tableView": false,
                                        "label": "HTML"
                                     },
                                     {
                                        "input": true,
                                        "tableView": true,
                                        "label": "",
                                        "key": "var-raisonSociale",
                                        "type": "textfield",
                                        "lockKey": true,
                                        "disabled": true,
                                        "$$hashKey": "object:1013"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns26",
                                        "columns": [
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-idEntrepriseValide",
                                                    "type": "textfield",
                                                    "lockKey": true,
                                                    "disabled": true,
                                                    "$$hashKey": "object:1009",
                                                    "customClass": "infosEntrepriseResultBenef",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 8,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:573",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html25",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "fr:Identifiant unique|ar:المعرف الوحيد",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:964",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:574",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:567",
                                        "label": "Columns"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns27",
                                        "columns": [
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-formeJuridique",
                                                    "type": "textfield",
                                                    "lockKey": true,
                                                    "disabled": true,
                                                    "$$hashKey": "object:1284",
                                                    "customClass": "infosEntrepriseResultBenef",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 8,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1062",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html21",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "fr:Forme juridique|ar:الشكل القانوني",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:1239",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 },
                                                 {
                                                    "key": "html20",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "margin-top:24px;font-weight:x-large;",
                                                          "attr": "style"
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "الاسم الاجتماعي",
                                                    "type": "htmlelement",
                                                    "customConditional": "show = false;",
                                                    "$$hashKey": "object:1194",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1063",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:1056",
                                        "label": "Columns"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns28",
                                        "columns": [
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-adresseEntreprise",
                                                    "type": "textarea",
                                                    "lockKey": true,
                                                    "customClass": "adresseEntreprise infosEntrepriseResultBenef",
                                                    "disabled": true,
                                                    "$$hashKey": "object:1514",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 8,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1337",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html22",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "fr:Adresse|ar:العنوان",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:1469",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1338",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:1331",
                                        "label": "Columns"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns29",
                                        "columns": [
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-villeEntreprise",
                                                    "type": "textfield",
                                                    "lockKey": true,
                                                    "disabled": true,
                                                    "$$hashKey": "object:1744",
                                                    "customClass": "infosEntrepriseResultBenef",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 8,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1567",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html24",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "fr:Ville|ar:المدينة",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:1699",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1568",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:1561",
                                        "label": "Columns"
                                     },
                                     {
                                        "input": false,
                                        "tableView": true,
                                        "key": "columns30",
                                        "columns": [
                                           {
                                              "components": [
                                                 {
                                                    "input": true,
                                                    "tableView": true,
                                                    "label": "",
                                                    "key": "var-bureauRegional",
                                                    "type": "textfield",
                                                    "lockKey": true,
                                                    "disabled": true,
                                                    "$$hashKey": "object:1975",
                                                    "customClass": "infosEntrepriseResultBenef",
                                                    "hideOnChildrenHidden": false
                                                 }
                                              ],
                                              "width": 8,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1797",
                                              "size": "md"
                                           },
                                           {
                                              "components": [
                                                 {
                                                    "key": "html23",
                                                    "input": false,
                                                    "tag": "h3",
                                                    "attrs": [
                                                       {
                                                          "value": "",
                                                          "attr": ""
                                                       }
                                                    ],
                                                    "className": "formulaireInfosSocieteHeaderAr",
                                                    "content": "fr:Bureau régional|ar:المكتب الجهوي",
                                                    "type": "htmlelement",
                                                    "$$hashKey": "object:1929",
                                                    "hideOnChildrenHidden": false,
                                                    "tableView": false,
                                                    "label": "HTML"
                                                 }
                                              ],
                                              "width": 4,
                                              "offset": 0,
                                              "push": 0,
                                              "pull": 0,
                                              "$$hashKey": "object:1798",
                                              "size": "md"
                                           }
                                        ],
                                        "type": "columns",
                                        "$$hashKey": "object:1791",
                                        "label": "Columns"
                                     },
                                     {
                                        "input": true,
                                        "tableView": true,
                                        "label": "JS",
                                        "key": "var-scriptJSInfosEntreprise",
                                        "hidden": true,
                                        "type": "textfield",
                                        "lockKey": true,
                                        "customDefaultValue": "$('.formio-component-var-idEntreprise input').css({\"unicode-bidi\":\"embed\",\"direction\":\"ltr\",\"text-align\":\"right\"});\n$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\n$('.rechercheEntreprise').unbind(\"click\").click(function(){\nif(formContainer.data['var-idEntreprise'] && formContainer.data['var-idEntreprise']!=\"\"){\n   var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/beneficiaires?identifiant='\"+formContainer.data['var-idEntrepriseValide']+\"'&actifs=0\";\n$.ajax(\n{\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \tif(data[0]!=undefined && data[0]!=null){\n                \tformContainer.data[\"var-beneficiairesDG\"]=JSON.parse(JSON.stringify(data));\n\t        }\n           }\n });\n\n\n\nvar urlEntreprise= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/entrepriseoracle?identifiant='\"+formContainer.data['var-idEntreprise'].replace(/ /g,'')+\"'\";\n\n$.ajax(\n{\n             url: urlEntreprise,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \tif(data[0]!=undefined && data[0]!=null){\n                        formContainer.getComponentById($('.formio-component-var-idEntreprise').attr(\"id\")).component.validate.custom=\"if(input && input!=\\\"\\\")valid=true\";\n                        $('.panelEntreprise').css(\"display\",\"block\");\n                        $('.erreurEntreprise').css(\"display\",\"none\");\n                        $('.msgNvSociete').css(\"display\",\"none\");\n                \tformContainer.getComponentById($('.formio-component-var-idEntrepriseValide').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-idEntreprise').attr(\"id\")).getValue().replace(/ /g,''));\n                        formContainer.data[\"var-idEntrepriseValide\"]=formContainer.getComponentById($('.formio-component-var-idEntreprise').attr(\"id\")).getValue().replace(/ /g,'');\n                        formContainer.getComponentById($('.formio-component-var-raisonSociale').attr(\"id\")).setValue(data[0].raison_sociale);\n                        formContainer.data[\"var-raisonSociale\"]=data[0].raison_sociale;\n\t\t\tformContainer.getComponentById($('.formio-component-var-formeJuridique').attr(\"id\")).setValue(data[0].forme_juridique);\n                         formContainer.data[\"var-formeJuridique\"]=data[0].forme_juridique;\n\t\t\tformContainer.getComponentById($('.formio-component-var-adresseEntreprise').attr(\"id\")).setValue(data[0].adresse);\n                        formContainer.data[\"var-adresseEntreprise\"]=data[0].adresse;\n\t\t\tformContainer.getComponentById($('.formio-component-var-villeEntreprise').attr(\"id\")).setValue(data[0].ville);\n                        formContainer.data[\"var-villeEntreprise\"]=data[0].ville;\n\t\t\tformContainer.getComponentById($('.formio-component-var-bureauRegional').attr(\"id\")).setValue(data[0].bureau_regional);\n                        formContainer.data[\"var-bureauRegional\"]=data[0].bureau_regional;\n\n                        \n                        var arabic = /[\\u0600-\\u06FF]/;\n$('.panelEntreprise .panel-body input,.panelEntreprise .panel-body textarea').each(function(index,element){\n\tif(!arabic.test($(this).val())){\n\t\t\n    \t$(this).css({\"unicode-bidi\":\"embed\",\"direction\":\"ltr\",\"text-align\":\"right\"});\n\t}else{\n    \t$(this).css({\"unicode-bidi\":\"embed\",\"direction\":\"rtl\",\"text-align\":\"right\"});\n\t}\n});\n\n\n                }else{\n                        formContainer.getComponentById($('.formio-component-var-idEntreprise').attr(\"id\")).component.validate.custom=\"valid=\\\"Veuillez saisir un identifiant valide\\\"\";\n                        $('.panelEntreprise').css(\"display\",\"none\");\n                        $('.erreurEntreprise').css(\"display\",\"block\");\n                        $('.msgNvSociete').css(\"display\",\"block\");\n                \tformContainer.getComponentById($('.formio-component-var-raisonSociale').attr(\"id\")).setValue(\"\");\n                        formContainer.data[\"var-raisonSociale\"]=\"\";\n\t\t\tformContainer.getComponentById($('.formio-component-var-formeJuridique').attr(\"id\")).setValue(\"\");\n                        formContainer.data[\"var-formeJuridique\"]=\"\";\n\t\t\tformContainer.getComponentById($('.formio-component-var-adresseEntreprise').attr(\"id\")).setValue(\"\");\n                        formContainer.data[\"var-adresseEntreprise\"]=\"\";\n\t\t\tformContainer.getComponentById($('.formio-component-var-villeEntreprise').attr(\"id\")).setValue(\"\");\n                        formContainer.data[\"var-villeEntreprise\"]=\"\";\n\t\t\tformContainer.getComponentById($('.formio-component-var-bureauRegional').attr(\"id\")).setValue(\"\");\n                        formContainer.data[\"var-bureauRegional\"]=\"\";\n                        \n\t\t\t\t}\n            }\n });\n\n\n}\n});",
                                        "calculateValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\nif(window.parent.$('iframe').attr(\"scrolling\")==\"no\"){\nwindow.parent.$('iframe').prop(\"scrolling\",\"yes\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\n}",
                                        "$$hashKey": "object:1015"
                                     }
                                  ],
                                  "input": false,
                                  "key": "page1",
                                  "customClass": "panelEntreprise",
                                  "$$hashKey": "object:989",
                                  "tableView": false,
                                  "label": "Panel"
                               }
                            ],
                            "type": "panel",
                            "customClass": "panelRechercheSteBenef",
                            "$$hashKey": "object:978",
                            "hideOnChildrenHidden": false,
                            "tableView": false,
                            "label": "Panel"
                         },
                         {
                            "key": "panel6",
                            "input": false,
                            "components": [
                               {
                                  "key": "html45",
                                  "input": false,
                                  "tag": "h4",
                                  "attrs": [
                                     {
                                        "value": "font-size:22px;",
                                        "attr": "style"
                                     }
                                  ],
                                  "className": "msgNvSociete",
                                  "content": "بالنسبة للذات المعنوية التي في طور التأسيس، يرجى تنزيل المطبوعة المصاحبة وتعميرها و إمضائها من الممثل القانوني ثم إيداعها مع الوثائق الموجبة لتأسيس الذات المعنوية",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:1317",
                                  "tableView": false,
                                  "label": "HTML"
                               },
                               {
                                  "key": "html48",
                                  "input": false,
                                  "tag": "a",
                                  "attrs": [
                                     {
                                        "value": "http://www.beneficiaire-effectif.tn/RNE_FORM/formulaire_beneficiaire_effectif_v2.pdf",
                                        "attr": "href"
                                     },
                                     {
                                        "value": "_blank",
                                        "attr": "target"
                                     }
                                  ],
                                  "className": "msgNvSociete fa btnFormSteEnCours",
                                  "content": "تنزيل المطبوعة",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:1318",
                                  "tableView": false,
                                  "label": "HTML"
                               }
                            ],
                            "type": "panel",
                            "customClass": "panelBenefSteEnCours msgNvSociete",
                            "$$hashKey": "object:1306",
                            "hideOnChildrenHidden": false,
                            "tableView": false,
                            "label": "Panel"
                         }
                      ],
                      "width": 12,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:609",
                      "size": "md"
                   },
                   {
                      "components": [],
                      "width": 6,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "size": "md"
                   }
                ],
                "type": "columns",
                "$$hashKey": "object:2955",
                "label": "Columns"
             }
          ],
          "input": false,
          "key": "page2",
          "$$hashKey": "object:309",
          "tableView": false,
          "label": "Panel"
       },
       {
          "type": "panel",
          "title": "المستفيدين الحقيقيين",
          "components": [
             {
                "type": "panel",
                "components": [
                   {
                      "input": true,
                      "tableView": true,
                      "label": "initialisation de la page des bénéficiaires",
                      "key": "var-initBenefPage",
                      "defaultValue": "false",
                      "hidden": true,
                      "type": "textfield",
                      "lockKey": true,
                      "$$hashKey": "object:249"
                   },
                   {
                      "input": true,
                      "tableView": true,
                      "label": "mode: ajout - edition",
                      "key": "var-mode",
                      "hidden": true,
                      "type": "textfield",
                      "lockKey": true,
                      "$$hashKey": "object:4904"
                   },
                   {
                      "input": true,
                      "tableView": true,
                      "label": "id du beneficiaires à mettre à jour",
                      "key": "var-idBenef",
                      "hidden": true,
                      "type": "textfield",
                      "$$hashKey": "object:634",
                      "lockKey": true
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns23",
                      "columns": [
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1397",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1398",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "inputType": "number",
                                  "label": "fr:Nombre total des bénéficiaires à déclarer|ar:عدد المستفيدين الحقيقيين",
                                  "key": "var-nbTotalBenefs",
                                  "validate": {
                                     "required": true,
                                     "min": 0,
                                     "integer": true,
                                     "custom": "if(value == 0){\n   valid = \"الرجاء إدخال عدد المستفيدين الحقيقيين\"\n}else if(value != data[\"var-beneficiairesDG\"].length){\n   valid = \"  الرجاء إضافة عدد المستفيدين المناسب في القائمة أسفله\"\n}else{\n  valid = true;\n}"
                                  },
                                  "type": "number",
                                  "$$hashKey": "object:1551",
                                  "lockKey": true,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1484",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:1391",
                      "label": "Columns"
                   },
                   {
                      "key": "html44",
                      "input": false,
                      "tag": "h2",
                      "attrs": [
                         {
                            "value": "color:rgb(36, 58, 81);font-weight:bold;text-align:right;",
                            "attr": "style"
                         }
                      ],
                      "className": "beneficiaireEntetePageAr",
                      "content": "الرجاء تعمير قائمة المستفيدين الحقيقيين",
                      "type": "htmlelement",
                      "$$hashKey": "object:771",
                      "customConditional": "show = (data[\"var-nbTotalBenefs\"]>0);",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "key": "html57",
                      "input": false,
                      "tag": "hr",
                      "attrs": [
                         {
                            "value": "margin-top:0px;border-top:2px solid rgb(36, 58, 81);",
                            "attr": "style"
                         }
                      ],
                      "type": "htmlelement",
                      "$$hashKey": "object:3124",
                      "customConditional": "show = (data[\"var-nbTotalBenefs\"]>0);",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "ayd": {
                         "hideAdd": true,
                         "hideRemove": false,
                         "source": "",
                         "dataPath": ""
                      },
                      "input": true,
                      "components": [
                         {
                            "input": true,
                            "tableView": true,
                            "label": "",
                            "key": "id",
                            "type": "textfield",
                            "hideLabel": true,
                            "lockKey": true,
                            "customConditional": "show = false;"
                         },
                         {
                            "input": true,
                            "tableView": true,
                            "label": "",
                            "key": "label",
                            "type": "textarea",
                            "hideLabel": true,
                            "lockKey": true,
                            "disabled": true
                         }
                      ],
                      "tableView": true,
                      "label": "",
                      "key": "var-beneficiairesDG",
                      "type": "datagrid",
                      "lockKey": true,
                      "$$hashKey": "object:2025",
                      "customConditional": "show = (data[\"var-nbTotalBenefs\"]>0);"
                   },
                   {
                      "key": "html13",
                      "input": false,
                      "tag": "a",
                      "attrs": [
                         {
                            "value": "",
                            "attr": ""
                         }
                      ],
                      "className": "ajoutBenefBtn",
                      "content": "fr:+ Ajouter Bénéficiaire|ar:إضافة مستفيد +",
                      "type": "htmlelement",
                      "customConditional": "show = (formContainer.data[\"var-nbTotalBenefs\"]>formContainer.data[\"var-beneficiairesDG\"].length);",
                      "$$hashKey": "object:837",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns9",
                      "columns": [
                         {
                            "components": [],
                            "width": 3,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:862",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:863",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 3,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:864",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:800",
                      "customConditional": "show = (data[\"var-nbTotalBenefs\"]>0);",
                      "label": "Columns"
                   }
                ],
                "input": false,
                "key": "page3",
                "theme": "warning",
                "$$hashKey": "object:2015",
                "customClass": "panelDatagrid",
                "tableView": false,
                "label": "Panel"
             },
             {
                "key": "panel",
                "input": false,
                "components": [
                   {
                      "key": "html10",
                      "input": false,
                      "tag": "h2",
                      "attrs": [
                         {
                            "value": "",
                            "attr": ""
                         }
                      ],
                      "content": "Entreprise",
                      "type": "htmlelement",
                      "$$hashKey": "object:783",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "key": "html19",
                      "input": false,
                      "tag": "h4",
                      "attrs": [
                         {
                            "value": "",
                            "attr": ""
                         }
                      ],
                      "className": "infosBenefIdentite",
                      "content": "fr:Informations sur l'identité du bénéficiaire effectif|ar:معلومات تخص المستفيد الحقيقي في الشركة",
                      "type": "htmlelement",
                      "$$hashKey": "object:1910",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "key": "html51",
                      "input": false,
                      "tag": "hr",
                      "attrs": [
                         {
                            "value": "margin-top:0px;border-top:2px solid #002548;",
                            "attr": "style"
                         }
                      ],
                      "type": "htmlelement",
                      "$$hashKey": "object:781",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns8",
                      "columns": [
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Num identité|ar:رقم الهوية",
                                  "key": "var-numIdentite",
                                  "validate": {
                                     "required": true,
                                     "custom": "if(data['var-typePieceIdentite']== \"cin\"){\n   /*formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).component.validate.pattern = \"^[0-9]{8}$\";\n  if(!formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).checkValidity()){\n      valid = \"Le numéro de la cin doit être formé de 8 chiffres\";\n  }else{\n     valid = true;\n  }*/\n\nif (input.match(/^[0-9]{8}$/)) {\n    valid = true;\n}else{\n    valid = \"رقم ب.ت.و يجب أن يكون متكون من 8 أرقام\";\n}\n\n}"
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:687",
                                  "hideOnChildrenHidden": false
                               },
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Nom de jeune fille|ar:اللقب قبل الزواج",
                                  "key": "var-nomJeuneFille",
                                  "conditional": {
                                     "show": "true",
                                     "when": "var-genre",
                                     "eq": "madame"
                                  },
                                  "type": "textfield",
                                  "$$hashKey": "object:2490",
                                  "lockKey": true,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1147",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Type pièce identité|ar:نوع بطاقة الهوية",
                                  "key": "var-typePieceIdentite",
                                  "data": {
                                     "sort": true,
                                     "values": [
                                        {
                                           "value": "passeport",
                                           "label": "fr:Passeport|ar:جواز سفر",
                                           "$$hashKey": "object:772"
                                        },
                                        {
                                           "value": "cin",
                                           "label": "fr:CIN|ar:ب.ت.و",
                                           "$$hashKey": "object:773"
                                        },
                                        {
                                           "value": "carteDeResidence",
                                           "label": "fr:Carte de résidence|ar:بطاقة الإقامة",
                                           "$$hashKey": "object:774"
                                        }
                                     ]
                                  },
                                  "validate": {
                                     "required": true,
                                     "custom": "if(!input || input==\"\"){\nvalid = \"الرجاء تعمير المعلومات\"\n}else valid = true;"
                                  },
                                  "type": "select",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:773",
                                  "hideOnChildrenHidden": false
                               },
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Nom|ar:اللقب",
                                  "key": "var-nomFamille",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:2398",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1148",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Genre|ar:الجنس",
                                  "key": "var-genre",
                                  "data": {
                                     "sort": true,
                                     "values": [
                                        {
                                           "value": "monsieur",
                                           "label": "fr:Monsieur|ar:السيد",
                                           "$$hashKey": "object:770"
                                        },
                                        {
                                           "value": "madame",
                                           "label": "fr:Madame|ar:السيدة",
                                           "$$hashKey": "object:771"
                                        }
                                     ]
                                  },
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "select",
                                  "lockKey": true,
                                  "$$hashKey": "object:635",
                                  "hideOnChildrenHidden": false
                               },
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Prénom|ar:الإسم",
                                  "key": "var-prenom",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "$$hashKey": "object:2354",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:659",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:1132",
                      "label": "Columns"
                   },
                   {
                      "input": true,
                      "tableView": true,
                      "label": "fr:Date de naissance|ar:تاريخ الولادة",
                      "key": "var-dateNaissance",
                      "fields": {
                         "day": {
                            "type": "text",
                            "placeholder": "اليوم"
                         },
                         "year": {
                            "type": "text",
                            "placeholder": "السنة"
                         }
                      },
                      "dayFirst": true,
                      "validate": {
                         "custom": "if(value){\nvar now= new Date();\nvar dateSaisie = new Date(value);\nif(Math.floor((now-dateSaisie)/(31536000000))>=18){\n   valid = true;\n\n}else{\n   valid = \"يجب أن يكون العمر يساوي أو يفوق 18 سنة\";\n}\n}",
                         "required": true
                      },
                      "type": "day",
                      "$$hashKey": "object:1885",
                      "lockKey": true,
                      "customClass": "dateNaissance"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns18",
                      "columns": [
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Lieu de naissance|ar:مكان الولادة",
                                  "key": "var-lieuNaissance",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:1856",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1639",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Pays de naissance|ar:بلد الولادة",
                                  "key": "var-paysNaissance",
                                  "data": {
                                     "sort": true,
                                     "values": [
                                        {
                                           "value": "",
                                           "label": "",
                                           "$$hashKey": "object:1226"
                                        }
                                     ],
                                     "url": "http://192.168.1.53/alfresco/s/rne/extranet/pays",
                                     "headers": [
                                        {
                                           "value": "",
                                           "key": ""
                                        }
                                     ]
                                  },
                                  "dataSrc": "url",
                                  "valueProperty": "label",
                                  "template": "<span>{{ item.label}}</span>",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:1064",
                                  "lockKey": true,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1640",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Nationalité|ar:الجنسية",
                                  "key": "var-nationalite",
                                  "data": {
                                     "sort": true,
                                     "values": [
                                        {
                                           "value": "",
                                           "label": ""
                                        }
                                     ],
                                     "url": "http://192.168.1.53/alfresco/s/rne/extranet/nationaliteoracle",
                                     "headers": [
                                        {
                                           "value": "",
                                           "key": ""
                                        }
                                     ]
                                  },
                                  "dataSrc": "url",
                                  "valueProperty": "id",
                                  "template": "<span>{{ item.nationalite }}</span>",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "select",
                                  "$$hashKey": "object:1912",
                                  "lockKey": true,
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1719",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:1633",
                      "label": "Columns"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns17",
                      "columns": [
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1248",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1249",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Résident à l'étranger ?|ar:هل انت مقيم بالخارج",
                                  "key": "var-residentEtranger",
                                  "values": [
                                     {
                                        "value": "oui",
                                        "label": "نعم"
                                     },
                                     {
                                        "value": "non",
                                        "label": "لا"
                                     }
                                  ],
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "radio",
                                  "lockKey": true,
                                  "inline": true,
                                  "$$hashKey": "object:1379",
                                  "customClass": "fa",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1328",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:1242",
                      "label": "Columns"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns3",
                      "columns": [
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Code Postal|ar:الترقيم البريدي",
                                  "key": "var-codePostal",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:2849",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:944",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Ville|ar:المدينة",
                                  "key": "var-villeBenef",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "customClass": "formulaireBeneficiaire",
                                  "$$hashKey": "object:2803",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:945",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Adresse du domicile|ar:العنوان الشخصي",
                                  "key": "var-adresseBenef",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "$$hashKey": "object:1077",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:1026",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:938",
                      "label": "Columns"
                   },
                   {
                      "key": "html47",
                      "input": false,
                      "tag": "h3",
                      "attrs": [
                         {
                            "value": "",
                            "attr": ""
                         }
                      ],
                      "className": "infosBenefControle",
                      "content": "معلومات تخص نوعية المراقبة التي يمارسها المستفيد الحقيقي على الشركة",
                      "type": "htmlelement",
                      "$$hashKey": "object:3188",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "key": "html46",
                      "input": false,
                      "tag": "hr",
                      "attrs": [
                         {
                            "value": "margin-top:0px;border-top:2px solid #002548;",
                            "attr": "style"
                         }
                      ],
                      "type": "htmlelement",
                      "$$hashKey": "object:927",
                      "tableView": false,
                      "label": "HTML"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns24",
                      "columns": [
                         {
                            "components": [
                               {
                                  "input": false,
                                  "tableView": true,
                                  "key": "columns19",
                                  "columns": [
                                     {
                                        "components": [
                                           {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "number",
                                              "label": "fr:Pourcentage du capital indirecte|ar:نسبة حيازة رأس المال الغير مباشرة",
                                              "key": "var-pourcentageCapitalInd",
                                              "defaultValue": "0",
                                              "validate": {
                                                 "required": true,
                                                 "min": 0,
                                                 "max": 100,
                                                 "integer": false,
                                                 "custom": "if(input){\nif((input + data[\"var-pourcentageCapital\"])>100){\n   valid = \"يجب أن لا يفوق مجموع نسبة حيازة رأس المال المباشرة والغير مباشرة 100 ٪\";\n}else{\n   var regex = /^\\d+(\\.\\d{0,2})?$/g;\n   if(regex.test(input)){\n        valid = true;\n   }else{\n        valid = \"يجب أن تكون النسبة متكونة من رقمين بعد الفاصل كحد أقصى\";\n   }\n}\n}"
                                              },
                                              "type": "number",
                                              "lockKey": true,
                                              "customConditional": "if(data[\"var-detentionCapital\"]){\nshow = (data[\"var-detentionCapital\"].includes(\"indirecte\"));\n}",
                                              "$$hashKey": "object:1173",
                                              "hideOnChildrenHidden": false
                                           }
                                        ],
                                        "width": 6,
                                        "offset": 0,
                                        "push": 0,
                                        "pull": 0,
                                        "$$hashKey": "object:1164",
                                        "size": "md"
                                     },
                                     {
                                        "components": [
                                           {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "number",
                                              "label": "fr:Pourcentage du capital détenu|ar: نسبة حيازة رأس المال المباشرة",
                                              "key": "var-pourcentageCapital",
                                              "defaultValue": "0",
                                              "validate": {
                                                 "required": true,
                                                 "min": 0,
                                                 "max": 100,
                                                 "integer": false,
                                                 "custom": "if(input){\nif((input + data[\"var-pourcentageCapitalInd\"])>100){\n   valid = \"يجب أن لا يفوق مجموع نسبة حيازة رأس المال المباشرة والغير مباشرة 100 ٪\";\n}else{\n   var regex = /^\\d+(\\.\\d{0,2})?$/g;\n   if(regex.test(input)){\n        valid = true;\n   }else{\n        valid = \"يجب أن تكون النسبة متكونة من رقمين بعد الفاصل كحد أقصى\";\n   }\n}\n}"
                                              },
                                              "type": "number",
                                              "lockKey": true,
                                              "customConditional": "if(data[\"var-detentionCapital\"]){\nshow = (data[\"var-detentionCapital\"].includes(\"directe\"));\n}",
                                              "$$hashKey": "object:1178",
                                              "hideOnChildrenHidden": false
                                           }
                                        ],
                                        "width": 6,
                                        "offset": 0,
                                        "push": 0,
                                        "pull": 0,
                                        "$$hashKey": "object:1165",
                                        "size": "md"
                                     }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:1158",
                                  "label": "Columns"
                               },
                               {
                                  "input": false,
                                  "tableView": true,
                                  "key": "columns20",
                                  "columns": [
                                     {
                                        "components": [
                                           {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "number",
                                              "label": "fr:Pourcentage du vote indirecte|ar: نسبة حيازة حقوق الاقتراع الغير مباشرة",
                                              "key": "var-pourcentageVoteInd",
                                              "defaultValue": "0",
                                              "validate": {
                                                 "required": true,
                                                 "min": 0,
                                                 "max": 100,
                                                 "integer": false,
                                                 "custom": "if(input){\nif((input + data[\"var-pourcentageVote\"])>100){\n   valid = \"يجب أن لا يفوق مجموع نسبة حيازة حقوق الإقتراع المباشرة والغير مباشرة 100 ٪\";\n}else{\n   var regex = /^\\d+(\\.\\d{0,2})?$/g;\n   if(regex.test(input)){\n        valid = true;\n   }else{\n        valid = \"يجب أن تكون النسبة متكونة من رقمين بعد الفاصل كحد أقصى\";\n   }\n}\n}"
                                              },
                                              "type": "number",
                                              "lockKey": true,
                                              "customConditional": "if(data[\"var-detentionVote\"]){\nshow = (data[\"var-detentionVote\"].includes(\"indirecte\"));\n}",
                                              "$$hashKey": "object:1251",
                                              "hideOnChildrenHidden": false
                                           }
                                        ],
                                        "width": 6,
                                        "offset": 0,
                                        "push": 0,
                                        "pull": 0,
                                        "$$hashKey": "object:1242",
                                        "size": "md"
                                     },
                                     {
                                        "components": [
                                           {
                                              "input": true,
                                              "tableView": true,
                                              "inputType": "number",
                                              "label": "fr:Pourcentage du vote détenu|ar: نسبة حيازة حقوق الاقتراع مباشرة",
                                              "key": "var-pourcentageVote",
                                              "defaultValue": "0",
                                              "validate": {
                                                 "required": true,
                                                 "min": 0,
                                                 "max": 100,
                                                 "integer": false,
                                                 "custom": "if(input){\nif((input + data[\"var-pourcentageVoteInd\"])>100){\n   valid = \"يجب أن لا يفوق مجموع نسبة حيازة حقوق الإقتراع المباشرة والغير مباشرة 100 ٪\";\n}else{\n   var regex = /^\\d+(\\.\\d{0,2})?$/g;\n   if(regex.test(input)){\n        valid = true;\n   }else{\n        valid = \"يجب أن تكون النسبة متكونة من رقمين بعد الفاصل كحد أقصى\";\n   }\n}\n}"
                                              },
                                              "type": "number",
                                              "lockKey": true,
                                              "customConditional": "if(data[\"var-detentionVote\"]){\nshow = (data[\"var-detentionVote\"].includes(\"directe\"));\n}",
                                              "$$hashKey": "object:1256",
                                              "hideOnChildrenHidden": false
                                           }
                                        ],
                                        "width": 6,
                                        "offset": 0,
                                        "push": 0,
                                        "pull": 0,
                                        "$$hashKey": "object:1243",
                                        "size": "md"
                                     }
                                  ],
                                  "type": "columns",
                                  "$$hashKey": "object:1236",
                                  "label": "Columns"
                               }
                            ],
                            "width": 5,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:846",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "",
                                  "key": "var-detentionCapital",
                                  "values": [
                                     {
                                        "value": "directe",
                                        "label": "مباشر و/أو"
                                     },
                                     {
                                        "value": "indirecte",
                                        "label": "غير مباشرة بنسبة تفوق 20% من رأس المال"
                                     }
                                  ],
                                  "inline": true,
                                  "multiple": true,
                                  "validate": {
                                     "custom": "if(formContainer.data[\"var-detentionCapital\"].length == 0 && formContainer.data[\"var-detentionVote\"].length == 0){\n   valid = \"الرجاء إختيار نوعية الحيازة\"\n}else{\n  valid = true;\n}"
                                  },
                                  "type": "selectboxes",
                                  "lockKey": true,
                                  "conditional": {
                                     "show": "true",
                                     "when": "var-controleBenef",
                                     "eq": "detention"
                                  },
                                  "$$hashKey": "object:1051",
                                  "customClass": "natureDetention fa",
                                  "hideOnChildrenHidden": false,
                                  "inputType": "checkbox"
                               },
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "",
                                  "key": "var-detentionVote",
                                  "values": [
                                     {
                                        "value": "directe",
                                        "label": "مباشر و/أو"
                                     },
                                     {
                                        "value": "indirecte",
                                        "label": "غير مباشرة بنسبة تفوق 20% من حقوق الاقتراع"
                                     }
                                  ],
                                  "inline": true,
                                  "multiple": true,
                                  "validate": {
                                     "custom": "if(formContainer.data[\"var-detentionCapital\"].length == 0 && formContainer.data[\"var-detentionVote\"].length == 0){\n   valid = \"الرجاء إختيار نوعية الحيازة\"\n}else{\n  valid = true;\n}"
                                  },
                                  "type": "selectboxes",
                                  "lockKey": true,
                                  "conditional": {
                                     "show": "true",
                                     "when": "var-controleBenef",
                                     "eq": "detention"
                                  },
                                  "$$hashKey": "object:1104",
                                  "customClass": "natureDetention fa",
                                  "hideOnChildrenHidden": false,
                                  "inputType": "checkbox"
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:847",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Nature du contrôle|ar:نوعية الرقابة",
                                  "key": "var-controleBenef",
                                  "values": [
                                     {
                                        "value": "detention",
                                        "label": "أ: حيازة رأس المال"
                                     },
                                     {
                                        "value": "exercice",
                                        "label": "ب: الرقابة أو السيطرة"
                                     },
                                     {
                                        "value": "representant",
                                        "label": "ج: المسير الرئيسي"
                                     }
                                  ],
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "radio",
                                  "lockKey": true,
                                  "inline": false,
                                  "customClass": "nature fa",
                                  "$$hashKey": "object:993",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 3,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:934",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:840",
                      "label": "Columns"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns4",
                      "columns": [
                         {
                            "components": [],
                            "width": 5,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:993",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 7,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:994",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "conditional": {
                         "show": "true",
                         "when": "var-controleBenef",
                         "eq": "detention"
                      },
                      "$$hashKey": "object:1345",
                      "label": "Columns"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns5",
                      "columns": [
                         {
                            "components": [],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:928",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:930",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:926",
                      "label": "Columns"
                   },
                   {
                      "input": true,
                      "tableView": true,
                      "label": "fr:Date à laquelle la personne est devenue bénéficiaire effectif|ar:التاريخ الذي أصبح فيه الشخص مستفيدا حقيقيا",
                      "key": "var-dateEffectiveBenef",
                      "fields": {
                         "day": {
                            "type": "text",
                            "placeholder": "اليوم"
                         },
                         "year": {
                            "type": "text",
                            "placeholder": "السنة"
                         }
                      },
                      "dayFirst": true,
                      "validate": {
                         "required": true
                      },
                      "type": "day",
                      "lockKey": true,
                      "$$hashKey": "object:2550"
                   },
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns10",
                      "columns": [
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:951",
                            "size": "md"
                         },
                         {
                            "components": [],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:952",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "key": "html14",
                                  "input": false,
                                  "tag": "a",
                                  "attrs": [
                                     {
                                        "value": "",
                                        "attr": ""
                                     }
                                  ],
                                  "className": "confirmAjoutBenefBtn",
                                  "content": "تسجيل",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:1008",
                                  "hideOnChildrenHidden": false,
                                  "tableView": false,
                                  "label": "HTML"
                               },
                               {
                                  "key": "html9",
                                  "input": false,
                                  "tag": "a",
                                  "attrs": [
                                     {
                                        "value": "",
                                        "attr": ""
                                     }
                                  ],
                                  "className": "annulerBenefBtn",
                                  "content": "إلغاء",
                                  "type": "htmlelement",
                                  "$$hashKey": "object:1074",
                                  "hideOnChildrenHidden": false,
                                  "tableView": false,
                                  "label": "HTML"
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:953",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:945",
                      "label": "Columns"
                   }
                ],
                "type": "panel",
                "$$hashKey": "object:3419",
                "customConditional": "/*show=(data[\"var-mode\"]==\"ajout\"||data[\"var-mode\"]==\"edition\");*/",
                "customClass": "panelFormulaireBeneficiaire",
                "tableView": false,
                "label": "Panel"
             },
             {
                "input": true,
                "tableView": true,
                "label": "Script JS",
                "key": "var-scriptJS",
                "hidden": true,
                "type": "textfield",
                "lockKey": true,
                "customDefaultValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\nwindow.parent.$(\"button.btn.btn-outline-default.lunch-process-btn[_ngcontent-c6]\").insertAfter(window.parent.$(\"div.tab-content.card\").parent());\nwindow.parent.$(\"button.btn.btn-outline-default.lunch-process-btn[_ngcontent-c6]\").css(\"margin-left\",\"auto\");\nwindow.parent.$(\"button.btn.btn-outline-default.lunch-process-btn[_ngcontent-c6]\").css(\"margin-right\",\"auto\");\n\n\nvar arabic = /[\\u0600-\\u06FF]/;\n$('.panelFormulaireBeneficiaire .panel-body input,.panelFormulaireBeneficiaire .panel-body textarea').each(function(index,element){\n\tif(!arabic.test($(this).val())&&$(this).val()!=\"\"){\n    \t$(this).css({\"unicode-bidi\":\"embed\",\"direction\":\"ltr\",\"text-align\":\"right\"});\n\t}else{\n    \t$(this).css({\"unicode-bidi\":\"embed\",\"direction\":\"rtl\",\"text-align\":\"right\"});\n\t}\n\n});\n\n\n//if(formContainer.data['var-initBenefPage']==\"false\"){\n\nif(formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).rows.length==0 || formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).rows.length!=data[\"var-nbTotalBenefs\"]){\n   $('.btn-wizard-nav-next').prop(\"disabled\",\"true\");\n}else{\n   $('.btn-wizard-nav-next').prop(\"disabled\",false);\n}\n\n\nformContainer.data[\"var-idEntreprise\"]=formContainer.data[\"var-idEntrepriseValide\"];\nif($('.nature').children('span').length==0){\n\t$('<span class=\"glyphicon glyphicon-question-sign\" style=\"margin-left:2px;\"></span>').insertBefore('.nature .input-group-radio');\nif(window.language==\"ar\"){\n    $('<span class=\"help-block\" style=\"display:initial !important;margin-left:2px;\">أمر حكومي عدد 54 لسنة 2019 مؤرخ في 21 جانفي 2019 يتعلق بضبط اليات و معايير تحديد المستفيد الحقيقي</span>').insertAfter('.nature .glyphicon-question-sign');\n\n\n$('.nature .glyphicon-question-sign').unbind(\"hover\").hover(function(){\n            $(this).siblings('.help-block').css('right',$(this).width()+130);\n            $(this).siblings('.help-block').css('font-weight',\"bold\");\n            $(this).siblings('.help-block').css('text-align','right');\n            $(this).siblings('.help-block').css('top', - $(this).height());\n            $(this).siblings('.help-block').css('visibility', 'visible');\n\t\t\t\n}, function(){\n    $(this).siblings('.help-block').css('visibility', 'hidden');\n});\n\n\n}else if(window.language==\"fr\"){\n    $('<span class=\"help-block\" style=\"display:initial !important;margin-left:2px;\">Exercice, par tout autre moyen définitif, direct ou indirect (autre que Détention) d\\'un pouvoir de control sur les organes de gestion, d\\'administration ou de direction de la société ou sur l\\'assemblée générale de ses associés ou actionnaires</span>').insertAfter('.nature .glyphicon-question-sign');\n\n$('.nature .glyphicon-question-sign').unbind(\"hover\").hover(function(){\n            $(this).siblings('.help-block').css('left',$(this).width()+130);\n            $(this).siblings('.help-block').css('top', - $(this).height());\n            $(this).siblings('.help-block').css('visibility', 'visible');\n\t\t\t\n}, function(){\n    $(this).siblings('.help-block').css('visibility', 'hidden');\n});\n\n\n}\n\n}\n\nformContainer.getComponentById($('.formio-component-var-initBenefPage').attr(\"id\")).setValue(\"true\");\n\n//$('.panelFormulaireBeneficiaire').css({\"visibility\":\"hidden\",\"position\":\"absolute\",\"display\":\"none\"});\n$('.panelFormulaireBeneficiaire h2').html(formContainer.data['var-raisonSociale']);\nvar idDG = $('.formio-component-var-beneficiairesDG').attr(\"id\");\nformContainer.getComponentById(idDG).component.ayd.source=\"http://\"+window.location.host+\"/alfresco/s/rne/extranet/beneficiaires?identifiant=%27\"+formContainer.data[\"var-idEntreprise\"]+\"%27&actifs=0\";\n\nif(JSON.stringify(formContainer.data[\"var-beneficiairesDG\"][0]) == \"{}\"){\n   formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).updateItems();\n}\n\n\n$('.annulerBenefBtn').unbind(\"click\").on(\"click\",function(){\n       formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"\");\n\t   $('.panelFormulaireBeneficiaire').css({\"opacity\":\"0\",\"transform\":\"translateY(-150%)\"});\n           setTimeout(function(){ $('.panelFormulaireBeneficiaire').css(\"display\",\"none\"); }, 200);\n\t   window.parent.$('iframe').prop(\"scrolling\",\"yes\");\n       window.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\n       window.$('.progress-indicator-parent').css(\"display\",\"block\");\n       window.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n});\n\n$('.confirmAjoutBenefBtn').unbind(\"click\").on(\"click\",function(){\n  if($('.panelFormulaireBeneficiaire .has-error:not(:hidden)').length<1){\n\t$('.panelFormulaireBeneficiaire').css({\"opacity\":\"0\",\"transform\":\"translateY(-150%)\"});\n\tsetTimeout(function(){ $('.panelFormulaireBeneficiaire').css(\"display\",\"none\"); }, 200);\n  if(formContainer.data[\"var-mode\"]==\"ajout\"){\nvar controle=\"\";\nif(data['var-controleBenef']==\"detention\"){\n   if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\" && data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle =\"&controle=detention&natureControle=Capital_Vote&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd']+\"&pourcentageVoteDirecte=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle = \"&controle=detention&natureControle=Vote&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageVoteDirect=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\"){\n   \t   controle = \"&controle=detention&natureControle=Capital&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd'];\n   }\n}else{\n     controle = \"&controle=\"+formContainer.data[\"var-controleBenef\"];\n}\n            //appel webservice ajout dans BD bénéficiaires après validation\n     var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/insertbeneficiaire?identifiant=\"+formContainer.data['var-idEntreprise']+\"&genre=\"+formContainer.data['var-genre']+\"&nom_jeune_fille=\"+formContainer.data[\"var-nomJeuneFille\"]+\"&prenom=\"+formContainer.data[\"var-prenom\"]+\"&type_piece_identite=\"+formContainer.data['var-typePieceIdentite']+\"&num_identite=\"+formContainer.data['var-numIdentite']+\"&nom_famille=\"+formContainer.data['var-nomFamille']+\"&adresseBenef=\"+formContainer.data['var-adresseBenef']+\"&nationalite=\"+formContainer.data['var-nationalite']+\"&pays_naissance=\"+formContainer.data['var-paysNaissance']+\"&lieu_naissance=\"+formContainer.data['var-lieuNaissance']+\"&date_naissance=\"+(formContainer.data['var-dateNaissance'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[0])+\"&resident_etranger=\"+formContainer.data['var-residentEtranger']+\"&villeBenef=\"+formContainer.data['var-villeBenef']+\"&code_postal=\"+formContainer.data['var-codePostal']+\"&dateEffective=\"+(formContainer.data['var-dateEffectiveBenef'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[0])+controle;\n    $.ajax(\n    {\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \t\n           }\n    });\nwindow.parent.$('iframe').prop(\"scrolling\",\"yes\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\nwindow.$('.progress-indicator-parent').css(\"display\",\"block\");\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n  }else if(formContainer.data[\"var-mode\"]==\"edition\"){\nvar controle=\"\";\nif(data['var-controleBenef']==\"detention\"){\n   if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\" && data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle =\"&controle=detention&natureControle=Capital_Vote&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd']+\"&pourcentageVoteDirecte=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle = \"&controle=detention&natureControle=Vote&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageVoteDirect=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\"){\n   \t   controle = \"&controle=detention&natureControle=Capital&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd'];\n   }\n}else{\n     controle = \"&controle=\"+data['var-controleBenef'];\n}\n\n     //appel webservice update dans BD bénéficiaires après validation\n     if(formContainer.data['var-idBenef'] && formContainer.data['var-idBenef'] !=\"\"){\n     var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/updatebeneficiaire?identifiant=\"+formContainer.data['var-idBenef']+\"&genre=\"+formContainer.data['var-genre']+\"&nom_jeune_fille=\"+formContainer.data[\"var-nomJeuneFille\"]+\"&prenom=\"+formContainer.data[\"var-prenom\"]+\"&type_piece_identite=\"+formContainer.data['var-typePieceIdentite']+\"&num_identite=\"+formContainer.data['var-numIdentite']+\"&nom_famille=\"+formContainer.data['var-nomFamille']+\"&adresseBenef=\"+formContainer.data['var-adresseBenef']+\"&nationalite=\"+formContainer.data['var-nationalite']+\"&pays_naissance=\"+formContainer.data['var-paysNaissance']+\"&lieu_naissance=\"+formContainer.data['var-lieuNaissance']+\"&date_naissance=\"+(formContainer.data['var-dateNaissance'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[0])+\"&resident_etranger=\"+formContainer.data['var-residentEtranger']+\"&villeBenef=\"+formContainer.data['var-villeBenef']+\"&code_postal=\"+formContainer.data['var-codePostal']+\"&dateEffective=\"+(formContainer.data['var-dateEffectiveBenef'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[0])+controle;\n    \n$.ajax(\n{\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \t\n            }\n    });\nwindow.parent.$('iframe').prop(\"scrolling\",\"yes\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\nwindow.$('.progress-indicator-parent').css(\"display\",\"block\");\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n}\n  }\n\n  formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"\");\n  formContainer.getComponentById(idDG).updateItems();  \n//cacher le formulaire après validation\n  //$('.panelFormulaireBeneficiaire').css({\"visibility\":\"hidden\",\"position\":\"absolute\",\"display\":\"none\"});\n}\n});\n\n$('.ajoutBenefBtn').unbind(\"click\").click(function(){\n   $('.panelFormulaireBeneficiaire').css(\"display\",\"block\");\n   setTimeout(function(){ \n   $('.panelFormulaireBeneficiaire').css({\"opacity\":\"1\",\"transform\":\"translateY(0)\"});\n    }, 200);\n   \n   window.parent.$('iframe').prop(\"scrolling\",\"no\");\n   window.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", true);\n   window.$('.progress-indicator-parent').css(\"display\",\"none\");\n   window.$('.wizard-nav-wrapper').css(\"display\",\"none\");\n\n   if(data[\"var-mode\"]!=\"ajout\"){\n      formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"ajout\")\n      //$('.panelFormulaireBeneficiaire').css({\"visibility\":\"visible\",\"position\":\"inherit\",\"display\":\"block\"});\n \nformContainer.getComponentById($('.formio-component-var-genre').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-genre').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-genre').attr(\"id\")+' button').click();\n$('body').click();\n\n//formContainer.getComponentById($(\".formio-component-var-genre\").attr(\"id\")).setValue(\"undefined\");\n\nformContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-typePieceIdentite').attr(\"id\")+' button').click();\n$('body').click();\n\n//                formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(\"\");\n                formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nomFamille').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nomJeuneFille').attr(\"id\")).setValue(undefined);\n\t\t\t   formContainer.getComponentById($('.formio-component-var-prenom').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-dateNaissance').attr(\"id\")).setValue(\"//\");\n               formContainer.getComponentById($('.formio-component-var-lieuNaissance').attr(\"id\")).setValue(undefined);\n               \n\nformContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-paysNaissance').attr(\"id\")+' button').click();\n$('body').click();\n\nformContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-nationalite').attr(\"id\")+' button').click();\n$('body').click();\n\n//formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-residentEtranger').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-adresseBenef').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-villeBenef').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-codePostal').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-controleBenef').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-pourcentageCapital').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-pourcentageCapitalInd').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-pourcentageVote').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-pourcentageVoteInd').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-dateEffectiveBenef').attr(\"id\")).setValue(\"//\");\n\n   }\n\n});\n\n\n$('.formio-component-var-beneficiairesDG tbody td:last-child').each(function(index,element){\n\tif($(element).children(\".editbenef\").length<1){\n\t\t$(element).append('<button type=\"button\" class=\"btn btn-default editbenef\" tabindex=\"-1\" ><span class=\"glyphicon glyphicon-pencil\"></span></button>');\n    }else{\n    \t$(element).children(\".editbenef\").prop(\"index\",index);\n\t}\n});\n\n$('.editbenef').unbind(\"click\").click(function(){\n\n//$('.panelFormulaireBeneficiaire').css({\"visibility\":\"visible\",\"position\":\"inherit\",\"display\":\"block\"});\t\n$('.panelFormulaireBeneficiaire').css(\"display\",\"block\");\n$('.panelFormulaireBeneficiaire').css({\"opacity\":\"1\",\"transform\":\"translateY(0)\"});\n\nwindow.parent.$('iframe').prop(\"scrolling\",\"no\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", true);\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"none\");\nwindow.$('.progress-indicator-parent').css(\"display\",\"none\");\n\nformContainer.getComponentById($('.formio-component-var-idBenef').attr(\"id\")).setValue(formContainer.data[\"var-beneficiairesDG\"][$('.editbenef').index(this)][\"id\"]);\n\nformContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"edition\");\n\nvar url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/getbeneficiaireinfos?identifiant=\"+formContainer.data['var-idBenef'];\n    \n$.ajax(\n{\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \tformContainer.getComponentById($(\".formio-component-var-genre\").attr(\"id\")).setValue(data[0].genre);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-nomJeuneFille').attr(\"id\")).setValue(data[0].nom_jeune_fille);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-prenom').attr(\"id\")).setValue(data[0].prenom);\n                formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(data[0].type_piece_identite);\n                formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).setValue(data[0].num_identite);\n               formContainer.getComponentById($('.formio-component-var-nomFamille').attr(\"id\")).setValue(data[0].nom_famille);\n               formContainer.getComponentById($('.formio-component-var-dateNaissance').attr(\"id\")).setValue(data[0].date_naissance.split(\"-\")[2]+\"/\"+data[0].date_naissance.split(\"-\")[1]+\"/\"+data[0].date_naissance.split(\"-\")[0]);\n               formContainer.getComponentById($('.formio-component-var-lieuNaissance').attr(\"id\")).setValue(data[0].lieu_naissance);\n               formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(data[0].pays_naissance);\n               formContainer.getComponentById($('.formio-component-var-residentEtranger').attr(\"id\")).setValue(data[0].resident_etranger);\n               formContainer.getComponentById($('.formio-component-var-adresseBenef').attr(\"id\")).setValue(data[0].adresse);\n               formContainer.getComponentById($('.formio-component-var-villeBenef').attr(\"id\")).setValue(data[0].ville);\n               formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(data[0].nationalite);\n               formContainer.getComponentById($('.formio-component-var-codePostal').attr(\"id\")).setValue(data[0].code_postal);\n               formContainer.getComponentById($('.formio-component-var-controleBenef').attr(\"id\")).setValue(data[0].controle_benef);\n               formContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).setValue(data[0].type_detention_capital.split(\",\"));\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageCapital').attr(\"id\")).setValue(data[0].pourcentage_capital);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageCapitalInd').attr(\"id\")).setValue(data[0].pourcentage_capital_Ind);\n\n\t\t\t   formContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).setValue(data[0].type_detention_vote.split(\",\"));\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageVote').attr(\"id\")).setValue(data[0].pourcentage_vote);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageVoteInd').attr(\"id\")).setValue(data[0].pourcentage_vote_ind);\n\n\t\t\t   formContainer.getComponentById($('.formio-component-var-dateEffectiveBenef').attr(\"id\")).setValue(data[0].date_effective.split(\"-\")[2]+\"/\"+data[0].date_effective.split(\"-\")[1]+\"/\"+data[0].date_effective.split(\"-\")[0]);\n            }\n    });\n\n});\n\n\n$('.btn-default .glyphicon-remove-circle').unbind('click').click(function(e){\n\t// envoyer les identifiants restants afin de supprimer les entrées qui n'existent pas dans cette liste\n\tconsole.log($(this).parent().parent().parent().index());\n    var ids=\"\";\n\tformContainer.data[\"var-beneficiairesDG\"].forEach(function(element,index){\n        if(index != $(this).parent().parent().parent().index()+1){\n            if(index<formContainer.data[\"var-beneficiairesDG\"].length-1){\n                ids+=element.id+\",\";\n            }else{\n                ids+=element.id;\n            }\n        }\n\t\t\n\t});\n\t\n    var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/deletebeneficiaire?identifiant=\"+ids+\"&idEntreprise=\"+formContainer.data['var-idEntreprise'];\n\n    $.ajax(\n    {\n                 url: url,\n                 async: false,\n                method: 'GET',\n                dataType:'json',\n                success: function (data) {\n                     var idDG = $('.formio-component-var-beneficiairesDG').attr(\"id\");\n                     formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).updateItems();\n                }\n     });\n\n});\n\n\n\nif(formContainer.data[\"var-controleBenef\"]==\"detention\" && data[\"var-detentionVote\"].length == 0 && data[\"var-detentionCapital\"].length == 0){\n\tformContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).component.validate.required = true;\n\tformContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).component.validate.required = true;\n}else{\nformContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).component.validate.required = false;\n\tformContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).component.validate.required = false;\n}\n\n\n//}",
                "calculateValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\n\nvar arabic = /[\\u0600-\\u06FF]/;\n$('.panelFormulaireBeneficiaire .panel-body input,.panelFormulaireBeneficiaire .panel-body textarea').each(function(index,element){\n\tif(!arabic.test($(this).val())){\n\t\t\n    \t$(this).css({\"direction\":\"ltr\",\"text-align\":\"right\"});\n\t}else{\n    \t$(this).css({\"direction\":\"rtl\",\"text-align\":\"right\"});\n\t}\n\n});\n\n\n//if(formContainer.data['var-initBenefPage']==\"false\"){\n\nif(formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).rows.length==0 || formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).rows.length!=data[\"var-nbTotalBenefs\"]){\n   $('.btn-wizard-nav-next').prop(\"disabled\",\"true\");\n}else{\n   $('.btn-wizard-nav-next').prop(\"disabled\",false);\n}\n\n\nformContainer.data[\"var-idEntreprise\"]=formContainer.data[\"var-idEntrepriseValide\"];\nif($('.nature').children('span').length==0){\n\t$('<span class=\"glyphicon glyphicon-question-sign\" style=\"margin-left:2px;\"></span>').insertBefore('.nature .input-group-radio');\nif(window.language==\"ar\"){\n    $('<span class=\"help-block\" style=\"display:initial !important;margin-left:2px;\">أمر حكومي عدد 54 لسنة 2019 مؤرخ في 21 جانفي 2019 يتعلق بضبط اليات و معايير تحديد المستفيد الحقيقي</span>').insertAfter('.nature .glyphicon-question-sign');\n\n\n$('.nature .glyphicon-question-sign').unbind(\"hover\").hover(function(){\n            $(this).siblings('.help-block').css('right',$(this).width()+130);\n            $(this).siblings('.help-block').css('font-weight',\"bold\");\n            $(this).siblings('.help-block').css('text-align','right');\n            $(this).siblings('.help-block').css('top', - $(this).height());\n            $(this).siblings('.help-block').css('visibility', 'visible');\n\t\t\t\n}, function(){\n    $(this).siblings('.help-block').css('visibility', 'hidden');\n});\n\n\n}else if(window.language==\"fr\"){\n    $('<span class=\"help-block\" style=\"display:initial !important;margin-left:2px;\">Exercice, par tout autre moyen définitif, direct ou indirect (autre que Détention) d\\'un pouvoir de control sur les organes de gestion, d\\'administration ou de direction de la société ou sur l\\'assemblée générale de ses associés ou actionnaires</span>').insertAfter('.nature .glyphicon-question-sign');\n\n$('.nature .glyphicon-question-sign').unbind(\"hover\").hover(function(){\n            $(this).siblings('.help-block').css('left',$(this).width()+130);\n            $(this).siblings('.help-block').css('top', - $(this).height());\n            $(this).siblings('.help-block').css('visibility', 'visible');\n\t\t\t\n}, function(){\n    $(this).siblings('.help-block').css('visibility', 'hidden');\n});\n\n\n}\n\n}\n\nformContainer.getComponentById($('.formio-component-var-initBenefPage').attr(\"id\")).setValue(\"true\");\n\n//$('.panelFormulaireBeneficiaire').css({\"visibility\":\"hidden\",\"position\":\"absolute\",\"display\":\"none\"});\n$('.panelFormulaireBeneficiaire h2').html(formContainer.data['var-raisonSociale']);\nvar idDG = $('.formio-component-var-beneficiairesDG').attr(\"id\");\nformContainer.getComponentById(idDG).component.ayd.source=\"http://\"+window.location.host+\"/alfresco/s/rne/extranet/beneficiaires?identifiant=%27\"+formContainer.data[\"var-idEntreprise\"]+\"%27&actifs=0\";\n\nif(JSON.stringify(formContainer.data[\"var-beneficiairesDG\"][0]) == \"{}\"){\n   formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).updateItems();\n}\n\n\n$('.annulerBenefBtn').unbind(\"click\").on(\"click\",function(){\n       formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"\");\n\t   $('.panelFormulaireBeneficiaire').css({\"opacity\":\"0\",\"transform\":\"translateY(-150%)\"});\n       setTimeout(function(){ $('.panelFormulaireBeneficiaire').css(\"display\",\"none\"); }, 200);\n\n       window.parent.$('iframe').prop(\"scrolling\",\"yes\");\n       window.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\n       window.$('.progress-indicator-parent').css(\"display\",\"block\");\n       window.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n});\n\n$('.confirmAjoutBenefBtn').unbind(\"click\").on(\"click\",function(){\n  if($('.panelFormulaireBeneficiaire .has-error:not(:hidden)').length<1){\n\tsetTimeout(function(){ $('.panelFormulaireBeneficiaire').css(\"display\",\"none\"); }, 200);\n        $('.panelFormulaireBeneficiaire').css({\"opacity\":\"0\",\"transform\":\"translateY(-150%)\"});\n  if(formContainer.data[\"var-mode\"]==\"ajout\"){\nvar controle=\"\";\nif(data['var-controleBenef']==\"detention\"){\n   if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\" && data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle =\"&controle=detention&natureControle=Capital_Vote&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd']+\"&pourcentageVoteDirecte=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle = \"&controle=detention&natureControle=Vote&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageVoteDirect=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\"){\n   \t   controle = \"&controle=detention&natureControle=Capital&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd'];\n   }\n}else{\n     controle = \"&controle=\"+formContainer.data[\"var-controleBenef\"];\n}\n            //appel webservice ajout dans BD bénéficiaires après validation\n     var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/insertbeneficiaire?identifiant=\"+formContainer.data['var-idEntreprise']+\"&genre=\"+formContainer.data['var-genre']+\"&nom_jeune_fille=\"+formContainer.data[\"var-nomJeuneFille\"]+\"&prenom=\"+formContainer.data[\"var-prenom\"]+\"&type_piece_identite=\"+formContainer.data['var-typePieceIdentite']+\"&num_identite=\"+formContainer.data['var-numIdentite']+\"&nom_famille=\"+formContainer.data['var-nomFamille']+\"&adresseBenef=\"+formContainer.data['var-adresseBenef']+\"&nationalite=\"+formContainer.data['var-nationalite']+\"&pays_naissance=\"+formContainer.data['var-paysNaissance']+\"&lieu_naissance=\"+formContainer.data['var-lieuNaissance']+\"&date_naissance=\"+(formContainer.data['var-dateNaissance'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[0])+\"&resident_etranger=\"+formContainer.data['var-residentEtranger']+\"&villeBenef=\"+formContainer.data['var-villeBenef']+\"&code_postal=\"+formContainer.data['var-codePostal']+\"&dateEffective=\"+(formContainer.data['var-dateEffectiveBenef'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[0])+controle;\n    $.ajax(\n    {\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \t\n           }\n    });\nwindow.parent.$('iframe').prop(\"scrolling\",\"yes\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\nwindow.$('.progress-indicator-parent').css(\"display\",\"block\");\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n  }else if(formContainer.data[\"var-mode\"]==\"edition\"){\nvar controle=\"\";\nif(data['var-controleBenef']==\"detention\"){\n   if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\" && data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle =\"&controle=detention&natureControle=Capital_Vote&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd']+\"&pourcentageVoteDirecte=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionVote'] && data['var-detentionVote'].toString()!=\"\"){\n      controle = \"&controle=detention&natureControle=Vote&typeControleVote=\"+formContainer.data['var-detentionVote'].toString()+\"&pourcentageVoteDirect=\"+formContainer.data['var-pourcentageVote']+\"&pourcentageVoteIndirecte=\"+formContainer.data['var-pourcentageVoteInd'];\n   }else if(data['var-detentionCapital'] && data['var-detentionCapital'].toString()!=\"\"){\n   \t   controle = \"&controle=detention&natureControle=Capital&typeControleDetention=\"+formContainer.data['var-detentionCapital'].toString()+\"&pourcentageDirecte=\"+formContainer.data['var-pourcentageCapital']+\"&pourcentageIndirecte=\"+formContainer.data['var-pourcentageCapitalInd'];\n   }\n}else{\n     controle = \"&controle=\"+data['var-controleBenef'];\n}\n\n     //appel webservice update dans BD bénéficiaires après validation\n     if(formContainer.data['var-idBenef'] && formContainer.data['var-idBenef'] !=\"\"){\n     var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/updatebeneficiaire?identifiant=\"+formContainer.data['var-idBenef']+\"&genre=\"+formContainer.data['var-genre']+\"&nom_jeune_fille=\"+formContainer.data[\"var-nomJeuneFille\"]+\"&prenom=\"+formContainer.data[\"var-prenom\"]+\"&type_piece_identite=\"+formContainer.data['var-typePieceIdentite']+\"&num_identite=\"+formContainer.data['var-numIdentite']+\"&nom_famille=\"+formContainer.data['var-nomFamille']+\"&adresseBenef=\"+formContainer.data['var-adresseBenef']+\"&nationalite=\"+formContainer.data['var-nationalite']+\"&pays_naissance=\"+formContainer.data['var-paysNaissance']+\"&lieu_naissance=\"+formContainer.data['var-lieuNaissance']+\"&date_naissance=\"+(formContainer.data['var-dateNaissance'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateNaissance'].split(\"/\")[0])+\"&resident_etranger=\"+formContainer.data['var-residentEtranger']+\"&villeBenef=\"+formContainer.data['var-villeBenef']+\"&code_postal=\"+formContainer.data['var-codePostal']+\"&dateEffective=\"+(formContainer.data['var-dateEffectiveBenef'].split(\"/\")[2]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[1]+\"-\"+formContainer.data['var-dateEffectiveBenef'].split(\"/\")[0])+controle;\n    \n$.ajax(\n{\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \t\n            }\n    });\nwindow.parent.$('iframe').prop(\"scrolling\",\"yes\");\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", false);\nwindow.$('.progress-indicator-parent').css(\"display\",\"block\");\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"block\");\n}\n  }\n\n  formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"\");\n  formContainer.getComponentById(idDG).updateItems();  \n//cacher le formulaire après validation\n  //$('.panelFormulaireBeneficiaire').css({\"visibility\":\"hidden\",\"position\":\"absolute\",\"display\":\"none\"});\n}\n});\n\n$('.ajoutBenefBtn').unbind(\"click\").click(function(){\n   $('.panelFormulaireBeneficiaire').css(\"display\",\"block\");\n   $('.panelFormulaireBeneficiaire').css({\"opacity\":\"1\",\"transform\":\"translateY(0)\"});   \n   window.parent.$('iframe').prop(\"scrolling\",\"no\");\n   window.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", true);\n   window.$('.progress-indicator-parent').css(\"display\",\"none\");\n   window.$('.wizard-nav-wrapper').css(\"display\",\"none\");\n\n   if(data[\"var-mode\"]!=\"ajout\"){\n      formContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"ajout\")\n      //$('.panelFormulaireBeneficiaire').css({\"visibility\":\"visible\",\"position\":\"inherit\",\"display\":\"block\"});\n      formContainer.getComponentById($('.formio-component-var-genre').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-genre').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-genre').attr(\"id\")+' button').click();\n$('body').click();\n\n//formContainer.getComponentById($(\".formio-component-var-genre\").attr(\"id\")).setValue(\"undefined\");\n\nformContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-typePieceIdentite').attr(\"id\")+' button').click();\n$('body').click();\n\n//                formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(\"\");\n                formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nomFamille').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nomJeuneFille').attr(\"id\")).setValue(undefined);\n\t\t\t   formContainer.getComponentById($('.formio-component-var-prenom').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-dateNaissance').attr(\"id\")).setValue(\"//\");\n               formContainer.getComponentById($('.formio-component-var-lieuNaissance').attr(\"id\")).setValue(undefined);\n               \n\nformContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-paysNaissance').attr(\"id\")+' button').click();\n$('body').click();\n\nformContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).choices.currentState.choices[0].value)\n$('#'+$('.formio-component-var-nationalite').attr(\"id\")+' button').click();\n$('body').click();\n\n//formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-residentEtranger').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-adresseBenef').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-villeBenef').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-codePostal').attr(\"id\")).setValue(undefined);\n               formContainer.getComponentById($('.formio-component-var-controleBenef').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-pourcentageCapital').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-pourcentageCapitalInd').attr(\"id\")).setValue(\"\");\n               formContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).setValue();\n               formContainer.getComponentById($('.formio-component-var-pourcentageVote').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-pourcentageVoteInd').attr(\"id\")).setValue(\"\");\n\t\t\t   formContainer.getComponentById($('.formio-component-var-dateEffectiveBenef').attr(\"id\")).setValue(\"//\");\n\n   }\n\n});\n\n\n$('.formio-component-var-beneficiairesDG tbody td:last-child').each(function(index,element){\n\tif($(element).children(\".editbenef\").length<1){\n\t\t$(element).append('<button type=\"button\" class=\"btn btn-default editbenef\" tabindex=\"-1\" ><span class=\"glyphicon glyphicon-pencil\"></span></button>');\n    }else{\n    \t$(element).children(\".editbenef\").prop(\"index\",index);\n\t}\n});\n\n$('.editbenef').unbind(\"click\").click(function(){\n\n//$('.panelFormulaireBeneficiaire').css({\"visibility\":\"visible\",\"position\":\"inherit\",\"display\":\"block\"});\t\nwindow.parent.$('iframe').prop(\"scrolling\",\"no\");\n$('.panelFormulaireBeneficiaire').css(\"display\",\"block\");\n$('.panelFormulaireBeneficiaire').css({\"opacity\":\"1\",\"transform\":\"translateY(0)\"});\nwindow.parent.$(\"button.btn.btn-outline-default[_ngcontent-c6]\").attr(\"disabled\", true);\nwindow.$('.wizard-nav-wrapper').css(\"display\",\"none\");\nwindow.$('.progress-indicator-parent').css(\"display\",\"none\");\n\nformContainer.getComponentById($('.formio-component-var-idBenef').attr(\"id\")).setValue(formContainer.data[\"var-beneficiairesDG\"][$('.editbenef').index(this)][\"id\"]);\n\nformContainer.getComponentById($('.formio-component-var-mode').attr(\"id\")).setValue(\"edition\");\n\nvar url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/getbeneficiaireinfos?identifiant=\"+formContainer.data['var-idBenef'];\n    \n$.ajax(\n{\n             url: url,\n             async: false,\n            method: 'GET',\n            dataType:'json',\n            success: function (data) {\n               \tformContainer.getComponentById($(\".formio-component-var-genre\").attr(\"id\")).setValue(data[0].genre);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-nomJeuneFille').attr(\"id\")).setValue(data[0].nom_jeune_fille);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-prenom').attr(\"id\")).setValue(data[0].prenom);\n                formContainer.getComponentById($('.formio-component-var-typePieceIdentite').attr(\"id\")).setValue(data[0].type_piece_identite);\n                formContainer.getComponentById($('.formio-component-var-numIdentite').attr(\"id\")).setValue(data[0].num_identite);\n               formContainer.getComponentById($('.formio-component-var-nomFamille').attr(\"id\")).setValue(data[0].nom_famille);\n               formContainer.getComponentById($('.formio-component-var-dateNaissance').attr(\"id\")).setValue(data[0].date_naissance.split(\"-\")[2]+\"/\"+data[0].date_naissance.split(\"-\")[1]+\"/\"+data[0].date_naissance.split(\"-\")[0]);\n               formContainer.getComponentById($('.formio-component-var-lieuNaissance').attr(\"id\")).setValue(data[0].lieu_naissance);\n               formContainer.getComponentById($('.formio-component-var-paysNaissance').attr(\"id\")).setValue(data[0].pays_naissance);\n               formContainer.getComponentById($('.formio-component-var-residentEtranger').attr(\"id\")).setValue(data[0].resident_etranger);\n               formContainer.getComponentById($('.formio-component-var-adresseBenef').attr(\"id\")).setValue(data[0].adresse);\n               formContainer.getComponentById($('.formio-component-var-villeBenef').attr(\"id\")).setValue(data[0].ville);\n               formContainer.getComponentById($('.formio-component-var-nationalite').attr(\"id\")).setValue(data[0].nationalite);\n               formContainer.getComponentById($('.formio-component-var-codePostal').attr(\"id\")).setValue(data[0].code_postal);\n               formContainer.getComponentById($('.formio-component-var-controleBenef').attr(\"id\")).setValue(data[0].controle_benef);\n               formContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).setValue(data[0].type_detention_capital.split(\",\"));\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageCapital').attr(\"id\")).setValue(data[0].pourcentage_capital);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageCapitalInd').attr(\"id\")).setValue(data[0].pourcentage_capital_Ind);\n\n\t\t\t   formContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).setValue(data[0].type_detention_vote.split(\",\"));\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageVote').attr(\"id\")).setValue(data[0].pourcentage_vote);\n\t\t\t\tformContainer.getComponentById($('.formio-component-var-pourcentageVoteInd').attr(\"id\")).setValue(data[0].pourcentage_vote_ind);\n\n\t\t\t   formContainer.getComponentById($('.formio-component-var-dateEffectiveBenef').attr(\"id\")).setValue(data[0].date_effective.split(\"-\")[2]+\"/\"+data[0].date_effective.split(\"-\")[1]+\"/\"+data[0].date_effective.split(\"-\")[0]);\n            }\n    });\n\n});\n\n\n$('.btn-default .glyphicon-remove-circle').unbind('click').click(function(e){\n\t// envoyer les identifiants restants afin de supprimer les entrées qui n'existent pas dans cette liste\n\tconsole.log($(this).parent().parent().parent().index());\n    var ids=\"\";\n\tformContainer.data[\"var-beneficiairesDG\"].forEach(function(element,index){\n        if(index != $(this).parent().parent().parent().index()+1){\n            if(index<formContainer.data[\"var-beneficiairesDG\"].length-1){\n                ids+=element.id+\",\";\n            }else{\n                ids+=element.id;\n            }\n        }\n\t\t\n\t});\n\t\n    var url= \"http://\"+window.location.host+\"/alfresco/s/rne/extranet/deletebeneficiaire?identifiant=\"+ids+\"&idEntreprise=\"+formContainer.data['var-idEntreprise'];\n\n    $.ajax(\n    {\n                 url: url,\n                 async: false,\n                method: 'GET',\n                dataType:'json',\n                success: function (data) {\n                     var idDG = $('.formio-component-var-beneficiairesDG').attr(\"id\");\n                     formContainer.getComponentById($('.formio-component-var-beneficiairesDG').attr(\"id\")).updateItems();\n                }\n     });\n\n});\n\n\n\nif(formContainer.data[\"var-controleBenef\"]==\"detention\" && data[\"var-detentionVote\"].length == 0 && data[\"var-detentionCapital\"].length == 0){\n\tformContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).component.validate.required = true;\n\tformContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).component.validate.required = true;\n}else{\n  formContainer.getComponentById($('.formio-component-var-detentionCapital').attr(\"id\")).component.validate.required = false;\n\tformContainer.getComponentById($('.formio-component-var-detentionVote').attr(\"id\")).component.validate.required = false;\n}\n\n\n$('.formio-component-var-beneficiairesDG textarea:not(:hidden)').each(function(){\n\t$(this)[0].style.height= 0+'px';\n\t$(this)[0].style.height= $(this)[0].scrollHeight+'px';\n});\n\n//}",
                "$$hashKey": "object:5032"
             },
             {
                "input": true,
                "tableView": true,
                "label": "Liste des ids des bénéficiaries",
                "key": "var-listBeneficiaires",
                "multiple": true,
                "hidden": true,
                "type": "textfield",
                "$$hashKey": "object:1149",
                "lockKey": true,
                "calculateValue": "var ids=new Array();\nif(formContainer.data[\"var-beneficiairesDG\"].length>0){\n   formContainer.data[\"var-beneficiairesDG\"].forEach(function(element,index){\n       ids.push(formContainer.data[\"var-beneficiairesDG\"][index][\"id\"]);\n   }) \n}\nvalue = ids;"
             }
          ],
          "input": false,
          "key": "page4",
          "$$hashKey": "object:638",
          "tableView": false,
          "label": "Panel"
       },
       {
          "key": "panel3",
          "input": false,
          "title": "المصرح",
          "components": [
             {
                "key": "html54",
                "input": false,
                "tag": "h3",
                "attrs": [
                   {
                      "value": "color:rgb(36, 58, 81);font-weight:bold;text-align:right;",
                      "attr": "style"
                   }
                ],
                "className": "declarantEntetePageAr",
                "content": "fr:INFORMATIONS RELATIVES AU DECLARANT|ar:معلومات تخص المصرح",
                "type": "htmlelement",
                "$$hashKey": "object:1121",
                "tableView": false,
                "label": "HTML"
             },
             {
                "key": "html55",
                "input": false,
                "tag": "hr",
                "attrs": [
                   {
                      "value": "margin-top:0px;border-top:2px solid rgb(36, 58, 81);",
                      "attr": "style"
                   }
                ],
                "type": "htmlelement",
                "$$hashKey": "object:2207",
                "tableView": false,
                "label": "HTML"
             },
             {
                "input": false,
                "tableView": true,
                "key": "columns15",
                "columns": [
                   {
                      "components": [
                         {
                            "input": true,
                            "tableView": true,
                            "label": "fr:Email du déclarant|ar:البريد الإلكتروني للمصرح",
                            "key": "var-emailDeclarant",
                            "type": "email",
                            "lockKey": true,
                            "validate": {
                               "required": true
                            },
                            "$$hashKey": "object:2244",
                            "customClass": "formulaireDeclarant",
                            "hideOnChildrenHidden": false
                         },
                         {
                            "key": "html43",
                            "input": false,
                            "tag": "h4",
                            "attrs": [
                               {
                                  "value": "",
                                  "attr": ""
                               }
                            ],
                            "className": "msgAvertissementMailDeclarantBenef",
                            "content": "يرجى إدخال عنوان بريد إلكتروني صحيح حيث ستتلقى نموذج التصريح ، بعد التحقق من صحة طلبك.",
                            "type": "htmlelement",
                            "$$hashKey": "object:2245",
                            "hideOnChildrenHidden": false,
                            "tableView": false,
                            "label": "HTML"
                         }
                      ],
                      "width": 6,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:2238",
                      "size": "md"
                   },
                   {
                      "components": [
                         {
                            "input": true,
                            "tableView": true,
                            "label": "fr:Nom du déclarant|ar:إسم المصرح",
                            "key": "var-representantLegal",
                            "validate": {
                               "required": true
                            },
                            "type": "textfield",
                            "lockKey": true,
                            "$$hashKey": "object:2258",
                            "customClass": "formulaireDeclarant",
                            "hideOnChildrenHidden": false
                         },
                         {
                            "input": true,
                            "tableView": true,
                            "inputMask": "(216) 99 999 999",
                            "label": "fr:Numéro de téléphone|ar:رقم هاتف المصرح",
                            "key": "var-numTelDeclarant",
                            "validate": {
                               "required": true
                            },
                            "type": "phoneNumber",
                            "lockKey": true,
                            "$$hashKey": "object:2259",
                            "customClass": "formulaireDeclarant",
                            "hideOnChildrenHidden": false
                         }
                      ],
                      "width": 6,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "$$hashKey": "object:2239",
                      "size": "md"
                   }
                ],
                "type": "columns",
                "$$hashKey": "object:2208",
                "label": "Columns"
             },
             {
                "key": "panel2",
                "input": false,
                "theme": "warning",
                "components": [
                   {
                      "input": false,
                      "tableView": true,
                      "key": "columns6",
                      "columns": [
                         {
                            "components": [],
                            "width": 3,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:2280",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Fait à|ar:حرر ب",
                                  "key": "var-lieuDeclaration",
                                  "validate": {
                                     "required": true
                                  },
                                  "type": "textfield",
                                  "lockKey": true,
                                  "$$hashKey": "object:2290",
                                  "customClass": "formulaireDeclarant",
                                  "hideOnChildrenHidden": false
                               }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:2281",
                            "size": "md"
                         },
                         {
                            "components": [
                               {
                                  "input": true,
                                  "tableView": true,
                                  "label": "fr:Le|ar:في",
                                  "key": "var-dateDeclaration",
                                  "format": "dd-MM-yyyy",
                                  "enableDate": false,
                                  "enableTime": false,
                                  "defaultDate": "moment()",
                                  "datePicker": {
                                     "datepickerMode": "day"
                                  },
                                  "timePicker": {
                                     "showMeridian": false
                                  },
                                  "type": "datetime",
                                  "lockKey": true,
                                  "disabled": true,
                                  "$$hashKey": "object:2298",
                                  "customClass": "formulaireDeclarant",
                                  "hideOnChildrenHidden": false,
                                  "suffix": "<i ref=\"icon\" class=\"fa fa-clock-o\" style=\"\"></i>",
                                  "widget": {
                                     "type": "calendar",
                                     "displayInTimezone": "viewer",
                                     "language": "en",
                                     "useLocaleSettings": false,
                                     "allowInput": true,
                                     "mode": "single",
                                     "enableTime": false,
                                     "noCalendar": true,
                                     "format": "dd-MM-yyyy",
                                     "hourIncrement": 1,
                                     "minuteIncrement": 1,
                                     "time_24hr": true,
                                     "minDate": null,
                                     "maxDate": null
                                  }
                               }
                            ],
                            "width": 5,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "$$hashKey": "object:2282",
                            "size": "md"
                         }
                      ],
                      "type": "columns",
                      "$$hashKey": "object:2274",
                      "label": "Columns"
                   },
                   {
                      "key": "html26",
                      "input": false,
                      "tag": "h4",
                      "attrs": [
                         {
                            "value": "",
                            "attr": ""
                         }
                      ],
                      "className": "msgAvertissementMailDeclarantBenef",
                      "content": "fr:Je déclare sur l'honneur avoir vérifié les renseignements fournis ci-dessus et certifie qu'ils sont exacts.|ar:أصرح على الشرف أني تحققت من البيانات الواردة أعلاه و أشهد بصحتها",
                      "type": "htmlelement",
                      "$$hashKey": "object:1057",
                      "tableView": false,
                      "label": "HTML"
                   }
                ],
                "type": "panel",
                "$$hashKey": "object:2209",
                "customClass": "declarantBeneficiairePanel",
                "tableView": false,
                "label": "Panel"
             },
             {
                "key": "html49",
                "input": false,
                "tag": "h3",
                "attrs": [
                   {
                      "value": "color:red;text-align:center",
                      "attr": "style"
                   }
                ],
                "content": "الرجاء مراجعة بريدكم الالكتروني",
                "type": "htmlelement",
                "$$hashKey": "object:2210",
                "tableView": false,
                "label": "HTML"
             },
             {
                "key": "html50",
                "input": false,
                "tag": "a",
                "attrs": [
                   {
                      "value": "",
                      "attr": ""
                   }
                ],
                "className": "fakeLancer btn btn-outline-default",
                "content": "إرسال التصريح",
                "type": "htmlelement",
                "$$hashKey": "object:714",
                "tableView": false,
                "label": "HTML"
             },
             {
                "input": true,
                "tableView": true,
                "label": "JS pour modifier l'interface du wizard",
                "key": "var-beneficiairesRapport",
                "hidden": true,
                "type": "textfield",
                "lockKey": true,
                "customDefaultValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\nwindow.parent.$('.btn.btn-outline-default.lunch-process-btn').css(\"display\",\"none\");\n\n$('.formio-component-var-emailDeclarant input').css({\"unicode-bidi\":\"embed\",\"direction\":\"ltr\",\"text-align\":\"right\"});\n$('.formio-component-var-numTelDeclarant input').css({\"unicode-bidi\":\"embed\",\"direction\":\"ltr\",\"text-align\":\"right\"});\n\n$('.fakeLancer').unbind(\"click\").click(function(){\n\twindow.parent.$('.btn.btn-outline-default.lunch-process-btn').click();\n});",
                "calculateValue": "$('.btn-wizard-nav-next').html(\"موالي\");\n$('.btn-wizard-nav-previous').html(\"عودة\");\n$('.btn-wizard-nav-previous').css(\"display\",\"inline-block\");\n$('.btn-wizard-nav-next').css(\"display\",\"inline-block\");\n\n$('.fakeLancer').unbind(\"click\").click(function(){\n\twindow.parent.$('.btn.btn-outline-default.lunch-process-btn').click();\n});",
                "$$hashKey": "object:2212"
             }
          ],
          "type": "panel",
          "$$hashKey": "object:930",
          "tableView": false,
          "label": "Panel"
       }
    ]
}*/
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
    var storedFormioPlaygroundJson = initialForm || localStorage.getItem("formioPlaygroundJson");
    if(storedFormioPlaygroundJson){
        formioInfos = initialForm || JSON.parse(localStorage.getItem("formioPlaygroundJson"));
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