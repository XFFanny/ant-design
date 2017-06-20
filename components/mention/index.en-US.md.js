webpackJsonp([164,215],{870:function(t,n){t.exports={content:["section",["p","Mention component\u3002"],["h2","When To Use"],["p","When need to mention someone or something."]],meta:{category:"Components",type:"Data Entry",title:"Mention",filename:"components/mention/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'afc163\'</span><span class="token punctuation">,</span> <span class="token string">\'benjycui\'</span><span class="token punctuation">,</span> <span class="token string">\'yiminghe\'</span><span class="token punctuation">,</span> <span class="token string">\'jljsj33\'</span><span class="token punctuation">,</span> <span class="token string">\'dqaria\'</span><span class="token punctuation">,</span> <span class="token string">\'RaoHai\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","Description"],["th","Type"]]],["tbody",["tr",["td","toString"],["td","convert ContentState to string"],["td","Function(contentState: ContentState): string"]],["tr",["td","toContentState (recommended)"],["td","convert string to ContentState"],["td","Function(value: string): ContentState"]],["tr",["td","toEditorState (Backward compatible)"],["td","convert string to ContentState"],["td","Function(value: string): ContentState"]],["tr",["td","getMentions"],["td","get mentioned people in current contentState"],["td","Function(ContentState: contentState): string[]"]]]],["h3","Mention"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","suggestions"],["td","suggestion content"],["td","Array<string","|","Mention.Nav>"],["td","[]"]],["tr",["td","suggestionStyle"],["td","style of suggestion container"],["td","object"],["td","{}"]],["tr",["td","onSearchChange"],["td","Callback function called when search content changes"],["td","function(value:string, trigger: string)"],["td","[]"]],["tr",["td","onChange"],["td","Callback function called when content of input changes"],["td","function(contentState: ContentState)"],["td","null"]],["tr",["td","onSelect"],["td","Callback function called when select from suggestions"],["td","function(suggestion: string, data?: any)"],["td","null"]],["tr",["td","notFoundContent"],["td","suggestion when suggestions empty"],["td","string"],["td","'\u65e0\u5339\u914d\u7ed3\u679c\uff0c\u8f7b\u6572\u7a7a\u683c\u5b8c\u6210\u8f93\u5165'"]],["tr",["td","loading"],["td","loading mode"],["td","boolean"],["td","false"]],["tr",["td","multiLines"],["td","multilines mode"],["td","boolean"],["td","false"]],["tr",["td","prefix"],["td","character which will trigger Mention to show mention list"],["td","string or Array",["string"]],["td","'@'"]],["tr",["td","defaultValue"],["td","default value"],["td","ContentState, you can use ",["code","Mention.toContentState"]," or ",["code","Mention.toEditorState"]," to convert text to ",["code","ContentState"]],["td","null"]],["tr",["td","value"],["td","core state of mention"],["td","ContentState"],["td","null"]],["tr",["td","placeholder"],["td","placeholder of input"],["td","string"],["td","null"]],["tr",["td","getSuggestionContainer"],["td","rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative."],["td","function"],["td","() => document.body"]],["tr",["td","onFocus"],["td","Callback function called when mention component get focus"],["td","functione)"],["td","null"]],["tr",["td","onBlur"],["td","Callback function called when mention component blur"],["td","function(e)"],["td","null"]],["tr",["td","readOnly"],["td","Tell if the input is readonly."],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","Tell if the input is disabled."],["td","boolean"],["td","false"]]]],["h3","Nav"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","value of suggestion\uff0cthe value will insert into input filed while selected"],["td","string"],["td",'""']],["tr",["td","children"],["td","suggestion content"],["td","object"],["td","{}"]]]]]}}});