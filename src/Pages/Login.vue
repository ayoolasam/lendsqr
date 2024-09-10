<template>
  <div class="Login bg-background h-screen flex font-work-sans">
<div class="left flex-1 flex  relative items-center justify-center">
  <div class="logo flex w-[173.76px] h-[36px] absolute top-[106px] left-[97px]">

    <img src="../assets/Group.jpg" class="" alt="Logo"/>
  </div>

<div class="image w-[600px] h-[337.57px]">
<img src="../assets/pablo-sign-in 1.jpg" alt="image"/>
</div>
</div>


<div class="right flex-1 flex items-center justify-center">
<div class="forms flex flex-col gap-[20px]  ">
<div class="writings flex flex-col items-start mb-[50px]">
  <p class="font-bold text-welcome text-[40px] leading-[54.64px] tracking-[4%] font-work-sans">Welcome!</p>
  <p class="font-normal text-[20px] text-details">Enter Details to Login.</p>
</div>

  <form class="form flex flex-col gap-4">
    <input placeholder="Email"  class="rounded-[5px] placeholder:text-[14px] px-[10px] w-[447px] h-[50px] focus:outline-none border-[2px] border-bColor" type="text"/>
    <div class="incontainer relative">
      <input placeholder="Password"  class="rounded-[5px] placeholder:text-[14px] px-[10px] w-[447px] h-[50px] focus:outline-none border-[2px] border-bColor" type="password"/>
      <span class="text-lems absolute top-[16px] font-semibold right-[20px]">SHOW</span>
    </div>

    <div class="forgot">
   <p class="uppercase font-semibold text-[12px] text-lems tracking-[10%] leading-[16.39px]">Forgot Password?</p>
    </div>
<div class="button flex bg-blue-300 items-center justify-center">
  <button class="  w-[447px] h-[48px] bg-lems text-white uppercase rounded-[8px]">Log in</button>
</div>
  </form>


</div>
</div>



  </div>
</template>

<script setup>

</script>

<style scoped>

</style>