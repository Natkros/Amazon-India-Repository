(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))e(y);new MutationObserver(y=>{for(const h of y)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&e(b)}).observe(document,{childList:!0,subtree:!0});function O(y){const h={};return y.integrity&&(h.integrity=y.integrity),y.referrerPolicy&&(h.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?h.credentials="include":y.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function e(y){if(y.ep)return;y.ep=!0;const h=O(y);fetch(y.href,h)}})();(function(){const H=[{id:"p1",name:"iPhone 14",category:"Electronics",brand:"Apple",price:69999,profitMargin:.12,baseSales:52e5,baseUnits:3421,icon:"📱",rating:4.8,inStock:!0},{id:"p2",name:"Samsung TV",category:"Electronics",brand:"Samsung",price:41990,profitMargin:.14,baseSales:48e5,baseUnits:2981,icon:"📺",rating:4.7,inStock:!0},{id:"p3",name:"boAt Headphones",category:"Electronics",brand:"boAt",price:1499,profitMargin:.24,baseSales:36e5,baseUnits:5213,icon:"🎧",rating:4.5,inStock:!0},{id:"p4",name:"Nike Running Shoes",category:"Fashion",brand:"Nike",price:4495,profitMargin:.22,baseSales:31e5,baseUnits:4892,icon:"👟",rating:4.6,inStock:!0},{id:"p5",name:"Ambrane Power Bank",category:"Electronics",brand:"Ambrane",price:1899,profitMargin:.18,baseSales:29e5,baseUnits:6421,icon:"🔋",rating:4.4,inStock:!0},{id:"p6",name:"Prestige Cooker",category:"Home & Kitchen",brand:"Prestige",price:2350,profitMargin:.19,baseSales:24e5,baseUnits:7983,icon:"🍲",rating:4.6,inStock:!0},{id:"p7",name:"LG Washing Machine",category:"Home & Kitchen",brand:"LG",price:28990,profitMargin:.15,baseSales:21e5,baseUnits:1876,icon:"🧺",rating:4.7,inStock:!0},{id:"p8",name:"Puma Sports T-Shirt",category:"Fashion",brand:"Puma",price:899,profitMargin:.28,baseSales:18e5,baseUnits:4210,icon:"👕",rating:4.3,inStock:!0},{id:"p9",name:"The Alchemist (Book)",category:"Books",brand:"HarperCollins",price:399,profitMargin:.35,baseSales:16e5,baseUnits:6784,icon:"📖",rating:4.9,inStock:!0},{id:"p10",name:"Philips Multi Trimmer",category:"Beauty & Personal Care",brand:"Philips",price:1599,profitMargin:.21,baseSales:15e5,baseUnits:5093,icon:"✂️",rating:4.5,inStock:!0},{id:"p11",name:"OnePlus Nord CE 3",category:"Electronics",brand:"OnePlus",price:19999,profitMargin:.11,baseSales:142e4,baseUnits:2150,icon:"📲",rating:4.6,inStock:!0},{id:"p12",name:"Levi's 511 Slim Fit",category:"Fashion",brand:"Levi's",price:2499,profitMargin:.25,baseSales:135e4,baseUnits:2800,icon:"👖",rating:4.5,inStock:!0},{id:"p13",name:"Echo Dot 5th Gen",category:"Electronics",brand:"Amazon",price:4499,profitMargin:.2,baseSales:128e4,baseUnits:3100,icon:"🔊",rating:4.7,inStock:!0},{id:"p14",name:"Kindle Paperwhite",category:"Books",brand:"Amazon",price:12999,profitMargin:.16,baseSales:115e4,baseUnits:1420,icon:"📚",rating:4.8,inStock:!0},{id:"p15",name:"Bajaj Mixer Grinder",category:"Home & Kitchen",brand:"Bajaj",price:2999,profitMargin:.17,baseSales:105e4,baseUnits:2200,icon:"🥣",rating:4.4,inStock:!0}],x=[{name:"Maharashtra",region:"West",baseSales:184e5,baseProfit:28e5,baseOrders:7850},{name:"Uttar Pradesh",region:"North",baseSales:142e5,baseProfit:19e5,baseOrders:6240},{name:"Karnataka",region:"South",baseSales:127e5,baseProfit:21e5,baseOrders:5820},{name:"Tamil Nadu",region:"South",baseSales:113e5,baseProfit:17e5,baseOrders:4950},{name:"Delhi",region:"North",baseSales:109e5,baseProfit:13e5,baseOrders:4680},{name:"West Bengal",region:"East",baseSales:86e5,baseProfit:11e5,baseOrders:3890},{name:"Gujarat",region:"West",baseSales:81e5,baseProfit:13e5,baseOrders:3650},{name:"Rajasthan",region:"North",baseSales:69e5,baseProfit:8e5,baseOrders:3120},{name:"Telangana",region:"South",baseSales:63e5,baseProfit:1e6,baseOrders:2890},{name:"Madhya Pradesh",region:"Central",baseSales:58e5,baseProfit:7e5,baseOrders:2540},{name:"Kerala",region:"South",baseSales:49e5,baseProfit:65e4,baseOrders:2100},{name:"Andhra Pradesh",region:"South",baseSales:45e5,baseProfit:58e4,baseOrders:1950},{name:"Punjab",region:"North",baseSales:39e5,baseProfit:52e4,baseOrders:1780},{name:"Haryana",region:"North",baseSales:37e5,baseProfit:49e4,baseOrders:1650},{name:"Bihar",region:"East",baseSales:32e5,baseProfit:41e4,baseOrders:1450}],O=[{rank:1,city:"Bengaluru",state:"Karnataka",baseOrders:6421,baseSales:68e5,baseProfit:12e5},{rank:2,city:"Mumbai",state:"Maharashtra",baseOrders:5982,baseSales:62e5,baseProfit:1e6},{rank:3,city:"New Delhi",state:"Delhi",baseOrders:5421,baseSales:59e5,baseProfit:9e5},{rank:4,city:"Hyderabad",state:"Telangana",baseOrders:4982,baseSales:51e5,baseProfit:8e5},{rank:5,city:"Chennai",state:"Tamil Nadu",baseOrders:4321,baseSales:43e5,baseProfit:7e5},{rank:6,city:"Kolkata",state:"West Bengal",baseOrders:3987,baseSales:39e5,baseProfit:6e5},{rank:7,city:"Pune",state:"Maharashtra",baseOrders:3876,baseSales:36e5,baseProfit:6e5},{rank:8,city:"Ahmedabad",state:"Gujarat",baseOrders:3421,baseSales:31e5,baseProfit:5e5},{rank:9,city:"Jaipur",state:"Rajasthan",baseOrders:2987,baseSales:27e5,baseProfit:4e5},{rank:10,city:"Lucknow",state:"Uttar Pradesh",baseOrders:2654,baseSales:24e5,baseProfit:4e5},{rank:11,city:"Surat",state:"Gujarat",baseOrders:2210,baseSales:198e4,baseProfit:31e4},{rank:12,city:"Nagpur",state:"Maharashtra",baseOrders:1890,baseSales:165e4,baseProfit:26e4}],e={liveActive:!0,liveTimer:null,salesToggle:"Sales",profitToggle:"Profit",mapMetric:"sales",trendTimeframe:"Monthly",activeTab:"overview",searchQuery:"",selectedFormat:"csv",filters:{date:"all",state:"all",city:"all",category:"all",product:"all",status:"all",payment:"all",fulfillment:"all",channel:"all"},totals:{sales:123456789,profit:19876432,orders:48923,units:75642,cancelled:3421,delivered:44892,pending:220},monthlyTrend:[{month:"Jan",sales:2.5,profit:.4},{month:"Feb",sales:3.2,profit:.5},{month:"Mar",sales:4.1,profit:.6},{month:"Apr",sales:5.2,profit:.8},{month:"May",sales:6,profit:.9},{month:"Jun",sales:5.8,profit:.9},{month:"Jul",sales:6.4,profit:1},{month:"Aug",sales:7.2,profit:1.1},{month:"Sep",sales:8.5,profit:1.3},{month:"Oct",sales:10.2,profit:1.7},{month:"Nov",sales:11.5,profit:1.9},{month:"Dec",sales:9.8,profit:1.6}],categories:[{name:"Electronics",sales:14.2,color:"#f97316"},{name:"Fashion",sales:9.8,color:"#3b82f6"},{name:"Home & Kitchen",sales:7.1,color:"#10b981"},{name:"Beauty & Personal Care",sales:4.3,color:"#ec4899"},{name:"Books",sales:2.9,color:"#8b5cf6"},{name:"Others",sales:1.8,color:"#64748b"}],products:H.map(t=>({...t,sales:t.baseSales,units:t.baseUnits})),states:x.map(t=>({...t,sales:t.baseSales,profit:t.baseProfit,orders:t.baseOrders})),cities:O.map(t=>({...t,sales:t.baseSales,profit:t.baseProfit,orders:t.baseOrders})),paymentMethods:[{name:"UPI",percentage:38.5,color:"#f97316",volume:4753e4,txCount:18835},{name:"COD",percentage:24.3,color:"#0ea5e9",volume:3e7,txCount:11888},{name:"Credit Card",percentage:18.7,color:"#10b981",volume:23086e3,txCount:9148},{name:"Debit Card",percentage:10.2,color:"#6366f1",volume:12592e3,txCount:4990},{name:"Net Banking",percentage:6.1,color:"#a855f7",volume:753e4,txCount:2984},{name:"Others",percentage:2.2,color:"#64748b",volume:2718e3,txCount:1078}],fulfillmentTypes:[{name:"Fulfilled by Amazon (FBA)",percentage:62.1,color:"#f97316",count:30381},{name:"Fulfilled by Seller",percentage:37.9,color:"#2563eb",count:18542}],orderStatus:[{status:"Delivered",percentage:91.8,color:"#10b981"},{status:"Cancelled",percentage:7,color:"#ef4444"},{status:"Returned",percentage:.8,color:"#3b82f6"},{status:"Pending",percentage:.4,color:"#f59e0b"}],recentOrders:[],keyInsights:[{id:"1",icon:"trending-up",color:"#10b981",bg:"rgba(16, 185, 129, 0.15)",text:"Sales increased by 18.2% compared to previous period.",category:"Growth",detail:"Festive season spike in electronics and fashion pushed record sales velocity across all tier-1 and tier-2 regions."},{id:"2",icon:"shopping-bag",color:"#f97316",bg:"rgba(249, 115, 22, 0.15)",text:"Electronics contributes 34.0% of total sales.",category:"Category Mix",detail:"Premium smartphones and 4K smart TVs drove highest gross basket transaction value."},{id:"3",icon:"x-circle",color:"#ef4444",bg:"rgba(239, 68, 68, 0.15)",text:"Cancellation rate decreased to 7.0%.",category:"Operations",detail:"Direct FBA 1-day delivery and instant OTP verification on COD orders reduced transit cancellations."},{id:"4",icon:"smartphone",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)",text:"UPI is the most preferred payment method (38.5%).",category:"Payments",detail:"1-click UPI checkout conversion improved substantially across all mobile web and app sessions."},{id:"5",icon:"map-pin",color:"#f59e0b",bg:"rgba(245, 158, 11, 0.15)",text:"Maharashtra generates the highest revenue (₹ 18.4M).",category:"Geographic",detail:"Mumbai and Pune metropolitan areas lead overall state-level consumer spend."}]};function y(){const t=["Rahul Sharma","Priya Patel","Amit Verma","Sneha Iyer","Vikas Gupta","Ananya Roy","Rohan Mehta","Deepika Nair","Suresh Kumar","Neha Deshmukh"],s=Date.now();for(let l=20;l>=1;l--){const d=e.products[Math.floor(Math.random()*e.products.length)],i=e.cities[Math.floor(Math.random()*e.cities.length)],a=e.paymentMethods[Math.floor(Math.random()*e.paymentMethods.length)].name,r=Math.random()>.35?"Fulfilled by Amazon (FBA)":"Fulfilled by Seller",o=Math.random()>.08?"Delivered":Math.random()>.5?"Pending":"Cancelled",c=new Date(s-l*18e4);e.recentOrders.push({id:`AMZ-IN-${Math.floor(1e7+Math.random()*9e7)}`,time:c.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:c.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),customer:t[Math.floor(Math.random()*t.length)],product:d.name,category:d.category,icon:d.icon,price:d.price,profit:Math.round(d.price*d.profitMargin),quantity:1,city:i.city,state:i.state,payment:a,fulfillment:r,channel:"Amazon.in",status:o})}}function h(t){if(isNaN(t)||t===null||t===void 0)return"₹ 0";const s=Math.round(t).toString().split("");let l=s.splice(-3).join(""),d=s.join("");return d!==""&&(l=","+l),`₹ ${d.replace(/\B(?=(\d{2})+(?!\d))/g,",")+l}`}function b(t){return isNaN(t)?"₹ 0M":`₹ ${(t/1e6).toFixed(1)}M`}function v(t){return isNaN(t)?"0":Math.round(t).toLocaleString("en-IN")}const J=[{id:"JK",name:"Jammu and Kashmir",d:"M 140 25 L 165 20 L 195 35 L 210 60 L 190 85 L 160 85 L 145 75 L 130 55 Z"},{id:"HP",name:"Himachal Pradesh",d:"M 160 85 L 190 85 L 205 105 L 180 125 L 160 110 Z"},{id:"PB",name:"Punjab",d:"M 130 95 L 160 95 L 160 125 L 140 135 L 125 115 Z"},{id:"UT",name:"Uttarakhand",d:"M 180 105 L 215 115 L 210 145 L 180 135 Z"},{id:"HR",name:"Haryana",d:"M 145 125 L 175 125 L 175 155 L 145 155 Z"},{id:"DL",name:"Delhi",d:"M 168 138 L 178 138 L 178 148 L 168 148 Z"},{id:"RJ",name:"Rajasthan",d:"M 95 130 L 145 130 L 155 175 L 135 220 L 90 205 L 75 160 Z"},{id:"UP",name:"Uttar Pradesh",d:"M 175 130 L 250 140 L 270 180 L 225 210 L 175 190 L 165 155 Z"},{id:"BR",name:"Bihar",d:"M 255 165 L 315 165 L 310 205 L 255 205 Z"},{id:"WB",name:"West Bengal",d:"M 305 175 L 335 175 L 330 245 L 295 240 L 295 210 Z"},{id:"AS",name:"Assam",d:"M 345 155 L 415 155 L 400 185 L 345 180 Z"},{id:"AR",name:"Arunachal Pradesh",d:"M 370 120 L 435 130 L 425 155 L 370 145 Z"},{id:"JH",name:"Jharkhand",d:"M 260 205 L 305 205 L 295 245 L 250 240 Z"},{id:"OR",name:"Odisha",d:"M 255 245 L 305 245 L 285 305 L 235 285 Z"},{id:"MP",name:"Madhya Pradesh",d:"M 140 200 L 230 200 L 240 250 L 155 260 L 130 230 Z"},{id:"GJ",name:"Gujarat",d:"M 60 200 L 125 210 L 125 265 L 75 270 L 55 235 Z"},{id:"MH",name:"Maharashtra",d:"M 115 265 L 215 255 L 210 330 L 130 335 L 105 295 Z"},{id:"TG",name:"Telangana",d:"M 175 305 L 225 305 L 215 365 L 165 350 Z"},{id:"AP",name:"Andhra Pradesh",d:"M 205 320 L 265 300 L 230 410 L 185 390 L 195 345 Z"},{id:"KA",name:"Karnataka",d:"M 130 335 L 180 340 L 175 425 L 125 410 L 120 365 Z"},{id:"KL",name:"Kerala",d:"M 135 415 L 165 415 L 155 480 L 130 460 Z"},{id:"TN",name:"Tamil Nadu",d:"M 160 405 L 205 405 L 185 490 L 145 485 Z"}];function N(){let t=1,s=e.products.slice(),l=e.states.slice(),d=e.cities.slice(),i=e.categories.slice();if(e.filters.date==="q1"?t*=.25:e.filters.date==="q2"?t*=.28:e.filters.date==="q3"?t*=.32:e.filters.date==="q4"?t*=.38:e.filters.date==="last30"&&(t*=.12),e.filters.category!=="all"&&(s=s.filter(p=>p.category===e.filters.category),i=i.filter(p=>p.name===e.filters.category),t*=e.filters.category==="Electronics"?.34:e.filters.category==="Fashion"?.24:.18),e.filters.product!=="all"&&(s=s.filter(p=>p.name===e.filters.product),t*=.15),e.filters.state!=="all"&&(l=l.filter(p=>p.name===e.filters.state),d=d.filter(p=>p.state===e.filters.state),t*=.22),e.filters.city!=="all"&&(d=d.filter(p=>p.city===e.filters.city),t*=.12),e.filters.status!=="all"){const p=e.orderStatus.find(u=>u.status===e.filters.status);t*=(p?p.percentage:10)/100}if(e.filters.payment!=="all"){const p=e.paymentMethods.find(u=>u.name===e.filters.payment);t*=(p?p.percentage:10)/100}e.filters.fulfillment!=="all"&&(t*=e.filters.fulfillment==="FBA"?.621:.379),e.filters.channel!=="all"&&(t*=e.filters.channel==="Amazon.in"?.72:e.filters.channel==="Amazon Business"?.18:.1),t=Math.max(.05,Math.min(1,t));const a=Math.round(e.totals.sales*t),r=Math.round(e.totals.profit*t),o=Math.max(10,Math.round(e.totals.orders*t)),c=Math.max(15,Math.round(e.totals.units*t)),n=Math.round(e.totals.cancelled*t),m=Math.round(e.totals.delivered*t);return{sales:a,profit:r,orders:o,units:c,cancelled:n,delivered:m,products:s,states:l.length?l:e.states,cities:d.length?d:e.cities,categories:i.length?i:e.categories}}function X(){const t=document.getElementById("kpi-grid");if(!t)return;const s=N(),l=s.orders>0?s.sales/s.orders:0,d=s.sales>0?s.profit/s.sales*100:0,i=s.orders>0?(s.delivered/s.orders*100).toFixed(1):"91.8",a=s.orders>0?(s.cancelled/s.orders*100).toFixed(1):"7.0",r=[{id:"kpi-sales",title:"Total Sales",val:h(s.sales),change:"▲ 18.2%",sub:"vs. previous period",icon:"₹",iconBg:"#059669",stroke:"#10b981",trend:"up",wave:"M0,18 Q15,8 30,14 T60,6 T90,12 T120,4"},{id:"kpi-profit",title:"Total Profit",val:h(s.profit),change:"▲ 22.5%",sub:"vs. previous period",icon:"📊",iconBg:"#7c3aed",stroke:"#a855f7",trend:"up",wave:"M0,16 Q20,18 40,8 T80,10 T100,5 T120,2"},{id:"kpi-orders",title:"Total Orders",val:v(s.orders),change:"▲ 15.3%",sub:"vs. previous period",icon:"🛒",iconBg:"#2563eb",stroke:"#3b82f6",trend:"up",wave:"M0,15 Q25,5 50,12 T90,8 T120,3"},{id:"kpi-units",title:"Units Sold",val:v(s.units),change:"▲ 12.6%",sub:"vs. previous period",icon:"📦",iconBg:"#d97706",stroke:"#f59e0b",trend:"up",wave:"M0,14 Q20,16 45,6 T85,10 T120,4"},{id:"kpi-aov",title:"Avg. Order Value",val:h(l),change:"▲ 5.8%",sub:"vs. previous period",icon:"🏷️",iconBg:"#dc2626",stroke:"#ef4444",trend:"up",wave:"M0,16 Q20,8 40,14 T70,9 T100,12 T120,5"},{id:"kpi-margin",title:"Profit Margin",val:`${d.toFixed(1)}%`,change:"▲ 2.1%",sub:"vs. previous period",icon:"%",iconBg:"#0d9488",stroke:"#14b8a6",trend:"up",wave:"M0,17 Q30,6 60,11 T90,7 T120,2"},{id:"kpi-cancelled",title:"Cancelled Orders",val:v(s.cancelled),change:`▼ ${a}%`,sub:"of total orders",icon:"✕",iconBg:"#b91c1c",stroke:"#ef4444",trend:"down",wave:"M0,6 Q30,12 60,10 T90,16 T120,18"},{id:"kpi-delivered",title:"Delivered Orders",val:v(s.delivered),change:`● ${i}%`,sub:"of total orders",icon:"🚚",iconBg:"#1d4ed8",stroke:"#38bdf8",trend:"info",wave:"M0,15 Q30,5 60,10 T90,4 T120,2"}];t.innerHTML=r.map(o=>`
      <div class="kpi-metric-card" id="${o.id}">
        <div class="kpi-top-row">
          <div class="kpi-icon-badge" style="background-color: ${o.iconBg};">
            <span>${o.icon}</span>
          </div>
          <span class="kpi-card-title">${o.title}</span>
        </div>
        <div class="kpi-value-row">
          <span class="kpi-main-number">${o.val}</span>
        </div>
        <div class="kpi-bottom-row">
          <div class="kpi-trend-badge ${o.trend==="up"?"trend-up":o.trend==="down"?"trend-down":"trend-info"}">
            <span>${o.change}</span>
            <span class="trend-subtext">${o.sub}</span>
          </div>
        </div>
        <div class="kpi-sparkline-wrap">
          <svg viewBox="0 0 120 22" class="sparkline-svg" preserveAspectRatio="none">
            <path d="${o.wave}" fill="none" stroke="${o.stroke}" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    `).join("")}function D(){const t=document.getElementById("trend-chart-container");if(!t)return;let s=e.monthlyTrend;e.trendTimeframe==="Quarterly"?s=[{month:"Q1",sales:9.8,profit:1.5},{month:"Q2",sales:17,profit:2.6},{month:"Q3",sales:22.1,profit:3.4},{month:"Q4",sales:31.5,profit:5.2}]:e.trendTimeframe==="Weekly"&&(s=[{month:"W1",sales:2.1,profit:.35},{month:"W2",sales:2.4,profit:.4},{month:"W3",sales:2.8,profit:.45},{month:"W4",sales:3.1,profit:.52},{month:"W5",sales:2.9,profit:.48},{month:"W6",sales:3.5,profit:.6},{month:"W7",sales:3.8,profit:.65},{month:"W8",sales:4.2,profit:.72}]);const l=480,d=200,i={top:20,right:35,bottom:25,left:40},a=l-i.left-i.right,r=d-i.top-i.bottom,o=Math.max(...s.map(f=>f.sales))*1.25||12,c=Math.max(...s.map(f=>f.profit))*1.3||2.5,n=Math.max(12,Math.min(24,Math.floor(a/s.length/2.2))),m=a/s.length,p=s.map((f,g)=>{const k=i.left+g*m+(m-n)/2,S=f.sales/o*r,R=i.top+r-S;return`<rect x="${k}" y="${R}" width="${n}" height="${S}" rx="3" fill="#f97316" data-month="${f.month}" data-sales="${f.sales.toFixed(1)}" data-profit="${f.profit.toFixed(1)}" class="chart-bar-hover"/>`}).join(""),u=s.map((f,g)=>{const k=i.left+g*m+m/2,S=i.top+r-f.profit/c*r;return{cx:k,cy:S,month:f.month,profit:f.profit.toFixed(1),sales:f.sales.toFixed(1)}}),$=u.reduce((f,g,k)=>`${f} ${k===0?"M":"L"} ${g.cx} ${g.cy}`,""),w=u.map(f=>`
      <circle cx="${f.cx}" cy="${f.cy}" r="3.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" class="chart-dot-hover" data-month="${f.month}" data-sales="${f.sales}" data-profit="${f.profit}"/>
    `).join(""),E=[0,.25,.5,.75,1],I=E.map(f=>{const g=i.top+r-f*r,k=(f*o).toFixed(0);return`
        <line x1="${i.left}" y1="${g}" x2="${l-i.right}" y2="${g}" stroke="rgba(255,255,255,0.07)" stroke-dasharray="3,3"/>
        <text x="${i.left-6}" y="${g+3}" fill="#94a3b8" font-size="10" text-anchor="end">₹ ${k}M</text>
      `}).join(""),C=E.map(f=>{const g=i.top+r-f*r,k=(f*c).toFixed(1);return`<text x="${l-i.right+6}" y="${g+3}" fill="#94a3b8" font-size="10" text-anchor="start">₹ ${k}M</text>`}).join(""),ie=s.map((f,g)=>{const k=i.left+g*m+m/2,S=d-6;return`<text x="${k}" y="${S}" fill="#94a3b8" font-size="10" text-anchor="middle">${f.month}</text>`}).join("");t.innerHTML=`
      <svg viewBox="0 0 ${l} ${d}" style="width: 100%; height: 100%; overflow: visible;">
        ${I}
        ${C}
        ${p}
        <path d="${$}" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        ${w}
        ${ie}
      </svg>
      <div id="trend-tooltip" class="chart-custom-tooltip" style="display: none;"></div>
    `;const M=document.getElementById("trend-tooltip");t.querySelectorAll(".chart-bar-hover, .chart-dot-hover").forEach(f=>{f.addEventListener("mouseenter",g=>{const k=f.getAttribute("data-month"),S=f.getAttribute("data-sales"),R=f.getAttribute("data-profit");M.innerHTML=`
          <div class="tooltip-title">${k} 2024</div>
          <div class="tooltip-item" style="color: #f97316;"><span>Sales:</span><strong>₹ ${S}M</strong></div>
          <div class="tooltip-item" style="color: #ffffff;"><span>Profit:</span><strong>₹ ${R}M</strong></div>
        `,M.style.display="block",M.style.left=`${g.offsetX+10}px`,M.style.top=`${g.offsetY-30}px`}),f.addEventListener("mousemove",g=>{M.style.left=`${g.offsetX+10}px`,M.style.top=`${g.offsetY-30}px`}),f.addEventListener("mouseleave",()=>{M.style.display="none"})})}function A(t,s,l,d){const i=document.getElementById(t);if(!i)return;let a=0;const r=60,o=22,c=80,n=2*Math.PI*r,m=s.map(u=>{const $=n*(1-a/100),w=`${u.percentage/100*n} ${n}`;return a+=u.percentage,`
        <circle
          cx="${c}"
          cy="${c}"
          r="${r}"
          fill="none"
          stroke="${u.color}"
          stroke-width="${o}"
          stroke-dasharray="${w}"
          stroke-dashoffset="${$}"
          transform="rotate(-90 ${c} ${c})"
        />
      `}).join(""),p=s.map(u=>`
      <div class="legend-row-item">
        <div class="legend-left">
          <span class="status-dot" style="background-color: ${u.color}"></span>
          <span class="status-name">${u.status||u.name}</span>
        </div>
        <span class="status-pct">${u.percentage}%</span>
      </div>
    `).join("");i.innerHTML=`
      <div class="donut-chart-wrapper">
        <svg viewBox="0 0 160 160" width="145" height="145">
          ${m}
        </svg>
        <div class="donut-center-overlay">
          <span class="donut-center-value">${l}</span>
          <span class="donut-center-label">${d}</span>
        </div>
      </div>
      <div class="donut-legend-list">
        ${p}
      </div>
    `}function Y(){const t=document.getElementById("category-chart-container");if(!t)return;const s=e.categories,l=380,d=200,i={top:20,right:10,bottom:25,left:35},a=l-i.left-i.right,r=d-i.top-i.bottom,o=Math.max(...s.map(u=>u.sales),18)*1.15,c=26,n=a/s.length,m=[0,5,10,15,20].map(u=>{const $=i.top+r-u/20*r;return`
        <line x1="${i.left}" y1="${$}" x2="${l-i.right}" y2="${$}" stroke="rgba(255,255,255,0.07)" stroke-dasharray="3,3"/>
        <text x="${i.left-6}" y="${$+3}" fill="#94a3b8" font-size="10" text-anchor="end">₹ ${u}M</text>
      `}).join(""),p=s.map((u,$)=>{const w=i.left+$*n+(n-c)/2,E=u.sales/o*r,I=i.top+r-E,C=u.name==="Beauty & Personal Care"?"Beauty":u.name==="Home & Kitchen"?"Home":u.name;return`
        <rect x="${w}" y="${I}" width="${c}" height="${E}" rx="4" fill="${u.color}"/>
        <text x="${w+c/2}" y="${I-5}" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">₹ ${u.sales.toFixed(1)}M</text>
        <text x="${w+c/2}" y="${d-6}" fill="#94a3b8" font-size="9.5" text-anchor="middle">${C}</text>
      `}).join("");t.innerHTML=`
      <svg viewBox="0 0 ${l} ${d}" style="width: 100%; height: 100%;">
        ${m}
        ${p}
      </svg>
    `}function F(){const t=document.getElementById("top-products-container");if(!t)return;let s=e.products.slice().sort((i,a)=>a.sales-i.sales);if(e.searchQuery.trim()){const i=e.searchQuery.toLowerCase();s=s.filter(a=>a.name.toLowerCase().includes(i)||a.category.toLowerCase().includes(i)||a.brand.toLowerCase().includes(i))}e.filters.category!=="all"&&(s=s.filter(i=>i.category===e.filters.category));const l=Math.max(...s.map(i=>i.sales),52e5),d=s.slice(0,10).map(i=>{const a=i.sales/l*100;return`
        <div class="product-row-item">
          <div class="product-info-col">
            <div class="product-icon-box">${i.icon}</div>
            <span class="product-title-text" title="${i.name}">${i.name}</span>
          </div>
          <div class="product-bar-col">
            <div class="bar-track">
              <div class="bar-fill-orange" style="width: ${a}%"></div>
            </div>
            <span class="bar-value-text">${b(i.sales)}</span>
          </div>
          <div class="product-units-col">
            <span>${v(i.units)}</span>
          </div>
        </div>
      `}).join("");t.innerHTML=`
      <div class="products-table-header">
        <span class="col-product">Product</span>
        <span class="col-sales">Sales (₹)</span>
        <span class="col-units" style="text-align: right;">Units Sold</span>
      </div>
      <div class="products-list-scroll">
        ${d||'<div style="padding: 20px; text-align: center; color: #94a3b8;">No products found matching filters</div>'}
      </div>
    `}function ee(){var r;const t=document.getElementById("key-insights-container");if(!t)return;const s=e.states.slice().sort((o,c)=>c.sales-o.sales)[0]||{name:"Maharashtra",sales:184e5},l=e.categories.slice().sort((o,c)=>c.sales-o.sales)[0]||{name:"Electronics"},d=e.paymentMethods.slice().sort((o,c)=>c.percentage-o.percentage)[0]||{name:"UPI",percentage:38.5};e.keyInsights[1].text=`${l.name} contributes ${(l.sales/(e.totals.sales/1e6)*100).toFixed(0)}% of total sales.`,e.keyInsights[3].text=`${d.name} is the most preferred payment method (${d.percentage}%).`,e.keyInsights[4].text=`${s.name} generates the highest revenue (${b(s.sales)}).`;const a=e.keyInsights.map(o=>`
      <div class="insight-card-item">
        <div class="insight-icon-badge" style="background-color: ${o.bg}">
          <span style="color: ${o.color}; font-weight: bold; font-size: 13px;">${o.icon==="trending-up"?"↗":o.icon==="shopping-bag"?"🛍":o.icon==="x-circle"?"✕":o.icon==="smartphone"?"📱":"📍"}</span>
        </div>
        <p class="insight-text-content">${o.text}</p>
      </div>
    `).join("");t.innerHTML=`
      <div class="insights-items-list">
        ${a}
      </div>
      <button class="view-detailed-insights-btn" id="open-insights-btn">
        <span>View Detailed Insights</span>
        <span>→</span>
      </button>
    `,(r=document.getElementById("open-insights-btn"))==null||r.addEventListener("click",()=>{q("insights-modal"),V()})}function j(t){const s=document.getElementById("state-sales-container");if(!s)return;let l=e.states.slice();t==="Profit"?l.sort((a,r)=>r.profit-a.profit):t==="Orders"?l.sort((a,r)=>r.orders-a.orders):l.sort((a,r)=>r.sales-a.sales);const d=t==="Profit"?3e6:t==="Orders"?8500:2e7,i=l.slice(0,10).map(a=>{const r=t==="Sales"?a.sales:t==="Profit"?a.profit:a.orders,o=Math.min(100,Math.max(6,r/d*100)),c=t==="Sales"?b(a.sales):t==="Profit"?b(a.profit):v(a.orders);return`
        <div class="state-bar-row">
          <span class="state-name-label" title="${a.name}">${a.name}</span>
          <div class="state-bar-track-wrap">
            <div class="bar-track">
              <div class="bar-fill-orange" style="width: ${o}%"></div>
            </div>
            <span class="bar-end-value">${c}</span>
          </div>
        </div>
      `}).join("");s.innerHTML=`
      <div class="state-bars-list">
        ${i}
      </div>
      <div class="state-x-axis">
        <span>${t==="Orders"?"0":"₹ 0M"}</span>
        <span>${t==="Orders"?"2.5K":"5M"}</span>
        <span>${t==="Orders"?"5.0K":"10M"}</span>
        <span>${t==="Orders"?"7.5K":"15M"}</span>
        <span>${t==="Orders"?"10K":"20M"}</span>
      </div>
    `}function U(t){const s=document.getElementById("state-profit-container");if(!s)return;let l=e.states.slice();t==="Sales"?l.sort((a,r)=>r.sales-a.sales):t==="Orders"?l.sort((a,r)=>r.orders-a.orders):l.sort((a,r)=>r.profit-a.profit);const d=t==="Sales"?2e7:t==="Orders"?8500:3e6,i=l.slice(0,10).map(a=>{const r=t==="Profit"?a.profit:t==="Sales"?a.sales:a.orders,o=Math.min(100,Math.max(6,r/d*100)),c=t==="Profit"?b(a.profit):t==="Sales"?b(a.sales):v(a.orders);return`
        <div class="state-bar-row">
          <span class="state-name-label" title="${a.name}">${a.name}</span>
          <div class="state-bar-track-wrap">
            <div class="bar-track">
              <div class="bar-fill-emerald" style="width: ${o}%"></div>
            </div>
            <span class="bar-end-value">${c}</span>
          </div>
        </div>
      `}).join("");s.innerHTML=`
      <div class="state-bars-list">
        ${i}
      </div>
      <div class="state-x-axis">
        <span>${t==="Orders"?"0":"₹ 0M"}</span>
        <span>${t==="Orders"?"1K":"1M"}</span>
        <span>${t==="Orders"?"2K":"2M"}</span>
        <span>${t==="Orders"?"3K":"3M"}</span>
      </div>
    `}function z(t){const s=document.getElementById("india-map-container");if(!s)return;const l=new Map;e.states.forEach(r=>l.set(r.name.toLowerCase(),r));const d=r=>{const o=l.get(r.toLowerCase());return o?t==="profit"?o.profit>=25e5?"#059669":o.profit>=18e5?"#10b981":o.profit>=12e5?"#34d399":"#6ee7b7":t==="orders"?o.orders>=6e3?"#2563eb":o.orders>=4e3?"#3b82f6":o.orders>=2500?"#60a5fa":"#93c5fd":o.sales>=16e6?"#ea580c":o.sales>=12e6?"#f97316":o.sales>=9e6?"#fb923c":o.sales>=6e6?"#fdba74":"#fed7aa":"#fed7aa"},i=J.map(r=>{const o=d(r.name);return`
        <path
          d="${r.d}"
          fill="${o}"
          stroke="#1e293b"
          stroke-width="1.2"
          class="map-state-node"
          data-state="${r.name}"
          style="cursor: pointer; transition: opacity 0.2s;"
        />
      `}).join("");s.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between; height: 100%; position: relative;">
        <svg viewBox="30 10 420 490" style="width: 75%; max-height: 240px; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.4));">
          ${i}
        </svg>

        <div style="display: flex; flex-direction: column; align-items: center; height: 160px; justify-content: space-between; padding-right: 8px;">
          <span style="font-size: 10.5px; color: #94a3b8; font-weight: 600; text-transform: capitalize;">${t}</span>
          <div style="display: flex; align-items: center; gap: 6px; height: 110px;">
            <div style="width: 9px; height: 100%; border-radius: 4px; background: ${t==="profit"?"linear-gradient(to bottom, #059669, #10b981, #34d399, #6ee7b7)":t==="orders"?"linear-gradient(to bottom, #2563eb, #3b82f6, #60a5fa, #93c5fd)":"linear-gradient(to bottom, #ea580c, #f97316, #fb923c, #fdba74, #fed7aa)"};"></div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; font-size: 9.5px; color: #cbd5e1; font-weight: 500;">
              <span>▲ High</span>
              <span>▼ Low</span>
            </div>
          </div>
        </div>

        <div id="map-tooltip" class="chart-custom-tooltip" style="display: none; position: fixed; z-index: 9999;"></div>
      </div>
    `;const a=document.getElementById("map-tooltip");s.querySelectorAll(".map-state-node").forEach(r=>{r.addEventListener("mouseenter",o=>{const c=r.getAttribute("data-state"),n=l.get(c.toLowerCase());a.innerHTML=`
          <div class="tooltip-title" style="color: #f97316;">${c}</div>
          <div class="tooltip-item"><span>Sales:</span><strong>${n?b(n.sales):"₹ 1.2M"}</strong></div>
          <div class="tooltip-item"><span>Profit:</span><strong style="color: #10b981;">${n?b(n.profit):"₹ 0.2M"}</strong></div>
          <div class="tooltip-item"><span>Orders:</span><strong>${n?v(n.orders):"650"}</strong></div>
        `,a.style.display="block",a.style.left=`${o.clientX+12}px`,a.style.top=`${o.clientY-40}px`}),r.addEventListener("mousemove",o=>{a.style.left=`${o.clientX+12}px`,a.style.top=`${o.clientY-40}px`}),r.addEventListener("mouseleave",()=>{a.style.display="none"})})}function K(){const t=document.getElementById("top-cities-container");if(!t)return;let s=e.cities.slice().sort((d,i)=>i.sales-d.sales);if(e.searchQuery.trim()){const d=e.searchQuery.toLowerCase();s=s.filter(i=>i.city.toLowerCase().includes(d)||i.state.toLowerCase().includes(d))}e.filters.state!=="all"&&(s=s.filter(d=>d.state===e.filters.state));const l=s.slice(0,10).map((d,i)=>`
      <tr class="city-table-row">
        <td class="td-rank">${i+1}</td>
        <td class="td-city" title="${d.city}, ${d.state}">${d.city}</td>
        <td class="td-orders">${v(d.orders)}</td>
        <td class="td-sales">${b(d.sales)}</td>
        <td class="td-profit">${b(d.profit)}</td>
      </tr>
    `).join("");t.innerHTML=`
      <table class="cities-data-table">
        <thead>
          <tr>
            <th class="th-rank">#</th>
            <th class="th-city">City</th>
            <th class="th-orders">Orders</th>
            <th class="th-sales">Sales (₹)</th>
            <th class="th-profit">Profit (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${l||'<tr><td colspan="5" style="text-align:center; padding: 20px; color: #94a3b8;">No cities found</td></tr>'}
        </tbody>
      </table>
    `}function Z(){const t=document.getElementById("filter-state");t&&t.options.length<=1&&e.states.forEach(i=>{const a=document.createElement("option");a.value=i.name,a.textContent=i.name,t.appendChild(a)});const s=document.getElementById("filter-city");s&&s.options.length<=1&&e.cities.forEach(i=>{const a=document.createElement("option");a.value=i.city,a.textContent=i.city,s.appendChild(a)});const l=document.getElementById("filter-category");l&&l.options.length<=1&&e.categories.forEach(i=>{const a=document.createElement("option");a.value=i.name,a.textContent=i.name,l.appendChild(a)});const d=document.getElementById("filter-product");d&&d.options.length<=1&&e.products.forEach(i=>{const a=document.createElement("option");a.value=i.name,a.textContent=i.name,d.appendChild(a)})}function V(){const t=document.getElementById("insights-modal-body");if(!t)return;const s=e.keyInsights.map(l=>`
      <div class="insight-deep-card">
        <div class="deep-card-top">
          <span class="insight-category-tag">${l.category}</span>
          <span class="insight-status-badge">Actionable</span>
        </div>
        <h4 class="insight-headline">${l.text}</h4>
        <p class="insight-detailed-desc">${l.detail}</p>
        <div class="insight-recommendation">
          <span>⚡ <strong>Recommendation:</strong> Allocate regional FBA inventory buffers to capture high-converting organic demand.</span>
        </div>
      </div>
    `).join("");t.innerHTML=`
      <div class="insights-grid-2col">
        ${s}
      </div>
      <div class="ai-summary-box">
        <div class="ai-badge">
          <span>✨ AI Revenue Engine Strategic Brief</span>
        </div>
        <p class="ai-text">
          By boosting Prime 1-day delivery availability in Western and Southern India by 14%, overall gross monthly transaction volume is projected to surge by an additional <strong>₹ 2.4 Cr</strong> with a 1.8% expansion in net operating margin.
        </p>
      </div>
    `}function P(t){const s=document.getElementById("live-toast-container"),l=document.getElementById("live-toast-message");!s||!l||(l.textContent=t,s.style.display="flex",setTimeout(()=>{s.style.display="none"},2800))}function te(){if(!e.liveActive)return;const t=e.products[Math.floor(Math.random()*e.products.length)],s=e.cities[Math.floor(Math.random()*e.cities.length)],l=Math.random()>.8?2:1,d=t.price*l,i=Math.round(d*t.profitMargin),a=e.paymentMethods[Math.floor(Math.random()*e.paymentMethods.length)].name,r=Math.random()>.38?"Fulfilled by Amazon (FBA)":"Fulfilled by Seller",o=Math.random()>.08?"Delivered":Math.random()>.6?"Pending":"Cancelled";e.totals.sales+=d,e.totals.profit+=i,e.totals.orders+=1,e.totals.units+=l,o==="Delivered"?e.totals.delivered+=1:o==="Cancelled"?e.totals.cancelled+=1:o==="Pending"&&(e.totals.pending+=1);const c=e.categories.find(w=>w.name===t.category);c&&(c.sales+=d/1e6);const n=e.products.find(w=>w.id===t.id);n&&(n.sales+=d,n.units+=l);const m=e.states.find(w=>w.name===s.state);m&&(m.sales+=d,m.profit+=i,m.orders+=1);const p=e.cities.find(w=>w.city===s.city);p&&(p.sales+=d,p.profit+=i,p.orders+=1),e.monthlyTrend[11].sales+=d/1e6,e.monthlyTrend[11].profit+=i/1e6;const u=new Date;e.recentOrders.unshift({id:`AMZ-IN-${Math.floor(1e7+Math.random()*9e7)}`,time:u.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:u.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),customer:`Buyer (${s.city})`,product:t.name,category:t.category,icon:t.icon,price:d,profit:i,quantity:l,city:s.city,state:s.state,payment:a,fulfillment:r,channel:"Amazon.in",status:o}),e.recentOrders.length>100&&e.recentOrders.pop(),T();const $=document.querySelector("#kpi-sales .kpi-main-number");$&&($.classList.add("tick-flash"),setTimeout(()=>$.classList.remove("tick-flash"),600)),P(`+${h(d)} · ${t.name} in ${s.city} (${r.includes("FBA")?"FBA":"Seller"})`)}function G(){e.liveTimer&&clearInterval(e.liveTimer),e.liveTimer=setInterval(te,3200)}function se(){e.liveActive=!e.liveActive;const t=document.getElementById("live-btn-text"),s=document.getElementById("live-btn-icon"),l=document.getElementById("live-indicator-badge");e.liveActive?(t&&(t.textContent="Pause Live"),s&&(s.textContent="⏸"),l&&(l.style.opacity="1"),G()):(t&&(t.textContent="Resume Live"),s&&(s.textContent="▶"),l&&(l.style.opacity="0.4"),e.liveTimer&&clearInterval(e.liveTimer))}function q(t){const s=document.getElementById(t);s&&(s.style.display="flex")}function L(t){const s=document.getElementById(t);s&&(s.style.display="none")}function T(){e.activeTab==="overview"?(X(),D(),A("order-status-container",e.orderStatus,v(e.totals.orders),"Total Orders"),Y(),F(),A("payment-methods-container",e.paymentMethods,v(e.totals.orders),"Orders"),A("fulfillment-type-container",e.fulfillmentTypes,v(e.totals.orders),"Orders"),ee(),j(e.salesToggle),U(e.profitToggle),z(e.mapMetric),K()):W(e.activeTab)}function W(t){var l,d;const s=document.getElementById("subview-container");if(s){if(t==="products"){let i=e.products.slice().sort((r,o)=>o.sales-r.sales);if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();i=i.filter(o=>o.name.toLowerCase().includes(r)||o.category.toLowerCase().includes(r)||o.brand.toLowerCase().includes(r))}const a=i.map(r=>`
        <div class="subview-product-card">
          <div class="product-card-top">
            <span class="product-card-icon">${r.icon}</span>
            <span class="product-card-brand">${r.brand}</span>
          </div>
          <h3 class="product-card-name">${r.name}</h3>
          <div class="product-card-badge">${r.category}</div>
          <div class="product-card-metrics">
            <div><span class="metric-lbl">Sales</span><span class="metric-val">${b(r.sales)}</span></div>
            <div><span class="metric-lbl">Units</span><span class="metric-val">${v(r.units)}</span></div>
            <div><span class="metric-lbl">Rating</span><span class="metric-val" style="color: #f59e0b">★ ${r.rating}</span></div>
          </div>
          <div class="product-card-footer">
            <span class="in-stock-tag">● In Stock (FBA Prime)</span>
            <span style="color: #94a3b8; font-size: 10px;">${h(r.price)}/unit</span>
          </div>
        </div>
      `).join("");s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Product Catalog & Real-Time Performance</h2>
              <p class="subview-sub">All active SKUs, revenue contributions, customer ratings, and live inventory status</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Active SKUs</span>
              <span class="subview-kpi-val">${e.products.length} Products</span>
              <span class="subview-kpi-change" style="color: #10b981;">● 100% In-Stock SLA</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Top Selling Item</span>
              <span class="subview-kpi-val">${e.products[0].name}</span>
              <span class="subview-kpi-change" style="color: #f97316;">${b(e.products[0].sales)} Gross Rev</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Total Units Dispatched</span>
              <span class="subview-kpi-val">${v(e.totals.units)}</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">▲ 12.6% MoM</span>
            </div>
          </div>
          <div class="subview-grid-cards">
            ${a}
          </div>
        </div>
      `}else if(t==="orders"){const i=e.recentOrders.map(a=>`
        <tr class="orders-table-row">
          <td class="order-id-cell">${a.id}</td>
          <td>${a.time}</td>
          <td>
            <div class="order-product-cell">
              <span class="order-product-icon">${a.icon}</span>
              <span>${a.product}</span>
            </div>
          </td>
          <td>${a.city}, ${a.state}</td>
          <td style="font-weight: 700; color: #ffffff;">${h(a.price)}</td>
          <td><span class="pay-tag">${a.payment}</span></td>
          <td>
            ${a.fulfillment.includes("FBA")?'<span class="fba-prime-badge">⚡ FBA Prime</span>':'<span class="seller-fba-badge">Seller</span>'}
          </td>
          <td>
            <span class="status-badge ${a.status.toLowerCase()}">${a.status}</span>
          </td>
        </tr>
      `).join("");s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Live Real-Time Orders Stream</h2>
              <p class="subview-sub">Incoming real-time transaction ledger directly connected to the sales telemetry</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Total Orders Processed</span>
              <span class="subview-kpi-val">${v(e.totals.orders)}</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ Live Updating</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Delivered Successfully</span>
              <span class="subview-kpi-val">${v(e.totals.delivered)}</span>
              <span class="subview-kpi-change" style="color: #10b981;">91.8% Delivery Success</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Fulfillment Velocity</span>
              <span class="subview-kpi-val">1.2 Days</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ Amazon Prime FastTrack</span>
            </div>
          </div>
          <div class="orders-table-card">
            <div class="orders-table-toolbar">
              <h3 style="color: #ffffff; font-size: 14px; font-weight: 700;">Live Stream (${e.recentOrders.length} Recent Transactions)</h3>
              <span style="font-size: 11px; color: #10b981;">● Synchronized with Telemetry</span>
            </div>
            <div class="orders-table-wrapper">
              <table class="orders-data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Time</th>
                    <th>Product</th>
                    <th>Destination</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Fulfillment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${i}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `}else if(t==="customers")s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Customer Analytics & Buyer Retention</h2>
              <p class="subview-sub">Prime membership engagement, cohort retention, and regional buyer density</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Active Buyers</span>
              <span class="subview-kpi-val">38,420</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ 14.8% YoY</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Prime Membership Share</span>
              <span class="subview-kpi-val">68.2%</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ 2.4x Higher Basket Size</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Repeat Purchase Rate</span>
              <span class="subview-kpi-val">78.4%</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">Top Retention Decile</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Avg. Customer Lifetime Value</span>
              <span class="subview-kpi-val">₹ 14,250</span>
              <span class="subview-kpi-change" style="color: #10b981;">▲ 8.2% vs 2023</span>
            </div>
          </div>
          <div class="gateway-cards-grid">
            <div class="gateway-card">
              <div class="gateway-card-header">
                <span class="gateway-name">Tier-1 Metros</span>
                <span class="gateway-share-pct">54.2%</span>
              </div>
              <p style="color: #94a3b8; font-size: 11.5px;">Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai account for the bulk of high-ticket electronics purchases.</p>
              <div class="gateway-metrics-row">
                <span>Avg Order: ₹ 3,450</span>
                <span>FBA Prime: 88.5%</span>
              </div>
            </div>
            <div class="gateway-card">
              <div class="gateway-card-header">
                <span class="gateway-name">Tier-2 & Tier-3 Growth Cities</span>
                <span class="gateway-share-pct">45.8%</span>
              </div>
              <p style="color: #94a3b8; font-size: 11.5px;">Fastest expanding buyer demographic powered by UPI 1-click checkout and regional language support.</p>
              <div class="gateway-metrics-row">
                <span>Avg Order: ₹ 1,890</span>
                <span>UPI Adoption: 64.2%</span>
              </div>
            </div>
          </div>
        </div>
      `;else if(t==="payments"){const i=e.paymentMethods.map(a=>`
        <div class="gateway-card">
          <div class="gateway-card-header">
            <span class="gateway-name" style="color: ${a.color};">${a.name}</span>
            <span class="gateway-share-pct">${a.percentage}%</span>
          </div>
          <div class="bar-track" style="margin: 4px 0 8px;">
            <div style="height: 100%; width: ${a.percentage}%; background: ${a.color}; border-radius: 3px;"></div>
          </div>
          <div class="gateway-metrics-row">
            <span>Processed Volume</span>
            <strong style="color: #ffffff;">${h(a.volume)}</strong>
          </div>
          <div class="gateway-metrics-row">
            <span>Transactions</span>
            <strong style="color: #cbd5e1;">${v(a.txCount)}</strong>
          </div>
          <div class="gateway-metrics-row">
            <span>Success Rate</span>
            <strong style="color: #10b981;">99.4%</strong>
          </div>
        </div>
      `).join("");s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Payment Gateways & Transaction Infrastructure</h2>
              <p class="subview-sub">Real-time payment method distribution, transaction volumes, and settlement metrics</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="gateway-cards-grid">
            ${i}
          </div>
        </div>
      `}else if(t==="fulfillment")s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Fulfillment & Supply Chain Network</h2>
              <p class="subview-sub">Amazon Fulfillment Centers (FCs), dispatch SLAs, and courier performance</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="subview-stats-grid">
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">FBA Volume Share</span>
              <span class="subview-kpi-val">62.1%</span>
              <span class="subview-kpi-change" style="color: #f97316;">⚡ Prime 1-Day Guaranteed</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">On-Time Delivery SLA</span>
              <span class="subview-kpi-val">98.7%</span>
              <span class="subview-kpi-change" style="color: #10b981;">Industry Benchmark</span>
            </div>
            <div class="subview-kpi-card">
              <span class="subview-kpi-label">Return to Origin (RTO)</span>
              <span class="subview-kpi-val">2.8%</span>
              <span class="subview-kpi-change" style="color: #3b82f6;">▼ Reduced by 1.4%</span>
            </div>
          </div>
          <div class="gateway-cards-grid">
            <div class="gateway-card">
              <span class="gateway-name">📍 BOM1 - Mumbai Mega Center</span>
              <p style="color: #94a3b8; font-size: 11px;">West Zone Hub · 1.2M sq. ft storage capacity · 99.1% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 BLR2 - Bengaluru South Center</span>
              <p style="color: #94a3b8; font-size: 11px;">South Zone Hub · Automated sortation conveyor · 99.4% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 DEL4 - Delhi NCR North Center</span>
              <p style="color: #94a3b8; font-size: 11px;">North Zone Hub · High speed robotics sorting · 98.9% on-time dispatch</p>
            </div>
            <div class="gateway-card">
              <span class="gateway-name">📍 HYD1 - Hyderabad Tech Center</span>
              <p style="color: #94a3b8; font-size: 11px;">Central & Deccan Zone · Direct airport connectivity · 99.2% on-time dispatch</p>
            </div>
          </div>
        </div>
      `;else if(t==="geo"){const i=e.states.map((a,r)=>`
        <tr class="orders-table-row">
          <td class="td-rank">${r+1}</td>
          <td style="font-weight: 600; color: #ffffff;">${a.name}</td>
          <td>${a.region}</td>
          <td style="text-align: right; font-weight: 700; color: #f97316;">${b(a.sales)}</td>
          <td style="text-align: right; font-weight: 700; color: #10b981;">${b(a.profit)}</td>
          <td style="text-align: right; color: #cbd5e1;">${v(a.orders)}</td>
          <td style="text-align: right; color: #94a3b8;">${h(a.sales/a.orders)}</td>
        </tr>
      `).join("");s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Geographic Performance Matrix</h2>
              <p class="subview-sub">State-by-state regional telemetry, profitability indices, and market penetration</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div class="orders-table-card">
            <div class="orders-table-wrapper">
              <table class="orders-data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Region</th>
                    <th style="text-align: right;">Sales (₹)</th>
                    <th style="text-align: right;">Profit (₹)</th>
                    <th style="text-align: right;">Orders</th>
                    <th style="text-align: right;">Avg Order Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${i}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `}else if(t==="insights"){V(),s.innerHTML=`
        <div class="subview-container">
          <div class="subview-header">
            <div>
              <h2 class="subview-title">Amazon Executive Intelligence & Insights</h2>
              <p class="subview-sub">Comprehensive strategic directives and revenue engine forecasts</p>
            </div>
            <button class="btn-secondary-dark" id="back-to-overview-btn">← Back to Overview</button>
          </div>
          <div id="inline-insights-body"></div>
        </div>
      `;const i=document.getElementById("inline-insights-body");i&&(i.innerHTML=((l=document.getElementById("insights-modal-body"))==null?void 0:l.innerHTML)||"")}(d=document.getElementById("back-to-overview-btn"))==null||d.addEventListener("click",()=>B("overview"))}}function B(t){if(e.activeTab=t,document.querySelectorAll(".nav-item").forEach(d=>{d.classList.toggle("active",d.getAttribute("data-tab")===t)}),t==="download"){q("download-modal");return}const s=document.getElementById("overview-view"),l=document.getElementById("subview-container");!s||!l||(t==="overview"?(s.style.display="block",l.style.display="none",T()):(s.style.display="none",l.style.display="block",W(t)))}function Q(){const t=new Date().toLocaleString("en-IN"),s=N();let l="",d=`Amazon_India_Sales_Report_${new Date().toISOString().slice(0,10)}.csv`,i="text/csv;charset=utf-8;";e.selectedFormat==="json"?(d=`Amazon_India_Sales_Report_${new Date().toISOString().slice(0,10)}.json`,i="application/json;charset=utf-8;",l=JSON.stringify({reportTitle:"Amazon India Executive Sales Intelligence Report",generatedAt:t,activeFilters:e.filters,summary:{totalSalesINR:s.sales,totalProfitINR:s.profit,totalOrders:s.orders,unitsSold:s.units,avgOrderValueINR:Math.round(s.sales/s.orders),profitMarginPercentage:(s.profit/s.sales*100).toFixed(2),deliveredOrders:s.delivered,cancelledOrders:s.cancelled},monthlyTrend:e.monthlyTrend,categoryPerformance:e.categories,topProducts:e.products,geographicPerformance:{topStates:e.states,topCities:e.cities},paymentGateways:e.paymentMethods,fulfillmentBreakdown:e.fulfillmentTypes,recentTelemetryTransactions:e.recentOrders},null,2)):e.selectedFormat==="xlsx"?(d=`Amazon_India_Sales_Report_${new Date().toISOString().slice(0,10)}.xls`,i="application/vnd.ms-excel;charset=utf-8;",l=`
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"/><title>Amazon India Report</title></head>
        <body>
          <h2>Amazon India Sales Intelligence Report (Live Telemetry)</h2>
          <p>Generated At: ${t}</p>
          <table border="1">
            <tr style="background:#f97316;color:#ffffff;font-weight:bold;">
              <th>Metric</th><th>Value</th>
            </tr>
            <tr><td>Total Sales</td><td>${h(s.sales)}</td></tr>
            <tr><td>Total Profit</td><td>${h(s.profit)}</td></tr>
            <tr><td>Total Orders</td><td>${v(s.orders)}</td></tr>
            <tr><td>Units Sold</td><td>${v(s.units)}</td></tr>
            <tr><td>Avg Order Value</td><td>${h(s.sales/s.orders)}</td></tr>
            <tr><td>Profit Margin</td><td>${(s.profit/s.sales*100).toFixed(1)}%</td></tr>
          </table>
          <br/>
          <h3>Top Products by Revenue</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>Product</th><th>Category</th><th>Sales (₹)</th><th>Units Sold</th><th>Rating</th>
            </tr>
            ${e.products.map(c=>`<tr><td>${c.name}</td><td>${c.category}</td><td>${c.sales}</td><td>${c.units}</td><td>${c.rating}</td></tr>`).join("")}
          </table>
          <br/>
          <h3>State Performance</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>State</th><th>Region</th><th>Sales (₹)</th><th>Profit (₹)</th><th>Orders</th>
            </tr>
            ${e.states.map(c=>`<tr><td>${c.name}</td><td>${c.region}</td><td>${c.sales}</td><td>${c.profit}</td><td>${c.orders}</td></tr>`).join("")}
          </table>
          <br/>
          <h3>Live Telemetry Ledger</h3>
          <table border="1">
            <tr style="background:#232f3e;color:#ffffff;">
              <th>Order ID</th><th>Time</th><th>Product</th><th>City</th><th>Amount (₹)</th><th>Status</th>
            </tr>
            ${e.recentOrders.map(c=>`<tr><td>${c.id}</td><td>${c.time}</td><td>${c.product}</td><td>${c.city}</td><td>${c.price}</td><td>${c.status}</td></tr>`).join("")}
          </table>
        </body></html>
      `):l=[["====================================================================="],["AMAZON INDIA SALES DASHBOARD - EXECUTIVE REPORT"],[`Generated At: ${t}`],[`Filters Applied: Date=${e.filters.date} | State=${e.filters.state} | Category=${e.filters.category}`],["====================================================================="],[],["EXECUTIVE KPI SUMMARY"],["Metric","Value"],["Total Sales",h(s.sales)],["Total Profit",h(s.profit)],["Total Orders",v(s.orders)],["Units Sold",v(s.units)],["Avg Order Value",h(s.sales/s.orders)],["Profit Margin",`${(s.profit/s.sales*100).toFixed(1)}%`],["Delivered Orders",v(s.delivered)],["Cancelled Orders",v(s.cancelled)],[],["PRODUCT PERFORMANCE MATRIX"],["Product Name","Category","Brand","Sales (INR)","Units Sold","Rating"],...e.products.map(n=>[n.name,n.category,n.brand,n.sales,n.units,n.rating]),[],["GEOGRAPHIC PERFORMANCE (STATES)"],["State Name","Region","Sales (INR)","Profit (INR)","Orders"],...e.states.map(n=>[n.name,n.region,n.sales,n.profit,n.orders]),[],["GEOGRAPHIC PERFORMANCE (CITIES)"],["City","State","Orders","Sales (INR)","Profit (INR)"],...e.cities.map(n=>[n.city,n.state,n.orders,n.sales,n.profit]),[],["PAYMENT METHODS DISTRIBUTION"],["Method","Percentage","Processed Volume (INR)","Transaction Count"],...e.paymentMethods.map(n=>[n.name,`${n.percentage}%`,n.volume,n.txCount]),[],["LIVE TRANSACTION LOG (RECENT DISPATCHES)"],["Order ID","Time","Product","Location","Amount (INR)","Payment","Fulfillment","Status"],...e.recentOrders.map(n=>[n.id,n.time,n.product,`${n.city}, ${n.state}`,n.price,n.payment,n.fulfillment,n.status])].map(n=>n.join(",")).join(`
`);const a=new Blob([l],{type:i}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=d,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function ae(){var s,l,d,i;const t=[{id:"filter-date",key:"date"},{id:"filter-state",key:"state"},{id:"filter-city",key:"city"},{id:"filter-category",key:"category"},{id:"filter-product",key:"product"},{id:"filter-status",key:"status"},{id:"filter-payment",key:"payment"},{id:"filter-fulfillment",key:"fulfillment"},{id:"filter-channel",key:"channel"}];t.forEach(({id:a,key:r})=>{const o=document.getElementById(a);o&&o.addEventListener("change",c=>{if(e.filters[r]=c.target.value,r==="state"){const n=document.getElementById("filter-city");n&&(n.innerHTML='<option value="all">All</option>',(c.target.value==="all"?e.cities:e.cities.filter(p=>p.state===c.target.value)).forEach(p=>{const u=document.createElement("option");u.value=p.city,u.textContent=p.city,n.appendChild(u)}),e.filters.city="all")}if(r==="category"){const n=document.getElementById("filter-product");n&&(n.innerHTML='<option value="all">All</option>',(c.target.value==="all"?e.products:e.products.filter(p=>p.category===c.target.value)).forEach(p=>{const u=document.createElement("option");u.value=p.name,u.textContent=p.name,n.appendChild(u)}),e.filters.product="all")}if(r==="date"){const n=document.getElementById("header-date-text");if(n){const m=o.options[o.selectedIndex];n.textContent=m?m.textContent:"01 Jan 2024 - 31 Dec 2024"}}T()})}),(s=document.getElementById("reset-filters-btn"))==null||s.addEventListener("click",()=>{t.forEach(({id:o,key:c})=>{const n=document.getElementById(o);n&&(n.value="all"),e.filters[c]="all"});const a=document.getElementById("header-date-text");a&&(a.textContent="01 Jan 2024 - 31 Dec 2024");const r=document.getElementById("global-search");r&&(r.value=""),e.searchQuery="",Z(),T(),P("Filters reset to default view")}),(l=document.getElementById("trend-timeframe"))==null||l.addEventListener("change",a=>{e.trendTimeframe=a.target.value,D()}),(d=document.getElementById("global-search"))==null||d.addEventListener("input",a=>{e.searchQuery=a.target.value,F(),K()}),(i=document.getElementById("header-date-pill"))==null||i.addEventListener("click",()=>{const a=document.getElementById("filter-date");a&&(a.focus(),a.scrollIntoView({behavior:"smooth",block:"center"}))})}function _(){var t,s,l,d,i,a,r,o,c;y(),Z(),T(),G(),ae(),(t=document.getElementById("toggle-live-feed-btn"))==null||t.addEventListener("click",se),document.querySelectorAll(".nav-item").forEach(n=>{n.addEventListener("click",()=>{const m=n.getAttribute("data-tab");m&&B(m)})}),(s=document.getElementById("view-all-categories-btn"))==null||s.addEventListener("click",()=>B("products")),document.querySelectorAll("#sales-state-toggles .metric-pill-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#sales-state-toggles .metric-pill-btn").forEach(m=>m.classList.remove("active-orange")),n.classList.add("active-orange"),e.salesToggle=n.getAttribute("data-metric"),j(e.salesToggle)})}),document.querySelectorAll("#profit-state-toggles .metric-pill-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#profit-state-toggles .metric-pill-btn").forEach(m=>m.classList.remove("active-emerald")),n.classList.add("active-emerald"),e.profitToggle=n.getAttribute("data-metric"),U(e.profitToggle)})}),(l=document.getElementById("map-metric-select"))==null||l.addEventListener("change",n=>{e.mapMetric=n.target.value,z(e.mapMetric)}),(d=document.getElementById("close-insights-modal"))==null||d.addEventListener("click",()=>L("insights-modal")),(i=document.getElementById("dismiss-insights-modal"))==null||i.addEventListener("click",()=>L("insights-modal")),(a=document.getElementById("export-insights-pdf"))==null||a.addEventListener("click",()=>{Q(),L("insights-modal"),P("Executive Report Exported Successfully!")}),(r=document.getElementById("close-download-modal"))==null||r.addEventListener("click",()=>L("download-modal")),(o=document.getElementById("cancel-download-modal"))==null||o.addEventListener("click",()=>L("download-modal")),(c=document.getElementById("confirm-download-btn"))==null||c.addEventListener("click",()=>{Q(),L("download-modal"),P("Live Sales Report Downloaded!")}),document.querySelectorAll(".format-card-option").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".format-card-option").forEach(m=>m.classList.remove("selected")),n.classList.add("selected"),e.selectedFormat=n.getAttribute("data-format")||"csv"})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_):_()})();
