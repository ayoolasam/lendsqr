<template>
  <div class="bg-bground p-12 font-work-sans flex flex-col gap-[40px]">
    <router-link to="/">
      <div class="flex gap-[10px] items-center">
        <img src="../assets/back.png" alt="back" />
        <span class="font-normal text-[16px]">Back To Users</span>
      </div>
    </router-link>

    <div class="flex justify-between">
      <span class="text-details font-medium text-[24px]">User Details</span>
      <div class="flex gap-[10px]">
        <div
          class="flex items-center justify-center border-[1px] w-[170px] h-[40px] font-semibold text-[14px] rounded-md border-redo text-redo"
        >
          BLACKLIST USER
        </div>
        <div
          class="flex items-center justify-center border-[1px] w-[170px] h-[40px] font-semibold text-[14px] rounded-md border-lems text-lems"
        >
          ACTIVATE USER
        </div>
      </div>
    </div>
    <div class="3 bg-white flex flex-col gap-12 px-4 pt-4 shadow-md">
      <div class="flex gap-[30px] items-center">
        <div class="">
          <img
            src="../assets/avatar-1.png"
            class="w-[100px] h-[100px]"
            alt="avatar"
          />
        </div>
        <div class="text-center">
          <p class="font-medium text-[22px] text-select">Grace Effiom</p>
          <p class="font-normal text-[14px] text-details">LSWWEIGNGN</p>
        </div>
        <div
          class="h-[100px] px-[30px] flex flex-col gap-[2px] justify-center border-l-[1px] border-r-[1px] border-bder"
        >
          <p class="text-[14px] text-details font-medium">Users Tier</p>
          <div class="flex gap-[2px]">
            <img src="../assets/np_star_1.png" alt="" />
            <img src="../assets/np_star_2.png" alt="" />
            <img src="../assets/np_star_2.png" alt="" />
          </div>
        </div>
        <div class="">
          <p class="font-medium text-[22px] text-select">N200,0000.00</p>
          <p class="text-select text-[12px] font-normal">
            9991234578/Providus Bank
          </p>
        </div>
      </div>
      <div class="dynamic flex font-normal text-[16px] justify-around">
        <span
          @click="changeTab(GeneralDetails)"
          :class="[
            'pb-[10px] cursor-pointer',
            CurrentTab === GeneralDetails ? 'text-lems' : '',
          ]"
          >General Details</span
        >
        <span @click="changeTab(Documents)" class="pb-[10px] cursor-pointer"
          >Documents</span
        >
        <span @click="changeTab(Bank)" class="pb-[10px] cursor-pointer">
          Bank Details</span
        >
        <span @click="changeTab(Loan)" class="pb-[10px] cursor-pointer"
          >Loan</span
        >
        <span @click="changeTab(Savings)" class="pb-[10px] cursor-pointer"
          >Savings</span
        >
        <span class="pb-[10px] cursor-pointer">App and System</span>
      </div>
    </div>
    <keep-alive>
      <component :is="CurrentTab"> </component>
    </keep-alive>
  </div>
</template>

<script setup>
import Bank from "@/components/Bank.vue";
import Documents from "@/components/Documents.vue";
import GeneralDetails from "@/components/GeneralDetails.vue";
import Loan from "@/components/Loan.vue";
import Savings from "@/components/Savings.vue";
import { ref } from "vue";

const CurrentTab = ref(GeneralDetails);

const changeTab = (tab) => {
  CurrentTab.value = tab;
};
</script>

<style lang="scss" scoped></style>
