"use strict";(self.webpackChunkmaybe_news_github_io=self.webpackChunkmaybe_news_github_io||[]).push([[7643],{5124:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});a(6540);var i=a(4164),t=a(4586),n=a(1213),l=a(7559),r=a(1728),o=a(7713),m=a(1463),c=a(3892),d=a(5260),h=a(4096),u=a(4848);function x(e){const s=(0,h.kJ)(e);return(0,u.jsx)(d.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(s)})})}function g(e){const{metadata:s}=e,{siteConfig:{title:a}}=(0,t.A)(),{blogDescription:i,blogTitle:l,permalink:r}=s,o="/"===r?a:l;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.be,{title:o,description:i}),(0,u.jsx)(m.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:s,items:a,sidebar:i}=e;return(0,u.jsxs)(r.A,{sidebar:i,children:[(0,u.jsx)(c.A,{items:a}),(0,u.jsx)(o.A,{metadata:s})]})}function j(e){return(0,u.jsxs)(n.e3,{className:(0,i.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,u.jsx)(g,{...e}),(0,u.jsx)(x,{...e}),(0,u.jsx)(p,{...e})]})}},7713:(e,s,a)=>{a.d(s,{A:()=>l});a(6540);var i=a(1312),t=a(9022),n=a(4848);function l(e){const{metadata:s}=e,{previousPage:a,nextPage:l}=s;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(t.A,{permalink:a,title:(0,n.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(t.A,{permalink:l,title:(0,n.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,s,a)=>{a.d(s,{A:()=>l});a(6540);var i=a(4096),t=a(8375),n=a(4848);function l(e){let{items:s,component:a=t.A}=e;return(0,n.jsx)(n.Fragment,{children:s.map((e=>{let{content:s}=e;return(0,n.jsx)(i.in,{content:s,children:(0,n.jsx)(a,{children:(0,n.jsx)(s,{})})},s.metadata.permalink)}))})}},2706:(e,s,a)=>{a.d(s,{A:()=>S});var i=a(6540),t=a(4581),n=a(4164),l=a(1312),r=a(6347),o=a(4096),m=a(6342),c=a(1107),d=a(4848);function h(e){let{year:s,yearGroupHeadingClassName:a,children:i}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(c.A,{as:"h3",className:a,children:s}),i]})}function u(e){let{items:s,yearGroupHeadingClassName:a,ListComponent:i}=e;if((0,m.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(s);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[s,t]=e;return(0,d.jsx)(h,{year:s,yearGroupHeadingClassName:a,children:(0,d.jsx)(i,{items:t})},s)}))})}return(0,d.jsx)(i,{items:s})}const x=(0,i.memo)(u);var g=a(8774);const p="sidebar_brwN",j="sidebarItemTitle_r4Q1",b="sidebarItemList_QwSx",N="sidebarItem_lnhn",v="sidebarItemLink_yNGZ",A="sidebarItemLinkActive_oSRm",_="yearGroupHeading_hiiw";function f(e){let{blogId:s}=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:(0,n.A)(j,"margin-bottom--md"),children:"Feed"}),(0,d.jsxs)("ul",{className:(0,n.A)(b,"clean-list"),children:[(0,d.jsx)("li",{className:N,children:(0,d.jsx)("a",{href:`/${s}/atom.xml`,className:v,children:"Atom"})},"atom"),(0,d.jsx)("li",{className:N,children:(0,d.jsx)("a",{href:`/${s}/rss.xml`,className:v,children:"RSS"})},"rss"),(0,d.jsx)("li",{className:N,children:(0,d.jsx)("a",{href:`/${s}/feed.json`,className:v,children:"JSON"})},"json")]})]})}const k=e=>{let{items:s}=e;return(0,d.jsx)(o.OU,{items:s,ulClassName:(0,n.A)(b,"clean-list"),liClassName:N,linkClassName:v,linkActiveClassName:A})};function C(e){let{sidebar:s}=e;const a=(0,r.zy)().pathname.split("/")[1],i=(0,o.Gx)(s.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,n.A)(j,"margin-bottom--md"),children:s.title}),(0,d.jsx)(x,{items:i,ListComponent:k,yearGroupHeadingClassName:_}),(0,d.jsx)("div",{className:(0,n.A)(j,"margin-bottom--md"),children:(0,d.jsx)(g.A,{isNavLink:!0,to:`/${a}/archive`,className:v,activeClassName:A,children:"Archive"})}),(0,d.jsx)(f,{blogId:a})]})})}const y=(0,i.memo)(C);var G=a(5600);const w="yearGroupHeading_fvTq",L=e=>{let{items:s}=e;return(0,d.jsx)(o.OU,{items:s,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function I(e){let{sidebar:s}=e;const a=(0,r.zy)().pathname.split("/")[1],i=(0,o.Gx)(s.items);return(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{items:i,ListComponent:L,yearGroupHeadingClassName:w}),(0,d.jsx)("ul",{className:"menu__list",children:(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(g.A,{isNavLink:!0,to:`/${a}/archive`,className:"menu__link",activeClassName:"menu__link--active",children:"Archive"})},"archive")})]})}function T(e){return(0,d.jsx)(G.GX,{component:I,props:e})}const H=(0,i.memo)(T);function S(e){let{sidebar:s}=e;const a=(0,t.l)();return s?.items.length?"mobile"===a?(0,d.jsx)(H,{sidebar:s}):(0,d.jsx)(y,{sidebar:s}):null}}}]);