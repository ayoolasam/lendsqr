<template>
  <div
    :class="[
      'SideBar flex font-work-sans h-[100vh]  flex-col gap-[40px] duration-300 relative py-8 shadow-[0px_4px_10px_rgba(0,0,0,0.25)]',
      open ? 'w-[239px]' : 'w-20',
    ]"
  >
    <div class="flex items-center py-4">
      <div
        @click="toggle"
        :class="[
          'rounded-full  w-[40px] h-[40px] flex items-center duration-1000  justify-center bg-lems absolute right-[5px] top-[20px]',
          !open ? 'left-[20px] ' : '',
        ]"
      >
        <i
          :class="[
            'fa-solid text-white fa-angles-right text-select text-[22px]',
            open ? 'rotate-[-180deg]' : '',
          ]"
        ></i>
      </div>
      <div
        :class="['logo w-[144.8px] px-[20px] h-[30px]', !open ? 'scale-0' : '']"
      >
        <img src="../assets/Group.jpg" alt="logo" />
      </div>
    </div>

    <div class="items w-full flex flex-col gap-[30px]">
      <div class="switch flex gap-[5px] items-center p-[20px]">
        <img src="../assets/icons/briefcase.png" class="icon" alt="icon" />

        <select
          :class="[
            'text-select font-normal text-[16px]',
            ,
            !open ? 'scale-0' : '',
          ]"
        >
          <option>Switch Organization</option>
        </select>
      </div>
      <router-link to="/">
        <div
          class="dashboard flex gap-[10px] items-center font-normal text-[16px] p-[20px] text-details"
        >
          <img src="../assets/home.png" class="icon" alt="home" />
          <p :class="[!open ? 'scale-0' : '']">DashBoard</p>
        </div>
      </router-link>

      <ul class="customers gap-[10px] flex flex-col">
        <div class="flex items-center w-full h-full p-[20px] gap-[5px]">
          <p @click="drop" :class="['head', !open ? 'hidden' : '']">
            CUSTOMERS
          </p>
          <img src="../assets/icons/vector-1.png" alt="vector" />
        </div>
        <div v-if="dropDown && open" class="">
          <li>
            <img src="../assets/users.png" class="icon" alt="home" />
            <span>Users</span>
          </li>
          <li>
            <img
              src="../assets/users-1.png"
              class="icon"
              alt="home"
            />Guarantors
          </li>
          <li>
            <img src="../assets/sack-1.png" class="icon" alt="home" />Loans
          </li>
          <li>
            <img
              src="../assets/handshake-regular-1.png"
              class="icon"
              alt="home"
            />Decison Models
          </li>
          <li>
            <img
              src="../assets/piggy-bank-1.png"
              class="icon"
              alt="home"
            />Savings
          </li>
          <li>
            <img src="../assets/group-104.png" class="icon" alt="home" />Loan
            Requests
          </li>
          <li>
            <img
              src="../assets/user-check-1.png"
              class="icon"
              alt="home"
            />WhiteList
          </li>
          <li>
            <img src="../assets/users.png" class="icon" alt="home" />Karma
          </li>
        </div>
      </ul>

      <ul class="businesses gap-[10px] flex flex-col">
        <div class="flex items-center w-full h-full p-[20px] gap-[5px]">
          <p @click="drop" :class="['head', !open ? 'hidden' : '']">
            BUSINESSES
          </p>
          <img src="../assets/icons/vector-1.png" alt="vector" />
        </div>
        <div v-if="dropDown && open" class="">
          <li>
            <img
              src="../assets/icons/briefcase.png"
              class="icon"
              alt="home"
            />Organization
          </li>
          <li>
            <img src="../assets/Groupe-104.png" class="icon" alt="home" />Loan
            Products
          </li>
          <li>
            <img src="../assets/np_bank.png" class="icon" alt="home" />Savings
            Products
          </li>
          <li>
            <img src="../assets/coins-solid.png" class="icon" alt="home" />Fees
            and Charges
          </li>
          <li>
            <img src="../assets/icon.png" class="icon" alt="home" />Transactions
          </li>
          <li>
            <img src="../assets/galaxy.png" class="icon" alt="home" />Services
          </li>
          <li>
            <img src="../assets/user-cog.png" class="icon" alt="home" />Service
            Amount
          </li>
          <li>
            <img
              src="../assets/scroll.png"
              class="icon"
              alt="home"
            />Settlements
          </li>
          <li>
            <img src="../assets/chart-bar.png" class="icon" alt="home" />Reports
          </li>
        </div>
      </ul>

      <ul class="settings gap-[10px] flex flex-col">
        <div class="flex items-center w-full h-full p-[20px] gap-[5px]">
          <p @click="drop" :class="['head', !open ? 'hidden' : '']">SETTINGS</p>
          <img src="../assets/icons/vector-1.png" alt="vector" />
        </div>
        <div v-if="dropDown && open" class="">
          <li>
            <img src="../assets/sliders-h.png" class="icon" alt="home" />Fees
            and Pricing
          </li>
          <li>
            <img
              src="../assets/badge-percent.png"
              class="icon"
              alt="home"
            />Preferences
          </li>
          <li>
            <img
              src="../assets/clipboard-list.png"
              class="icon"
              alt="home"
            />Audit Logs
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
const dropDown = ref(false);

const toggle = () => {
  open.value = !open.value;
};

const drop = () => {
  dropDown.value = !dropDown.value;
};
</script>

<style scoped>
.icon {
  height: 12.8px;
  width: 16px;
}
.head {
  width: 75px;
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.08px;
  color: rgba(84, 95, 125, 1);
}
ul {
  width: 100%;
}
li {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  padding: 20px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 18.77px;
  color: rgba(33, 63, 125, 1);
}
li:hover {
  border-left: 4px solid rgba(57, 205, 204, 1);
  background-color: rgb(243, 252, 252);
}
.items{
  overflow-y: scroll;
}

.items::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}
</style>
