webpackJsonp([39,215],{880:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u65f6\u957f ",["code","10s"],"\uff0c\u9ed8\u8ba4\u65f6\u957f\u4e3a ",["code","1.5s"],"\u3002"]],"en-US":[["p","Customize message display duration from default ",["code","1.5s"]," to ",["code","10s"],"."]]},meta:{order:2,title:{"zh-CN":"\u4fee\u6539\u5ef6\u65f6","en-US":"Customize duration"},filename:"components/message/demo/duration.md",id:"components-message-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'This is a prompt message for success, and it will disappear in 10 seconds\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized display duration<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),s=(a(2),a(3)),t=function(){s.message.success("This is a prompt message for success, and it will disappear in 10 seconds",10)};return n.createElement(s.Button,{onClick:t},"Customized display duration")}}},881:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002"]],"en-US":[["p","Normal messages as feedbacks."]]},meta:{order:0,title:{"zh-CN":"\u666e\u901a\u63d0\u793a","en-US":"Normal prompt"},filename:"components/message/demo/info.md",id:"components-message-demo-info"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a normal message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),s=(a(2),a(3)),t=function(){s.message.info("This is a normal message")};return n.createElement(s.Button,{type:"primary",onClick:t},"Display normal message")}}},882:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"]],"en-US":[["p","Display a global loading indicator, which is dismissed by itself asynchronously."]]},meta:{order:3,title:{"zh-CN":"\u52a0\u8f7d\u4e2d","en-US":"Message of loading"},filename:"components/message/demo/loading.md",id:"components-message-demo-loading"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> hide <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Action in progress..\'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// Dismiss manually and asynchronously</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span>hide<span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display a loading indicator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),s=(a(2),a(3)),t=function(){var n=s.message.loading("Action in progress..",0);setTimeout(n,2500)};return n.createElement(s.Button,{onClick:t},"Display a loading indicator")}}},883:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"]],"en-US":[["p","Messages of success, error and warning types."]]},meta:{order:1,title:{"zh-CN":"\u5176\u4ed6\u63d0\u793a\u7c7b\u578b","en-US":"Other types of message"},filename:"components/message/demo/other.md",id:"components-message-demo-other"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'This is a message of success\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'This is a message of error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> warning <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">\'This is message of warning\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>warning<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),s=(a(2),a(3)),t=function(){s.message.success("This is a message of success")},p=function(){s.message.error("This is a message of error")},o=function(){s.message.warning("This is message of warning")};return n.createElement("div",null,n.createElement(s.Button,{onClick:t},"Success"),n.createElement(s.Button,{onClick:p},"Error"),n.createElement(s.Button,{onClick:o},"Warning"))},style:"\n#components-message-demo-other .ant-btn {\n  margin-right: 8px;\n}\n"}},1324:function(n,s,a){n.exports={duration:a(880),info:a(881),loading:a(882),other:a(883)}}});