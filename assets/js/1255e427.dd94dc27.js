"use strict";(self.webpackChunkmaybe_news_github_io=self.webpackChunkmaybe_news_github_io||[]).push([[1910],{7168:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>h});var n=i(4717),o=i(4848),t=i(8453);const a={title:"Issue #4",date:"2020-06-17 14:07:52 +0800",tags:["issue"]},s=void 0,l={authorsImageUrls:[]},h=[{value:"AliGraph: A Comprehensive Graph Neural Network Platform",id:"aligraph-a-comprehensive-graph-neural-network-platform",level:2},{value:"Building Uber\u2019s Go Monorepo with Bazel",id:"building-ubers-go-monorepo-with-bazel",level:2},{value:"Optimising Docker Layers for Better Caching with Nix",id:"optimising-docker-layers-for-better-caching-with-nix",level:2},{value:"Proposal: Permit embedding of interfaces with overlapping method sets",id:"proposal-permit-embedding-of-interfaces-with-overlapping-method-sets",level:2},{value:"VexTab",id:"vextab",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u672c\u671f\u5173\u952e\u8bcd\uff1aAliGraph\u3001Monorepo\u3001Docker image\u3001Go interface\u3001Guitar tab"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"aligraph-a-comprehensive-graph-neural-network-platform",children:"AliGraph: A Comprehensive Graph Neural Network Platform"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://dl.acm.org/doi/10.1145/3292500.3340404",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsx)(r.p,{children:"AliGraph \u662f\u963f\u91cc\u5df4\u5df4\u56e2\u961f\u7814\u53d1\u7684 GNN\uff08Graph Neural Network\uff09\u5206\u5e03\u5f0f\u8bad\u7ec3\u6846\u67b6\uff08\u867d\u7136\u6807\u9898\u91cc\u662f\u300c\u5e73\u53f0\u300d\u4f46\u611f\u89c9\u8fd8\u7b97\u4e0d\u4e0a\uff09\uff0c\u8bba\u6587\u53d1\u8868\u5728 KDD 2019 \u548c PVLDB 2019\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u8bba\u6587\u5f00\u7bc7\u4fbf\u63d0\u51fa\u4e86\u5f53\u4e0b GNN \u6a21\u578b\u8bad\u7ec3\u7684 4 \u4e2a\u6311\u6218\uff1a"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"\u5982\u4f55\u63d0\u9ad8\u5927\u89c4\u6a21\u56fe\u6a21\u578b\u7684\u8bad\u7ec3\u6548\u7387\u53ca\u4f18\u5316\u7a7a\u95f4\u5360\u7528\uff1f"}),"\n",(0,o.jsx)(r.li,{children:"\u600e\u6837\u4f18\u96c5\u5730\u5c06\u5f02\u6784\uff08heterogeneous\uff09\u4fe1\u606f\u7ec4\u5408\u5230\u4e00\u4e2a\u7edf\u4e00\u7684 embedding \u7ed3\u679c\u4e2d\uff1f"}),"\n",(0,o.jsx)(r.li,{children:"\u5982\u4f55\u5c06\u7ed3\u6784\u5316\u7684\u62d3\u6251\uff08topological\uff09\u4fe1\u606f\u4e0e\u975e\u7ed3\u6784\u5316\u7684\u5c5e\u6027\uff08attribute\uff09\u4fe1\u606f\u7edf\u4e00\u6765\u5171\u540c\u5b9a\u4e49\u90a3\u4e9b\u9700\u8981\u4fdd\u7559\u7684\u4fe1\u606f\uff1f"}),"\n",(0,o.jsx)(r.li,{children:"\u5982\u4f55\u8bbe\u8ba1\u4e00\u4e2a\u9ad8\u6548\u7684\u589e\u91cf\u66f4\u65b0\u52a8\u6001\u56fe\u7684 GNN \u65b9\u6cd5\uff1f"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u540e\u9762\u7684\u7bc7\u7ae0\u4fbf\u662f\u8be6\u7ec6\u4ecb\u7ecd AliGraph \u5982\u4f55\u89e3\u51b3\u4ee5\u4e0a\u8fd9 4 \u4e2a\u95ee\u9898\u3002\u6846\u67b6\u4ece\u4e0a\u81f3\u4e0b\u6574\u4f53\u5206\u4e3a 3 \u5c42\uff1a\u7b97\u5b50\uff08operator\uff09\u3001\u91c7\u6837\uff08sampling\uff09\u3001\u5b58\u50a8\uff08storage\uff09\u3002\u7b97\u5b50\u5c42\u5305\u542b\u5e38\u89c1\u7684 GNN \u8fd0\u7b97\u64cd\u4f5c\uff0c\u91c7\u6837\u5c42\u5305\u542b\u51e0\u79cd\u9884\u8bbe\u7684\u91c7\u6837\u7b97\u6cd5\uff0c\u5b58\u50a8\u5c42\u4e3b\u8981\u5173\u6ce8\u5982\u4f55\u9ad8\u6548\u5bf9\u5927\u89c4\u6a21\u56fe\u8fdb\u884c\u5206\u5e03\u5f0f\u5b58\u50a8\u3002\u5728\u8fd9 3 \u5c42\u57fa\u7840\u4e4b\u4e0a\u53ef\u4ee5\u5b9e\u73b0\u4efb\u610f\u7684 GNN \u7b97\u6cd5\u4ee5\u53ca\u5e94\u7528\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["\u5b58\u50a8\u5c42\u56e0\u4e3a\u662f\u8981\u89e3\u51b3\u4e00\u4e2a\u56fe\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u95ee\u9898\uff0c\u56e0\u6b64\u9996\u5148\u8981\u5c06\u56fe\u8fdb\u884c\u5206\u5272\uff08partition\uff09\u3002AliGraph \u5185\u7f6e\u4e86 4 \u79cd\u56fe\u5206\u5272\u7b97\u6cd5\uff1a",(0,o.jsx)(r.a,{href:"https://dm.kaist.ac.kr/kse625/resources/metis.pdf",children:"METIS"}),"\u3001",(0,o.jsx)(r.a,{href:"https://www.usenix.org/conference/osdi12/technical-sessions/presentation/gonzalez",children:"\u9876\u70b9\u5207\u5272\u548c\u8fb9\u5207\u5272"}),"\u3001",(0,o.jsx)(r.a,{href:"https://dl.acm.org/doi/10.1145/2503210.2503293",children:"2D \u5206\u5272"}),"\u3001",(0,o.jsx)(r.a,{href:"https://dl.acm.org/doi/10.1145/2339530.2339722",children:"\u6d41\u5f0f\u5206\u5272"}),"\u3002\u8fd9 4 \u79cd\u7b97\u6cd5\u5206\u522b\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\uff0cMETIS \u9002\u5408\u5904\u7406\u7a00\u758f\uff08sparse\uff09\u7684\u56fe\uff0c\u9876\u70b9\u5207\u5272\u548c\u8fb9\u5207\u5272\u9002\u5408\u5bc6\u96c6\uff08dense\uff09\u7684\u56fe\uff0c2D \u5206\u5272\u9002\u5408 worker \u6570\u91cf\u56fa\u5b9a\u7684\u573a\u666f\uff0c\u6d41\u5f0f\u5206\u5272\u901a\u5e38\u5e94\u7528\u5728\u8fb9\uff08edge\uff09\u9891\u7e41\u66f4\u65b0\u7684\u56fe\u3002\u7528\u6237\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u6070\u5f53\u7684\u5206\u5272\u7b97\u6cd5\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u7684\u5f62\u5f0f\u81ea\u5df1\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsx)(r.p,{children:"\u53e6\u4e00\u4e2a\u5b58\u50a8\u5c42\u5173\u5fc3\u7684\u95ee\u9898\u662f\u5982\u4f55\u5c06\u56fe\u7ed3\u6784\u548c\u5c5e\u6027\uff08attribute\uff09\u5171\u540c\u5b58\u50a8\u3002\u8fd9\u91cc\u8bb2\u7684\u56fe\u7ed3\u6784\u5373\u9876\u70b9\u548c\u8fb9\u7684\u4fe1\u606f\uff0c\u8fd9\u662f\u6700\u4e3b\u8981\u7684\u56fe\u6570\u636e\u3002\u540c\u65f6\u6bcf\u4e2a\u9876\u70b9\u4e5f\u4f1a\u9644\u52a0\u4e00\u4e9b\u72ec\u7279\u7684\u5c5e\u6027\uff0c\u4f8b\u5982\u67d0\u4e2a\u9876\u70b9\u8868\u793a\u4e00\u4e2a\u7528\u6237\uff0c\u90a3\u9644\u52a0\u5728\u8fd9\u4e2a\u7528\u6237\u4e0a\u9762\u7684\u5c5e\u6027\u5c31\u662f\u7c7b\u4f3c\u6027\u522b\u3001\u5e74\u9f84\u3001\u5730\u7406\u4f4d\u7f6e\u8fd9\u6837\u7684\u4fe1\u606f\u3002\u5982\u679c\u76f4\u63a5\u5c06\u5c5e\u6027\u4fe1\u606f\u548c\u56fe\u7ed3\u6784\u4e00\u8d77\u5b58\u50a8\u4f1a\u9020\u6210\u975e\u5e38\u5927\u7684\u7a7a\u95f4\u6d6a\u8d39\uff0c\u56e0\u4e3a\u4ece\u5168\u5c40\u89d2\u5ea6\u770b\u540c\u4e00\u79cd\u7c7b\u578b\u7684\u9876\u70b9\u7684\u5c5e\u6027\u662f\u9ad8\u5ea6\u91cd\u5408\u7684\u3002\u5e76\u4e14\u5c5e\u6027\u4e0e\u56fe\u7ed3\u6784\u7684\u5927\u5c0f\u5dee\u5f02\u4e5f\u975e\u5e38\u660e\u663e\uff0c\u4e00\u4e2a\u9876\u70b9 ID \u901a\u5e38\u5360\u7528 8 \u5b57\u8282\uff0c\u4f46\u662f\u5c5e\u6027\u4fe1\u606f\u7684\u5927\u5c0f\u4ece 0.1KB \u5230 1KB \u90fd\u6709\u53ef\u80fd \u3002\u56e0\u6b64 AliGraph \u9009\u62e9\u5c06\u5c5e\u6027\u4fe1\u606f\u5355\u72ec\u5b58\u50a8\uff0c\u901a\u8fc7\u4e24\u4e2a\u5355\u72ec\u7684\u7d22\u5f15\u5206\u522b\u5b58\u50a8\u9876\u70b9\u548c\u8fb9\u7684\u5c5e\u6027\uff0c\u800c\u56fe\u7ed3\u6784\u4e2d\u53ea\u5b58\u50a8\u5c5e\u6027\u7d22\u5f15\u7684 ID\u3002\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u81ea\u7136\u662f\u663e\u8457\u964d\u4f4e\u4e86\u5b58\u50a8\u6240\u9700\u7684\u7a7a\u95f4\uff0c\u4f46\u4ee3\u4ef7\u5c31\u662f\u964d\u4f4e\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u56e0\u4e3a\u9700\u8981\u9891\u7e41\u8bbf\u95ee\u7d22\u5f15\u6765\u83b7\u53d6\u5c5e\u6027\u4fe1\u606f\u3002AliGraph \u9009\u62e9\u589e\u52a0\u4e00\u5c42 LRU \u7f13\u5b58\u7684\u65b9\u5f0f\u5bf9\u67e5\u8be2\u6027\u80fd\u8fdb\u884c\u4f18\u5316\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["\u5b58\u50a8\u5c42\u5173\u5fc3\u7684\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u4e5f\u662f\u8ddf\u67e5\u8be2\u6027\u80fd\u6709\u5173\u3002\u5728\u56fe\u7b97\u6cd5\u4e2d\u4e00\u4e2a\u9876\u70b9\u7684\u90bb\u5c45\uff08neighbor\uff09\u662f\u975e\u5e38\u91cd\u8981\u7684\u4fe1\u606f\uff0c\u90bb\u5c45\u53ef\u4ee5\u662f\u76f4\u63a5\uff081 \u8df3\uff09\u7684\u4e5f\u53ef\u4ee5\u662f\u95f4\u63a5\uff08\u591a\u8df3\uff09\u7684\uff0c\u7531\u4e8e\u56fe\u88ab\u5206\u5272\u4ee5\u540e\u672c\u5730\u53ea\u4f1a\u5b58\u50a8\u76f4\u63a5\u7684\u90bb\u5c45\uff0c\u5f53\u9700\u8981\u8bbf\u95ee\u95f4\u63a5\u90bb\u5c45\u7684\u65f6\u5019\u5c31\u5fc5\u987b\u901a\u8fc7\u7f51\u7edc\u901a\u4fe1\u4e0e\u5176\u5b83\u5b58\u50a8\u8282\u70b9\u8fdb\u884c\u4ea4\u4e92\uff0c\u8fd9\u91cc\u7684\u7f51\u7edc\u901a\u4fe1\u4ee3\u4ef7\u5728\u5927\u89c4\u6a21\u56fe\u8ba1\u7b97\u4e2d\u662f\u4e0d\u5bb9\u5ffd\u89c6\u7684\u3002\u89e3\u51b3\u601d\u8def\u4e5f\u5f88\u76f4\u63a5\uff0c\u5373\u5728\u6bcf\u4e2a\u8282\u70b9\u672c\u5730\u7f13\u5b58\u9876\u70b9\u7684\u95f4\u63a5\u90bb\u5c45\uff0c\u4f46\u8981\u7f13\u5b58\u54ea\u4e9b\u9876\u70b9\u7684\u90bb\u5c45\uff0c\u8981\u7f13\u5b58\u51e0\u4e2a\u90bb\u5c45\u662f\u9700\u8981\u4ed4\u7ec6\u8003\u91cf\u7684\u95ee\u9898\u3002AliGraph \u6ca1\u6709\u4f7f\u7528\u76ee\u524d\u5e38\u89c1\u7684\u4e00\u4e9b\u7f13\u5b58\u7b97\u6cd5\uff08\u5982 LRU\uff09\uff0c\u800c\u662f\u63d0\u51fa\u4e86\u4e00\u79cd\u65b0\u7684\u57fa\u4e8e\u9876\u70b9\u91cd\u8981\u6027\uff08importance\uff09\u7684\u7b97\u6cd5\u6765\u5bf9\u95f4\u63a5\u90bb\u5c45\u8fdb\u884c\u7f13\u5b58\u3002\u5728\u6709\u5411\u56fe\u4e2d\u8ba1\u7b97\u4e00\u4e2a\u9876\u70b9\u91cd\u8981\u6027\u7684\u516c\u5f0f\u662f ",(0,o.jsx)(r.code,{children:"\u5165\u90bb\u5c45\u7684\u4e2a\u6570 / \u51fa\u90bb\u5c45\u7684\u4e2a\u6570"}),"\uff0c\u6ce8\u610f\u8fd9\u91cc\u7684\u90bb\u5c45\u4e2a\u6570\u540c\u6837\u53ef\u4ee5\u662f\u76f4\u63a5\u7684\u6216\u8005\u95f4\u63a5\u7684\u3002\u5f53\u8fd9\u4e2a\u516c\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u5927\u4e8e\u67d0\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u9608\u503c\u65f6\u5373\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u300c\u91cd\u8981\u300d\u7684\u9876\u70b9\u3002\u4ece\u5b9e\u9645\u6d4b\u8bd5\u4e2d\u5f97\u51fa\u7684\u7ecf\u9a8c\u503c\u662f\u901a\u5e38\u53ea\u9700\u8981\u8ba1\u7b97\u4e24\u8df3\uff08hop\uff09\u7684\u90bb\u5c45\u4e2a\u6570\u5c31\u591f\u4e86\uff0c\u800c\u9608\u503c\u672c\u8eab\u4e0d\u662f\u4e00\u4e2a\u7279\u522b\u654f\u611f\u7684\u6570\u503c\uff0c\u8bbe\u7f6e\u5728 0.2 \u5de6\u53f3\u662f\u5bf9\u4e8e\u7f13\u5b58\u6210\u672c\u548c\u6548\u679c\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u5e73\u8861\u3002\u9009\u51fa\u6240\u6709\u91cd\u8981\u7684\u9876\u70b9\u4ee5\u540e\uff0c\u6700\u7ec8\u4f1a\u5728\u6240\u6709\u5305\u542b\u8fd9\u4e9b\u9876\u70b9\u7684\u8282\u70b9\u4e0a\u7f13\u5b58 ",(0,o.jsx)(r.em,{children:"k"})," \u8df3\u7684\u51fa\u90bb\u5c45\uff08out-neighbor\uff09\u3002"]}),"\n",(0,o.jsx)(r.p,{children:"GNN \u7b97\u6cd5\u901a\u5e38\u53ef\u4ee5\u603b\u7ed3\u4e3a 3 \u4e2a\u6b65\u9aa4\uff1a\u91c7\u6837\uff08sample\uff09\u67d0\u4e2a\u9876\u70b9\u7684\u90bb\u5c45\uff0c\u805a\u5408\uff08aggregate\uff09\u8fd9\u4e9b\u91c7\u6837\u540e\u7684\u9876\u70b9\u7684 embedding\uff0c\u5c06\u805a\u5408\u540e\u7684 embedding \u4e0e\u9876\u70b9\u81ea\u5df1\u7684\u8fdb\u884c\u5408\u5e76\uff08combine\uff09\u5f97\u5230\u65b0\u7684 embedding\u3002\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\u91c7\u6837\u662f\u6574\u4e2a\u6d41\u7a0b\u4e2d\u7684\u7b2c\u4e00\u6b65\uff0c\u91c7\u6837\u7684\u6548\u679c\u4e5f\u4f1a\u76f4\u63a5\u5f71\u54cd\u540e\u7eed\u8ba1\u7b97\u7684 embedding \u7ed3\u679c\u3002AliGraph \u62bd\u8c61\u4e86 3 \u7c7b\u91c7\u6837\u65b9\u6cd5\uff1a\u904d\u5386\u91c7\u6837\uff08traverse\uff09\u3001\u8fd1\u90bb\u91c7\u6837\uff08neighborhood\uff09\u548c\u8d1f\u91c7\u6837\uff08negative\uff09\u3002\u904d\u5386\u91c7\u6837\u662f\u4ece\u672c\u5730\u5b50\u56fe\u4e2d\u83b7\u53d6\u6570\u636e\uff1b\u8fd1\u90bb\u91c7\u6837\u5bf9\u4e8e 1 \u8df3\u7684\u90bb\u5c45\u53ef\u4ee5\u4ece\u672c\u5730\u5b58\u50a8\u4e2d\u83b7\u53d6\uff0c\u591a\u8df3\u7684\u90bb\u5c45\u5982\u679c\u5728\u7f13\u5b58\u4e2d\u5c31\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5426\u5219\u5c31\u8bf7\u6c42\u5176\u5b83\u8282\u70b9\uff1b\u8d1f\u91c7\u6837\u901a\u5e38\u4e5f\u662f\u4ece\u672c\u5730\u6311\u9009\u9876\u70b9\uff0c\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u9700\u8981\u4ece\u5176\u5b83\u8282\u70b9\u6311\u9009\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u5728\u91c7\u6837\u5b8c\u90bb\u5c45\u9876\u70b9\u4ee5\u540e\u5c31\u662f\u805a\u5408\u8fd9\u4e9b\u9876\u70b9\u7684 embedding\uff0c\u5e38\u7528\u7684\u805a\u5408\u65b9\u6cd5\u6709\uff1aelement-wise mean\u3001max-pooling \u548c LSTM\u3002\u6700\u540e\u662f\u5c06\u805a\u5408\u540e\u7684 embedding \u4e0e\u9876\u70b9\u81ea\u5df1\u7684\u8fdb\u884c\u5408\u5e76\uff0c\u901a\u5e38\u5c31\u662f\u5c06\u8fd9\u4e24\u4e2a embedding \u8fdb\u884c\u6c42\u548c\u3002\u4e3a\u4e86\u52a0\u901f\u805a\u5408\u548c\u5408\u5e76\u8fd9\u4e24\u4e2a\u7b97\u5b50\u7684\u8ba1\u7b97\uff0cAliGraph \u5e94\u7528\u4e86\u4e00\u4e2a\u7269\u5316\uff08materialization\uff09\u4e2d\u95f4\u5411\u91cf\u7684\u7b56\u7565\uff0c\u5373\u6bcf\u4e2a mini-batch \u4e2d\u7684\u6240\u6709\u9876\u70b9\u5171\u4eab\u91c7\u6837\u7684\u9876\u70b9\uff0c\u540c\u6837\u7684\u805a\u5408\u548c\u5408\u5e76\u64cd\u4f5c\u7684\u4e2d\u95f4\u7ed3\u679c\u4e5f\u5171\u4eab\uff0c\u8fd9\u4e2a\u7b56\u7565\u4f1a\u5927\u5e45\u964d\u4f4e\u8ba1\u7b97\u6210\u672c\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u5728\u6700\u540e\u7684\u8bc4\u4f30\u73af\u8282\u7528\u4e86\u4e24\u4e2a\u6765\u81ea\u6dd8\u5b9d\u7684\u6570\u636e\u96c6\uff0c\u4e24\u4e2a\u6570\u636e\u96c6\u4e4b\u95f4\u53ea\u6709\u5927\u5c0f\u7684\u533a\u522b\uff0c\u5927\u6570\u636e\u96c6\u662f\u5c0f\u6570\u636e\u96c6\u7684 6 \u500d\u5de6\u53f3\u3002\u5927\u6570\u636e\u96c6\u7684\u57fa\u7840\u6570\u636e\u662f\uff1a4.8 \u4ebf\u4e2a\u7528\u6237\u9876\u70b9\uff0c968 \u4e07\u4e2a\u5546\u54c1\u9876\u70b9\uff0c65.8 \u4ebf\u6761\u7528\u6237\u5230\u5546\u54c1\u7684\u8fb9\uff0c2.3 \u4ebf\u6761\u5546\u54c1\u5230\u5546\u54c1\u7684\u8fb9\uff0c\u7528\u6237\u5e73\u5747\u6709 27 \u4e2a\u5c5e\u6027\uff0c\u5546\u54c1\u5e73\u5747\u6709 32 \u4e2a\u5c5e\u6027\u3002\u5f53\u4f7f\u7528 200 \u4e2a worker\uff08\u8282\u70b9\u914d\u7f6e\u8bba\u6587\u4e2d\u6ca1\u6709\u8bf4\u660e\uff09\u65f6\u5927\u6570\u636e\u96c6\u53ea\u9700\u8981 5 \u5206\u949f\u5373\u53ef\u5c06\u6574\u4e2a\u56fe\u6784\u5efa\u5b8c\u6bd5\uff0c\u76f8\u6bd4\u4e4b\u4e0b\u4ee5\u5f80\u7684\u4e00\u4e9b\u65b9\u6848\u53ef\u80fd\u9700\u8981\u8017\u8d39\u6570\u5c0f\u65f6\u3002\u57fa\u4e8e\u9876\u70b9\u91cd\u8981\u6027\u7684\u7f13\u5b58\u7b97\u6cd5\u76f8\u6bd4 LRU \u8fd9\u4e9b\u4f20\u7edf\u7b97\u6cd5\u4e5f\u662f\u660e\u663e\u66f4\u4f18\u30023 \u7c7b\u91c7\u6837\u65b9\u6cd5\u7684\u6027\u80fd\u8bc4\u4f30\u7ed3\u679c\u4ece\u51e0\u6beb\u79d2\u5230\u51e0\u5341\u6beb\u79d2\u4e0d\u7b49\uff0c\u4f46\u6700\u957f\u4e5f\u4e0d\u8d85\u8fc7 60 \u6beb\u79d2\uff0c\u5e76\u4e14\u91c7\u6837\u6027\u80fd\u4e0e\u6570\u636e\u96c6\u5927\u5c0f\u4e0d\u592a\u76f8\u5173\u3002\u805a\u5408\u548c\u5408\u5e76\u7b97\u5b50\u76f8\u6bd4\u4f20\u7edf\u7684\u5b9e\u73b0\u4e5f\u6709\u4e00\u4e2a\u6570\u91cf\u7ea7\u7684\u6027\u80fd\u63d0\u5347\uff0c\u8fd9\u4e3b\u8981\u5f97\u76ca\u4e8e\u524d\u9762\u63d0\u5230\u7684\u7269\u5316\u7b56\u7565\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["AliGraph \u76ee\u524d\u5df2\u7ecf\u5f00\u6e90\uff08\u4e00\u90e8\u5206\uff1f\uff09\u4f46\u662f\u6362\u4e86\u4e00\u4e2a\u540d\u5b57\u53eb\u505a ",(0,o.jsx)(r.a,{href:"https://github.com/alibaba/graph-learn",children:"graph-learn"}),"\uff0c\u8ddf\u5927\u591a\u6570\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\u4e00\u6837\uff0c\u5e95\u5c42\u4f7f\u7528 C++ \u8bed\u8a00\u5b9e\u73b0\u5e76\u63d0\u4f9b Python \u8bed\u8a00\u7684 API\uff0c\u76ee\u524d\u652f\u6301 TensorFlow\uff0c\u672a\u6765\u4f1a\u652f\u6301 PyTorch\u3002\u6709\u610f\u601d\u7684\u662f\u521a\u521a\u5f00\u6e90\u4e0d\u4e45\u5c31\u6709\u4eba\u63d0\u4e86\u4e00\u4e2a ",(0,o.jsx)(r.a,{href:"https://github.com/alibaba/graph-learn/issues/16",children:"issue"})," \u5e0c\u671b\u80fd\u591f\u8ddf\u53e6\u5916\u51e0\u4e2a\u6d41\u884c\u7684 GNN \u6846\u67b6\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f46\u662f\u9879\u76ee\u6210\u5458\u7684\u56de\u7b54\u6bd4\u8f83\u542b\u7cca\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"building-ubers-go-monorepo-with-bazel",children:"Building Uber\u2019s Go Monorepo with Bazel"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://eng.uber.com/go-monorepo-bazel",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(r.p,{children:["Uber \u5e94\u8be5\u662f\u9664\u4e86 Google \u4ee5\u5916\u5f88\u65e9\u9009\u62e9\u5728\u540e\u7aef\u670d\u52a1\u4e2d\u5927\u89c4\u6a21\u4f7f\u7528 Go \u8bed\u8a00\u7684\u516c\u53f8\u4e4b\u4e00\uff0c\u5e76\u8d21\u732e\u4e86\u5f88\u591a\u8457\u540d\u7684 Go \u8bed\u8a00\u9879\u76ee\uff08\u5982 ",(0,o.jsx)(r.a,{href:"https://github.com/uber-go/zap",children:"zap"}),"\u3001",(0,o.jsx)(r.a,{href:"https://github.com/jaegertracing/jaeger",children:"Jaeger"}),"\uff09\u3002\u65e9\u5728 2017 \u5e74\uff0cUber \u7684 Android \u548c iOS \u56e2\u961f\u5c31\u5df2\u7ecf\u53ea\u4f7f\u7528\u4e00\u4e2a\u4ee3\u7801\u4ed3\u5e93\u8fdb\u884c\u5f00\u53d1\uff0c\u4fd7\u79f0 monorepo\u3002\u5b9e\u8df5 monorepo \u6700\u8457\u540d\u7684\u516c\u53f8\u5e94\u8be5\u8fd8\u662f Google\uff0c\u6709\u5174\u8da3\u53ef\u4ee5\u770b\u770b ",(0,o.jsx)(r.a,{href:"https://research.google/pubs/pub45424",children:"Why Google Stores Billions of Lines of Code in a Single Repository"})," \u8fd9\u7bc7\u6587\u7ae0\u3002\u73b0\u5728\u540e\u7aef\u56e2\u961f\u4e5f\u5f00\u59cb\u91c7\u7528 monorepo \u6765\u7ba1\u7406 Go \u8bed\u8a00\u9879\u76ee\uff0c\u4f46\u662f\u548c\u5ba2\u6237\u7aef\u56e2\u961f\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u6ca1\u6709\u7528 ",(0,o.jsx)(r.a,{href:"https://buck.build",children:"Buck"})," \u800c\u662f\u7528 ",(0,o.jsx)(r.a,{href:"https://bazel.build",children:"Bazel"}),"\uff08\u524d\u8005\u662f Facebook \u5f00\u6e90\uff0c\u540e\u8005\u662f Google \u5f00\u6e90\uff09\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u5728 monorepo \u4e2d\u5c06 Go \u8bed\u8a00\u548c Bazel \u7ed3\u5408\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"optimising-docker-layers-for-better-caching-with-nix",children:"Optimising Docker Layers for Better Caching with Nix"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://grahamc.com/blog/nix-and-layered-docker-images",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(r.p,{children:["\u6050\u6015\u5927\u591a\u6570\u65f6\u5019\u63a5\u89e6\u5bb9\u5668\u662f\u4ece\u6784\u5efa\u4e00\u4e2a Docker \u955c\u50cf\u5f00\u59cb\u7684\uff0c\u8fd9\u4e00\u6b65\u5f80\u5f80\u4e5f\u662f\u6700\u5bb9\u6613\u88ab\u5ffd\u89c6\u7684\u3002\u4e3a\u4ec0\u4e48\u6211\u7684\u955c\u50cf\u8fd9\u4e48\u5927\uff1f\u4e3a\u4ec0\u4e48\u6bcf\u6b21\u62c9\u53d6\u955c\u50cf\u90fd\u8981\u4ece\u5934\u5f00\u59cb\uff1f\u8fd9\u4e9b\u95ee\u9898\u53ef\u80fd\u4f1a\u968f\u7740\u4f7f\u7528\u65f6\u95f4\u8d8a\u6765\u8d8a\u957f\u9010\u6e10\u6d6e\u73b0\u51fa\u6765\uff0c\u8981\u56de\u7b54\u5b83\u4eec\u9700\u8981\u4e86\u89e3 Docker \u955c\u50cf\u7684\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\u300clayer\u300d\uff0c\u672c\u8d28\u4e0a\u4f60\u5728 ",(0,o.jsx)(r.code,{children:"Dockerfile"})," \u91cc\u5199\u7684\u6bcf\u4e00\u884c\u547d\u4ee4\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a layer\uff0c\u4e00\u4e2a\u955c\u50cf\u4fbf\u662f\u7531\u5f88\u591a layer \u6784\u6210\u3002Layer \u4e4b\u95f4\u662f\u6709\u5c42\u7ea7\u5173\u7cfb\u7684\uff0c\u5f53\u62c9\u53d6\u955c\u50cf\u65f6\u5982\u679c\u672c\u5730\u5df2\u7ecf\u5b58\u5728\u67d0\u4e2a layer \u5c31\u4e0d\u4f1a\u91cd\u590d\u62c9\u53d6\u3002\u5728\u4f20\u7edf\u7684 Linux \u53d1\u884c\u7248\u4e2d\u5b89\u88c5\u4f9d\u8d56\u65f6 Docker \u662f\u4e0d\u77e5\u9053\u5177\u4f53\u6709\u54ea\u4e9b\u6587\u4ef6\u88ab\u4fee\u6539\u7684\uff0c\u800c ",(0,o.jsx)(r.a,{href:"https://github.com/NixOS/nix",children:"Nix"})," \u8fd9\u4e2a\u7279\u6b8a\u7684\u5305\u7ba1\u7406\u5668\u91c7\u7528\u4e86\u4e0d\u4e00\u6837\u7684\u8bbe\u8ba1\u601d\u8def\u4f7f\u5f97\u5b89\u88c5\u4f9d\u8d56\u8fd9\u4ef6\u4e8b\u60c5\u5bf9\u4e8e Docker layer \u7f13\u5b58\u975e\u5e38\u53cb\u597d\u3002\u884d\u751f\u9605\u8bfb\u63a8\u8350 J\xe9r\xf4me Petazzoni \u5199\u7684\u5173\u4e8e\u5982\u4f55\u51cf\u5c11\u955c\u50cf\u5927\u5c0f\u7684",(0,o.jsx)(r.a,{href:"https://www.ardanlabs.com/blog/2020/02/docker-images-part1-reducing-image-size.html",children:"\u7cfb\u5217\u6587\u7ae0"}),"\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"proposal-permit-embedding-of-interfaces-with-overlapping-method-sets",children:"Proposal: Permit embedding of interfaces with overlapping method sets"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://github.com/golang/proposal/blob/master/design/6977-overlapping-interfaces.md",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(r.p,{children:["Interface \u662f Go \u8bed\u8a00\u4e00\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff0c\u7c7b\u4f3c\u5f88\u591a\u5176\u5b83\u8bed\u8a00\u4e2d\u7684\u6982\u5ff5\uff0c\u63a5\u53e3\u5b9a\u4e49\u597d\u4ee5\u540e\u662f\u9700\u8981\u901a\u8fc7 struct \u6765\u5b9e\u73b0\u7684\u3002\u4f46\u4e0d\u540c\u4e4b\u5904\u53c8\u5728\u4e8e struct \u4e0d\u9700\u8981\u663e\u5f0f\u58f0\u660e\u5b9e\u73b0\u4e86\u4ec0\u4e48 interface\uff0c\u53ea\u8981\u6ee1\u8db3 interface \u4e2d\u5b9a\u4e49\u7684\u63a5\u53e3\u5c31\u884c\uff0c\u8fd9\u4e2a\u5173\u952e\u8bbe\u8ba1\u4f7f\u5f97 Go \u8bed\u8a00\u7684 interface \u4f7f\u7528\u573a\u666f\u53ef\u4ee5\u975e\u5e38\u7075\u6d3b\u3002\u8ddf struct \u4e00\u6837 interface \u4e5f\u5141\u8bb8\u5d4c\u5957\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u5728\u4e00\u4e2a interface \u5b9a\u4e49\u4e2d\u5d4c\u5957\u53e6\u4e00\u4e2a interface\u3002\u5982\u679c\u540c\u65f6\u5d4c\u5957\u4e86\u591a\u4e2a interface\uff0c\u5e76\u4e14\u8fd9\u4e9b interface \u4e4b\u95f4\u6709\u91cd\u590d\u7684\u63a5\u53e3\u5728\u7f16\u8bd1\u65f6\u662f\u4f1a\u62a5\u9519\u7684\u3002\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e3a\u4e86\u89c4\u907f\u8fd9\u4e2a\u9650\u5236\u53ef\u80fd\u9700\u8981\u4fee\u6539 interface \u7684\u5b9a\u4e49\uff0c\u8fd9\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u4e0d\u592a\u53cb\u597d\u3002\u4e0a\u9762\u8fd9\u4e2a\u63d0\u6848\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u4e0d\u4fee\u6539\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u907f\u5f00\u8fd9\u4e2a\u9650\u5236\uff0c\u76ee\u524d\u8fd9\u4e2a\u529f\u80fd\u5df2\u7ecf\u5728 ",(0,o.jsx)(r.a,{href:"https://golang.org/doc/go1.14#language",children:"Go 1.14"})," \u4e2d\u53d1\u5e03\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"vextab",children:"VexTab"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://github.com/0xfe/vextab",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(r.p,{children:["\u4e0d\u7ba1\u662f\u97f3\u4e50\u521b\u4f5c\u8fd8\u662f\u97f3\u4e50\u6f14\u594f\uff0c\u4e50\u8c31\u90fd\u662f\u4e00\u4e2a\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e1c\u897f\u3002\u8fd8\u8bb0\u5f97\u521a\u5b66\u5409\u4ed6\u90a3\u4f1a\u513f\u975e\u5e38\u70ed\u8877\u7684\u4e00\u4ef6\u4e8b\u60c5\u5c31\u662f\u53bb\u7f51\u4e0a\u641c\u96c6\u5404\u79cd\u6b4c\u66f2\u7684\u516d\u7ebf\u8c31\uff0c\u8fd9\u4e9b\u4e50\u8c31\u7684\u683c\u5f0f\u4ece\u6700\u6734\u7d20\u7684\u7eaf\u6587\u672c\u5230\u9ad8\u7ea7\u7684 ",(0,o.jsx)(r.a,{href:"https://www.guitar-pro.com",children:"Guitar Pro"})," \u683c\u5f0f\u90fd\u6709\u3002\u518d\u540e\u6765\u5f00\u59cb\u5b66\u4e60\u6252\u6b4c\uff0c\u4e5f\u9762\u4e34\u628a\u6252\u4e0b\u6765\u7684\u8c31\u5b50\u7eaa\u5f55\u4e0b\u6765\u7684\u9700\u6c42\u3002\u867d\u7136 Guitar Pro \u5f88\u597d\u4f46\u6bd5\u7adf\u662f\u4e00\u4e2a\u6536\u8d39\u8f6f\u4ef6\uff0c\u6587\u4ef6\u683c\u5f0f\u4e5f\u662f\u79c1\u6709\u7684\u3002\u5c31\u50cf\u6211\u66f4\u559c\u6b22 Markdown \u800c\u4e0d\u662f\u76f4\u63a5\u7528 Word \u4e00\u6837\uff0c\u4e00\u76f4\u5e0c\u671b\u80fd\u6709\u4e00\u4e2a\u7c7b\u4f3c\u7684\u6807\u8bb0\u8bed\u8a00\u7528\u4e8e\u7f16\u5199\u4e50\u8c31\u3002VexTab \u5373\u662f\u8fd9\u6837\u4e00\u4e2a\u4e13\u95e8\u7528\u4e8e\u7f16\u5199\u4e94\u7ebf\u8c31\u548c\u516d\u7ebf\u8c31\u7684\u8bed\u8a00\uff0c\u4e5f\u63d0\u4f9b\u4e00\u4e2a JavaScript \u5e93\u65b9\u4fbf\u5d4c\u5165\u5230\u7f51\u9875\u4e2d\u3002\u6709\u610f\u601d\u7684\u662f VexTab \u7684\u4f5c\u8005\u540c\u65f6\u4e5f\u662f Google \u7684\u4e00\u540d\u5458\u5de5\u3002"]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>s});var n=i(6540);const o={},t=n.createContext(o);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}},4717:e=>{e.exports=JSON.parse('{"permalink":"/issues/4","source":"@site/blog/4.md","title":"Issue #4","description":"\u672c\u671f\u5173\u952e\u8bcd\uff1aAliGraph\u3001Monorepo\u3001Docker image\u3001Go interface\u3001Guitar tab","date":"2020-06-17T14:07:52.000Z","tags":[{"inline":true,"label":"issue","permalink":"/issues/tags/issue"}],"readingTime":14.865,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Issue #4","date":"2020-06-17 14:07:52 +0800","tags":["issue"]},"unlisted":false,"prevItem":{"title":"Issue #5","permalink":"/issues/5"},"nextItem":{"title":"Issue #3","permalink":"/issues/3"}}')}}]);