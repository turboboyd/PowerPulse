"use strict";(self.webpackChunksfsf=self.webpackChunksfsf||[]).push([[584],{4112:function(e,t,i){i.d(t,{Z:function(){return n}});var r="TitlePage_title__zyjBQ",s=i(3329);function n(e){var t=e.title;return(0,s.jsx)("h1",{className:r,children:t})}},8584:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=i(9439),s=i(2791),n=i(4112),c="ExercisesPage_wrapperTopLine__4Gv7f",a=i(7834),l=i(7689),o={categoryUl:"ExercisesFilter_categoryUl__9GPTM",backButton:"ExercisesFilter_backButton__+cuVM",subCatH:"ExercisesFilter_subCatH__fBj9k",sliderUl:"ExercisesFilter_sliderUl__Iujgm",sliderLi:"ExercisesFilter_sliderLi__65RO1",active:"ExercisesFilter_active__ETb-K",exercisesContainer:"ExercisesFilter_exercisesContainer__1ubKS",exerciseItem:"ExercisesFilter_exerciseItem__yN73B",sliderContainer:"ExercisesFilter_sliderContainer__-S0qj",pagination:"ExercisesFilter_pagination__DUwIu",paginationDot:"ExercisesFilter_paginationDot__vZAFD",activeDot:"ExercisesFilter_activeDot__IsFyc"},u=i(3329);var _=function(e){var t=e.selectedCategory,i=e.setSelectedCategory,r=e.setCurrentPage,s=function(e){return"".concat(t===e?o.active:""," ").concat(o.sliderLi)};return(0,u.jsx)("div",{className:o.categoryContainer,children:(0,u.jsx)("ul",{className:o.sliderUl,children:["Body parts","Equipment","Muscles"].map((function(e){return(0,u.jsx)("li",{onClick:function(){return function(e){t!==e&&r(1),i(e)}(e)},className:s(e),children:e},e)}))})})},x=i(9434),d=i(5781),m=i(2232),g="ExercisesSubcategoriesItem_exerciseItemWrap__+WjCw",f="ExercisesSubcategoriesItem_exerciseItem__S5cc+",p=function(e){var t=e.exercise,i=e.onClick;return(0,u.jsxs)("div",{className:g,onClick:i,children:[(0,u.jsx)("span",{className:f,children:t.name}),(0,u.jsx)("img",{src:t.imgURL,alt:t.filter})]})},v="ExercisesItemType_exercisesContainer__rIv7J",h="ExercisesItemType_exerciseItem__GW0cF",j=i(365),C=i(2041);var E=function(e){var t=e.type,i=void 0===t?"Body parts":t,r=e.page,n=e.limit,c=e.setLimit,a=(0,d.Z)(),o=a.exercisesFilter,_=a.exercisesIsLoading,g=(0,l.s0)(),f=(0,x.I0)(),E=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-width")),y=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--item-height"));return(0,s.useEffect)((function(){var e=window.innerWidth;c(e>=1440||e<768?10:9)}),[c]),(0,s.useEffect)((function(){f((0,j.h)({type:i,page:r,limit:n}))}),[f,i,r,n]),(0,u.jsxs)(u.Fragment,{children:[_&&(0,u.jsx)(m.Z,{}),(0,u.jsx)("div",{className:v,children:o&&o.map((function(e){return(0,u.jsx)("div",{className:h,children:(0,u.jsx)(p,{exercise:e,style:{width:E,height:y},onClick:function(){return t=e._id,void g("".concat(C.ZT,"/").concat(t));var t}})},e._id)}))})]})},y="ExercisesPagination_active__LmjRw",F="ExercisesPagination_pagination__qF7m-",I="ExercisesPagination_paginationDot__IEe+i",P="ExercisesPagination_activeDot__G6UhK";var S=function(e){var t=e.currentPage,i=e.setCurrentPage,r=e.selectedCategory,s=e.limit,n=(0,d.Z)().exercisesFilter,c=r.toLowerCase(),a=[{"body parts":10},{muscles:19},{equipment:28}].filter((function(e){return e[c]})),l=Object.values(a[0])[0],o=n?Math.ceil(l/s):0,_=s!==l;return(0,u.jsx)(u.Fragment,{children:_&&(0,u.jsx)("div",{className:F,children:Array.from({length:o},(function(e,r){return r*s<l&&(0,u.jsx)("span",{onClick:function(){return function(e){var t=Math.min(Math.max(1,e),o);(t-1)*s<l&&i(t)}(r+1)},className:t===r+1?"".concat(y," ").concat(I," ").concat(P):I,children:"\u2022"},r+1)}))})})},b=function(){var e=(0,s.useState)("Body parts"),t=(0,r.Z)(e,2),i=t[0],o=t[1],x=(0,s.useState)(1),d=(0,r.Z)(x,2),m=d[0],g=d[1],f=(0,s.useState)(),p=(0,r.Z)(f,2),v=p[0],h=p[1],j=(0,a.Z)().user;return j&&null!==j.profileSettings?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)(n.Z,{title:"Exercises"}),(0,u.jsx)(_,{selectedCategory:i,setSelectedCategory:o,setCurrentPage:g})]}),(0,u.jsx)(E,{type:i,page:m,limit:v,setLimit:h}),(0,u.jsx)(S,{currentPage:m,setCurrentPage:g,selectedCategory:i,limit:v})]}):(0,u.jsx)(l.Fg,{to:C._2})}}}]);
//# sourceMappingURL=584.82a9ed68.chunk.js.map