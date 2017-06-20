webpackJsonp([96,215],{1114:function(n,s){n.exports={content:["article",{},["h2","\u5b89\u88c5 dva-cli"],["p","\u901a\u8fc7 npm \u5b89\u88c5 dva-cli \u5e76\u786e\u4fdd\u7248\u672c\u662f ",["code","0.7.0"]," \u6216\u4ee5\u4e0a\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> dva-cli -g\n$ dva -v\n0.7.0'},["code","$ npm install dva-cli -g\n$ dva -v\n0.7.0"]],["h2","\u521b\u5efa\u65b0\u5e94\u7528"],["p","\u5b89\u88c5\u5b8c dva-cli \u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u91cc\u8bbf\u95ee\u5230 ",["code","dva"]," \u547d\u4ee4\uff08",["a",{title:null,href:"http://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found"},"\u4e0d\u80fd\u8bbf\u95ee\uff1f"],"\uff09\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",["code","dva new"]," \u521b\u5efa\u65b0\u5e94\u7528\u3002"],["pre",{lang:"bash",highlighted:"$ dva new dva-quickstart"},["code","$ dva new dva-quickstart"]],["p","\u8fd9\u4f1a\u521b\u5efa ",["code","dva-quickstart"]," \u76ee\u5f55\uff0c\u5305\u542b\u9879\u76ee\u521d\u59cb\u5316\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b\u5f00\u53d1\u670d\u52a1\u5668\u3001\u6784\u5efa\u811a\u672c\u3001\u6570\u636e mock \u670d\u52a1\u3001\u4ee3\u7406\u670d\u52a1\u5668\u7b49\u529f\u80fd\u3002"],["p","\u7136\u540e\u6211\u4eec ",["code","cd"]," \u8fdb\u5165 ",["code","dva-quickstart"]," \u76ee\u5f55\uff0c\u5e76\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> dva-quickstart\n$ <span class="token function">npm</span> start'},["code","$ cd dva-quickstart\n$ npm start"]],["p","\u51e0\u79d2\u949f\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"],["pre",{lang:"bash",highlighted:'Compiled successfully<span class="token operator">!</span>\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use <span class="token function">npm</span> run build.'},["code","Compiled successfully!\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use npm run build."]],["p","\u5728\u6d4f\u89c8\u5668\u91cc\u6253\u5f00 ",["a",{title:null,href:"http://localhost:8000"},"http://localhost:8000"]," \uff0c\u4f60\u4f1a\u770b\u5230 dva \u7684\u6b22\u8fce\u754c\u9762\u3002"],["h2","\u4f7f\u7528 antd"],["p","\u901a\u8fc7 npm \u5b89\u88c5 ",["code","antd"]," \u548c ",["code","babel-plugin-import"]," \u3002",["code","babel-plugin-import"]," \u662f\u7528\u6765\u6309\u9700\u52a0\u8f7d antd \u7684\u811a\u672c\u548c\u6837\u5f0f\u7684\uff0c\u8be6\u89c1 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"repo"]," \u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd babel-plugin-import --save'},["code","$ npm install antd babel-plugin-import --save"]],["p","\u7f16\u8f91 ",["code",".roadhogrc"],"\uff0c\u4f7f ",["code","babel-plugin-import"]," \u63d2\u4ef6\u751f\u6548\u3002"],["pre",{lang:"diff",highlighted:'  "extraBabelPlugins": [\n<span class="token deleted">-    "transform-runtime"</span>\n<span class="token inserted">+    "transform-runtime",</span>\n<span class="token inserted">+    ["import", { "libraryName": "antd", "style": "css" }]</span>\n  ],'},["code",'  "extraBabelPlugins": [\n-    "transform-runtime"\n+    "transform-runtime",\n+    ["import", { "libraryName": "antd", "style": "css" }]\n  ],']],["blockquote",["p","\u6ce8\uff1adva-cli \u57fa\u4e8e roadhog \u5b9e\u73b0 build \u548c server\uff0c\u66f4\u591a ",["code",".roadhogrc"]," \u7684\u914d\u7f6e\u8be6\u89c1 ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#\u914d\u7f6e"},"roadhog#\u914d\u7f6e"]]],["h2","\u5b9a\u4e49\u8def\u7531"],["p","\u6211\u4eec\u8981\u5199\u4e2a\u5e94\u7528\u6765\u5148\u663e\u793a\u4ea7\u54c1\u5217\u8868\u3002\u9996\u5148\u7b2c\u4e00\u6b65\u662f\u521b\u5efa\u8def\u7531\uff0c\u8def\u7531\u53ef\u4ee5\u60f3\u8c61\u6210\u662f\u7ec4\u6210\u5e94\u7528\u7684\u4e0d\u540c\u9875\u9762\u3002"],["p","\u65b0\u5efa route component ",["code","routes/Products.js"],"\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>h2<span class="token operator">></span>List <span class="token keyword">of</span> Products<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Products<span class="token punctuation">;</span>'},["code","import React from 'react';\n\nconst Products = (props) => (\n  <h2>List of Products</h2>\n);\n\nexport default Products;"]],["p","\u6dfb\u52a0\u8def\u7531\u4fe1\u606f\u5230\u8def\u7531\u8868\uff0c\u7f16\u8f91 ",["code","router.js"]," :"],["pre",{lang:"diff",highlighted:'<span class="token inserted">+ import Products from \'./routes/Products\';</span>\n...\n<span class="token inserted">+ &lt;Route path="/products" component={Products} /></span>'},["code","+ import Products from './routes/Products';\n...\n+ <Route path=\"/products\" component={Products} />"]],["p","\u7136\u540e\u5728\u6d4f\u89c8\u5668\u91cc\u6253\u5f00 ",["a",{title:null,href:"http://localhost:8000/#/products"},"http://localhost:8000/#/products"]," \uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u524d\u9762\u5b9a\u4e49\u7684 ",["code","<h2>"]," \u6807\u7b7e\u3002"],["h2","\u7f16\u5199 UI Component"],["p","\u968f\u7740\u5e94\u7528\u7684\u53d1\u5c55\uff0c\u4f60\u4f1a\u9700\u8981\u5728\u591a\u4e2a\u9875\u9762\u5206\u4eab UI \u5143\u7d20 (\u6216\u5728\u4e00\u4e2a\u9875\u9762\u4f7f\u7528\u591a\u6b21)\uff0c\u5728 dva \u91cc\u4f60\u53ef\u4ee5\u628a\u8fd9\u90e8\u5206\u62bd\u6210 component \u3002"],["p","\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a ",["code","ProductList"]," component\uff0c\u8fd9\u6837\u5c31\u80fd\u5728\u4e0d\u540c\u7684\u5730\u65b9\u663e\u793a\u4ea7\u54c1\u5217\u8868\u4e86\u3002"],["p","\u65b0\u5efa ",["code","components/ProductList.js"]," \u6587\u4ef6\uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ProductList <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> onDelete<span class="token punctuation">,</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Name\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Actions\'</span><span class="token punctuation">,</span>\n    render<span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>Popconfirm title<span class="token operator">=</span><span class="token string">"Delete?"</span> onConfirm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>Button<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Popconfirm<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Table\n      dataSource<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span>\n      columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nProductList<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  onDelete<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  products<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> ProductList<span class="token punctuation">;</span>'},["code","import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [{\n    title: 'Name',\n    dataIndex: 'name',\n  }, {\n    title: 'Actions',\n    render: (text, record) => {\n      return (\n        <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n          <Button>Delete</Button>\n        </Popconfirm>\n      );\n    },\n  }];\n  return (\n    <Table\n      dataSource={products}\n      columns={columns}\n    />\n  );\n};\n\nProductList.propTypes = {\n  onDelete: PropTypes.func.isRequired,\n  products: PropTypes.array.isRequired,\n};\n\nexport default ProductList;"]],["h2","\u5b9a\u4e49 Model"],["p","\u5b8c\u6210 UI \u540e\uff0c\u73b0\u5728\u5f00\u59cb\u5904\u7406\u6570\u636e\u548c\u903b\u8f91\u3002"],["p","dva \u901a\u8fc7 model \u7684\u6982\u5ff5\u628a\u4e00\u4e2a\u9886\u57df\u7684\u6a21\u578b\u7ba1\u7406\u8d77\u6765\uff0c\u5305\u542b\u540c\u6b65\u66f4\u65b0 state \u7684 reducers\uff0c\u5904\u7406\u5f02\u6b65\u903b\u8f91\u7684 effects\uff0c\u8ba2\u9605\u6570\u636e\u6e90\u7684 subscriptions \u3002"],["p","\u65b0\u5efa model ",["code","models/products.js"]," \uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> dva <span class="token keyword">from</span> <span class="token string">\'dva\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  namespace<span class="token punctuation">:</span> <span class="token string">\'products\'</span><span class="token punctuation">,</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  reducers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'delete\'</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> payload<span class="token punctuation">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import dva from 'dva';\n\nexport default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    'delete'(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"]],["p","\u8fd9\u4e2a model \u91cc\uff1a"],["ul",["li",["p",["code","namespace"]," \u8868\u793a\u5728\u5168\u5c40 state \u4e0a\u7684 key"]],["li",["p",["code","state"]," \u662f\u521d\u59cb\u503c\uff0c\u5728\u8fd9\u91cc\u662f\u7a7a\u6570\u7ec4"]],["li",["p",["code","reducers"]," \u7b49\u540c\u4e8e redux \u91cc\u7684 reducer\uff0c\u63a5\u6536 action\uff0c\u540c\u6b65\u66f4\u65b0 state"]]],["p","\u7136\u540e\u522b\u5fd8\u8bb0\u5728 ",["code","index.js"]," \u91cc\u8f7d\u5165\u4ed6\uff1a"],["pre",{lang:"diff",highlighted:"// 3. Model\n<span class=\"token inserted\">+ app.model(require('./models/products'));</span>"},["code","// 3. Model\n+ app.model(require('./models/products'));"]],["h2","connect \u8d77\u6765"],["p","\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u5df2\u7ecf\u5355\u72ec\u5b8c\u6210\u4e86 model \u548c component\uff0c\u90a3\u4e48\u4ed6\u4eec\u5982\u4f55\u4e32\u8054\u8d77\u6765\u5462?"],["p","dva \u63d0\u4f9b\u4e86 connect \u65b9\u6cd5\u3002\u5982\u679c\u4f60\u719f\u6089 redux\uff0c\u8fd9\u4e2a connect \u5c31\u662f react-redux \u7684 connect \u3002"],["p","\u7f16\u8f91 ",["code","routes/Products.js"],"\uff0c\u66ff\u6362\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dva\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ProductList <span class="token keyword">from</span> <span class="token string">\'../components/ProductList\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">handleDelete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'products/delete\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> id<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>h2<span class="token operator">></span>List <span class="token keyword">of</span> Products<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ProductList onDelete<span class="token operator">=</span><span class="token punctuation">{</span>handleDelete<span class="token punctuation">}</span> products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// export default Products;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  products<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Products<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\n// export default Products;\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"]],["p","\u6700\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e9b\u521d\u59cb\u6570\u636e\u8ba9\u8fd9\u4e2a\u5e94\u7528 run \u8d77\u6765\u3002\u7f16\u8f91 ",["code","index.js"],"\uff1a"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- const app = dva();</span>\n<span class="token inserted">+ const app = dva({</span>\n<span class="token inserted">+   initialState: {</span>\n<span class="token inserted">+     products: [</span>\n<span class="token inserted">+       { name: \'dva\', id: 1 },</span>\n<span class="token inserted">+       { name: \'antd\', id: 2 },</span>\n<span class="token inserted">+     ],</span>\n<span class="token inserted">+   },</span>\n<span class="token inserted">+ });</span>'},["code","- const app = dva();\n+ const app = dva({\n+   initialState: {\n+     products: [\n+       { name: 'dva', id: 1 },\n+       { name: 'antd', id: 2 },\n+     ],\n+   },\n+ });"]],["p","\u5237\u65b0\u6d4f\u89c8\u5668\uff0c\u5e94\u8be5\u80fd\u770b\u5230\u4ee5\u4e0b\u6548\u679c\uff1a"],["p",{style:"text-align: center;"},["img",{src:"https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"}]],["h2","\u6784\u5efa\u5e94\u7528"],["p","\u5b8c\u6210\u5f00\u53d1\u5e76\u4e14\u5728\u5f00\u53d1\u73af\u5883\u9a8c\u8bc1\u4e4b\u540e\uff0c\u5c31\u9700\u8981\u90e8\u7f72\u7ed9\u6211\u4eec\u7684\u7528\u6237\u4e86\u3002\u5148\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","\u51e0\u79d2\u540e\uff0c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"],["pre",{lang:"bash",highlighted:'<span class="token operator">></span> @ build /private/tmp/myapp\n<span class="token operator">></span> roadhog build\n\nCreating an optimized production build<span class="token punctuation">..</span>.\nCompiled successfully.\n\nFile sizes after gzip:\n\n  82.98 KB  dist/index.js\n  270 B     dist/index.css'},["code","> @ build /private/tmp/myapp\n> roadhog build\n\nCreating an optimized production build...\nCompiled successfully.\n\nFile sizes after gzip:\n\n  82.98 KB  dist/index.js\n  270 B     dist/index.css"]],["p",["code","build"]," \u547d\u4ee4\u4f1a\u6253\u5305\u6240\u6709\u7684\u8d44\u6e90\uff0c\u5305\u542b JavaScript, CSS, web fonts, images, html \u7b49\u3002\u7136\u540e\u4f60\u53ef\u4ee5\u5728 ",["code","dist/"]," \u76ee\u5f55\u4e0b\u627e\u5230\u8fd9\u4e9b\u6587\u4ef6\u3002"],["h2","\u4e0b\u4e00\u6b65"],["p","\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\uff0c\u4f60\u53ef\u80fd\u8fd8\u6709\u5f88\u591a\u7591\u95ee\uff0c\u6bd4\u5982\uff1a"],["ul",["li",["p","\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8bf7\u6c42"]],["li",["p","\u5982\u4f55\u4f18\u96c5\u5730\u52a0\u8f7d\u521d\u59cb\u6570\u636e"]],["li",["p","\u5982\u4f55\u7edf\u4e00\u5904\u7406\u51fa\u9519\uff0c\u4ee5\u53ca\u7279\u5b9a\u64cd\u4f5c\u7684\u51fa\u9519"]],["li",["p","\u5982\u4f55\u52a8\u6001\u52a0\u8f7d\u8def\u7531\u548c Model\uff0c\u4ee5\u52a0\u901f\u9875\u9762\u8f7d\u5165\u901f\u5ea6"]],["li",["p","\u5982\u4f55\u5b9e\u73b0 hmr"]],["li",["p","\u5982\u4f55 mock \u6570\u636e"]],["li",["p","\u7b49\u7b49"]]],["p","\u4f60\u53ef\u4ee5\uff1a"],["ul",["li",["p","\u8bbf\u95ee ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva \u5b98\u7f51"]]],["li",["p","\u7406\u89e3 dva \u7684 ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md"},"8 \u4e2a\u6982\u5ff5"]," \uff0c\u4ee5\u53ca\u4ed6\u4eec\u662f\u5982\u4f55\u4e32\u8d77\u6765\u7684"]],["li",["p","\u638c\u63e1 dva \u7684",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md"},"\u6240\u6709 API"]]],["li",["p","\u67e5\u770b ",["a",{title:null,href:"https://github.com/dvajs/dva-knowledgemap"},"dva \u77e5\u8bc6\u5730\u56fe"]," \uff0c\u5305\u542b ES6, React, dva \u7b49\u6240\u6709\u57fa\u7840\u77e5\u8bc6"]],["li",["p","\u67e5\u770b ",["a",{title:null,href:"https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq"},"\u66f4\u591a FAQ"],"\uff0c\u770b\u770b\u522b\u4eba\u901a\u5e38\u4f1a\u9047\u5230\u4ec0\u4e48\u95ee\u9898"]],["li",["p","\u5982\u679c\u4f60\u57fa\u4e8e dva-cli \u521b\u5efa\u9879\u76ee\uff0c\u6700\u597d\u4e86\u89e3\u4ed6\u7684 ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#\u914d\u7f6e"},"\u914d\u7f6e\u65b9\u5f0f"]]]]],meta:{order:3,title:"\u9879\u76ee\u5b9e\u6218",filename:"docs/react/practical-projects.zh-CN.md"},description:["section",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," \u662f\u4e00\u4e2a\u57fa\u4e8e react \u548c redux \u7684\u8f7b\u91cf\u5e94\u7528\u6846\u67b6\uff0c\u6982\u5ff5\u6765\u81ea elm\uff0c\u652f\u6301 side effects\u3001\u70ed\u66ff\u6362\u3001\u52a8\u6001\u52a0\u8f7d\u3001react-native\u3001SSR \u7b49\uff0c\u5df2\u5728\u751f\u4ea7\u73af\u5883\u5e7f\u6cdb\u5e94\u7528\u3002"],["p","\u672c\u6587\u4f1a\u5f15\u5bfc\u4f60\u4f7f\u7528 dva \u548c antd \u4ece 0 \u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\u3002"],["p","\u4f1a\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5-dva-cli",title:"\u5b89\u88c5 dva-cli"},"\u5b89\u88c5 dva-cli"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efa\u65b0\u5e94\u7528",title:"\u521b\u5efa\u65b0\u5e94\u7528"},"\u521b\u5efa\u65b0\u5e94\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-antd",title:"\u4f7f\u7528 antd"},"\u4f7f\u7528 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u4e49\u8def\u7531",title:"\u5b9a\u4e49\u8def\u7531"},"\u5b9a\u4e49\u8def\u7531"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f16\u5199-UI-Component",title:"\u7f16\u5199 UI Component"},"\u7f16\u5199 UI Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u4e49-Model",title:"\u5b9a\u4e49 Model"},"\u5b9a\u4e49 Model"]],["li",["a",{className:"bisheng-toc-h2",href:"#connect-\u8d77\u6765",title:"connect \u8d77\u6765"},"connect \u8d77\u6765"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6784\u5efa\u5e94\u7528",title:"\u6784\u5efa\u5e94\u7528"},"\u6784\u5efa\u5e94\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4e0b\u4e00\u6b65",title:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"]]]}}});