"use strict";(self.webpackChunkmaybe_news_github_io=self.webpackChunkmaybe_news_github_io||[]).push([[4013],{1874:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(102),l=a(7294),r=a(4334),s=a(5091),i=a(1972),c=["sidebar","toc","children"];function m(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,n.Z)(e,c),u=t&&t.items.length>0;return l.createElement(s.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(i.Z,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":u,"col--9 col--offset-1":!u}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},4057:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(4334),r=a(1614);var s=a(6742),i=a(8015),c=a(1874),m=a(4588),o="tag_Nnez";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(m.Z,e))}))),n.createElement("hr",null))}function E(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))}var v=a(6145);function g(e){var t=e.tags,a=e.sidebar,m=(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},n.createElement(s.d,{title:m}),n.createElement(v.Z,{tag:"blog_tags_list"}),n.createElement(c.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(E,{tags:t})))}},4588:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4334),r=a(8746),s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,m?c:i)},a,m&&n.createElement("span",null,m))}},1972:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(4980),r=a(6010),s=a(1614),i=a(6775),c=a(8746),m="sidebar_brwN",o="sidebarItemTitle_r4Q1",u="sidebarItemList_QwSx",E="sidebarItem_lnhn",v="sidebarItemLink_yNGZ",g="sidebarItemLinkActive_oSRm";function b(e){var t=e.sidebar,a=(0,i.TH)().pathname.split("/")[1];return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,r.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:E},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:g},e.title))}))),n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},n.createElement(c.Z,{isNavLink:!0,to:"/"+a+"/archive",className:v,activeClassName:g},"Archive")),n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},"Feed"),n.createElement("ul",{className:(0,r.Z)(u,"clean-list")},n.createElement("li",{key:"atom",className:E},n.createElement("a",{href:"/"+a+"/atom.xml",className:v},"Atom")),n.createElement("li",{key:"rss",className:E},n.createElement("a",{href:"/"+a+"/rss.xml",className:v},"RSS")),n.createElement("li",{key:"json",className:E},n.createElement("a",{href:"/"+a+"/feed.json",className:v},"JSON")))))}var d=a(2306);function N(e){var t=e.sidebar,a=(0,i.TH)().pathname.split("/")[1];return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})),n.createElement("li",{key:"archive",className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:"/"+a+"/archive",className:"menu__link",activeClassName:"menu__link--active"},"Archive")))}function f(e){return n.createElement(d.Zo,{component:N,props:e})}function p(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(b,{sidebar:t}):null}}}]);