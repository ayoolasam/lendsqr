<template>
  <nav
    class="Navbar justify-between p-[20px] px-[40px] shadow-md flex items-center"
  >
    <div class="search flex items-center w-[400px] h-[40px]">
      <input
        type="text"
        placeholder="Search Anything"
        class="font-work-sans placeholder:font-work-sans h-full w-[344px] focus:outline-none border-[1px] border-bordercol placeholder:font-normal placeholder:text-[14px] p-[5px] rounded-tl-[8px] rounded-bl-[8px]"
      />
      <div
        class="glass h-full bg-lems w-[56px] flex items-center justify-center rounded-tr-[8px] rounded-br-[8px]"
      >
        <img src="../assets/vector.png" alt="magnifying glass" />
      </div>
    </div>

    <div class="profile flex items-center gap-[10px]">
      <a href="#" class="font-roboto text-details font-normal text-[16px]"
        >Docx</a
      >

      <div class="user flex items-center gap-[13px]">
        <img
          src="../assets/np_notification.png"
          class="h-[22.74px] w-[19.67px]"
          alt="notification"
        />
        <img src="../assets/avatar.png" alt="user" />
        <div
          class="name font-work-sans text-[16px] flex items-center gap-[8px] font-medium text-details"
        >
          <span>Adedeji</span>
          <img src="../assets/vector-1.png" alt="vector" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>


</script>

<style scoped>
</style>
