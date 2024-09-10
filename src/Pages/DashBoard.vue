<template>
  <div class="dashboard p-12 font-work-sans flex bg-bground flex-col gap-[40px]">
    <div class="first">
<p class="font-medium text-select">Users</p>
    </div>

<div class="cards flex flex-wrap justify-between">
  <div class="card shadow-lg flex flex-col gap-[9px] p-4">
<div class=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-users">
  <img src="../assets/np_users.png"  alt="logo"/>
</div>
<p class="font-medium text-[14px] text-select"> USERS</p>
<p class="font-bold text-[24px] text-select">2453</p>
  </div>

  <div class="card shadow-lg flex flex-col gap-[9px] p-4">
    <div class="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-activeUsers">
  <img src="../assets/np_users_2.png" alt="logo"/>
</div>
<p class="font-medium text-[14px] text-select">ACTIVE USERS</p>
<p class="font-bold text-[24px] text-select">2453</p>
  </div>
  <div class="card shadow-lg flex flex-col gap-[9px] p-4">
    <div class="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-loanUsers">
  <img src="../assets/np_loan.png" alt="logo"/>
</div>
<p class="font-medium text-[14px] text-select">USERS WITH LOANS</p>
<p class="font-bold text-[24px] text-select">12,453</p>
  </div>
  <div class="card shadow-lg flex flex-col gap-[9px] p-4">
    <div class="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-saving">
  <img src="../assets/np_money.png" alt="logo"/>
</div>
<p class="font-medium text-[14px] text-select">USERS WITH SAVINGS</p>
<p class="font-bold text-[24px] text-select">102,453</p>
  </div>

</div>

<div class="third p-4 shadow-lg  ">
<div class="header flex py-4 ">
  <div class="htext w-1/3 flex items-center gap-[10px]">
    <span class="hspan">ORGANIZATION</span>
    <img src="../assets/filter.png" alt="filter"/>
  </div>
  <div class="htext  w-1/3 flex items-center gap-[10px]"
  >
  <span class="hspan">USERNAME</span>
  <img src="../assets/filter.png" alt="filter"/>
</div>
  <div class="htext w-1/3 flex items-center gap-[10px]">
    <span class="hspan">EMAIL</span>
    <img src="../assets/filter.png" alt="filter"/>
  </div>
  <div class="htext w-1/3 flex items-center gap-[10px]">
    <span class="hspan">PHONE NUMBER</span>
    <img src="../assets/filter.png" alt="filter"/>
  </div>
  <div class="htext w-1/3 flex items-center gap-[10px]">
    <span class="hspan">DATE JOINED</span>
    <img src="../assets/filter.png" alt="filter"/>
  </div>
  <div class="htext w-1/3 flex items-center gap-[10px]">
    <span class="hspan">STATUS</span>
    <img src="../assets/filter.png" alt="filter"/>
  </div>


</div>

<div class="userss">
  <router-link to="/UserDetails">
    <div class="sUser py-[20px] text-hspano flex">

<span class="single w-1/3">Lendsqr</span>
<span class="single w-1/3">Adedeji</span>
<span class="single w-1/3">Adedeji@gmail.com</span>
<span class="single w-1/3">09078329726</span>
<span class="single w-1/3"> May 15,2020 10:00am</span>
<div class="w-1/3">
 <span class="w-[80px] h-[30px] rounded-2xl bg-first p-[5px] text-inactive flex items-center justify-center text-[14px]">inactive</span>
</div>
<img src="../assets/Vector-2.png" alt="" class="h-[14.44px] w-[3.33px]"/>
 </div>
  </router-link>
 
<!-- --- -->
<div class="sUser py-[20px] text-hspano flex">
 <span class="single">

 </span>
 <span class="single w-1/3">Lendsqr</span>
 <span class="single w-1/3">Adedeji</span>
 <span class="single w-1/3">Adedeji@gmail.com</span>
 <span class="single w-1/3">09078329726</span>
 <span class="single w-1/3"> May 15,2020 10:00am</span>
 <div class="w-1/3">
  <span class="w-[80px] h-[30px] rounded-2xl bg-second p-[5px]  text-pending flex items-center justify-center text-[14px]">Pending</span>
 </div>
 <img src="../assets/Vector-2.png" alt="" class="h-[14.44px] w-[3.33px]"/>
  </div>
  <!-- -- -->
  <div class="sUser py-[20px] text-hspano flex">
 
 <span class="single w-1/3">Lendsqr</span>
 <span class="single w-1/3">Adedeji</span>
 <span class="single w-1/3">Adedeji@gmail.com</span>
 <span class="single w-1/3">09078329726</span>
 <span class="single w-1/3"> May 15,2020 10:00am</span>
 <div class="w-1/3">
  <span class="w-[80px] h-[30px] rounded-2xl bg-fourth text-active p-[5px] flex items-center justify-center text-[14px]">Active</span>
 </div>
 <img src="../assets/Vector-2.png" alt="" class="h-[14.44px] w-[3.33px]"/>
  </div>
  <!-- -- -->
  <div class="sUser py-[20px] text-hspano flex">
 <span class="single">

 </span>
 <span class="single w-1/3">Lendsqr</span>
 <span class="single w-1/3">Adedeji</span>
 <span class="single w-1/3">Adedeji@gmail.com</span>
 <span class="single w-1/3">09078329726</span>
 <span class="single w-1/3"> May 15,2020 10:00am</span>
 <div class="w-1/3">
  <span class="w-[87px] h-[30px] rounded-2xl bg-third p-[5px] flex   text-blacklist items-center justify-center text-[14px]">Blacklisted</span>
 </div>
 <img src="../assets/Vector-2.png" alt="" class="h-[14.44px] w-[3.33px]"/>
  </div>
  
</div>

  



 









</div>



  </div>
</template>

<script setup>

</script>

<style scoped>
.card{
width:240px;
height:160px;

}
.hspan{
  font-weight:600;
  font-size:12px ;
  color:rgba(84, 95, 125, 1);
}
.single{
  font-weight: 400;
  font-size: 14px;
}
</style>