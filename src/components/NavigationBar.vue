<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const authStore = useAuthStore();
const { t } = useI18n();

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center space-x-4">
          <h1 class="text-xl font-bold">Panel Ambiental</h1>
          <div class="hidden md:flex space-x-4">
            <router-link
              to="/dashboard"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-indigo-600': $route.path === '/dashboard' }"
            >
              {{ t('navigation.dashboard') }}
            </router-link>
            <router-link
              to="/calculator"
              class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-indigo-600': $route.path === '/calculator' }"
            >
              {{ t('navigation.calculator') }}
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <button
            @click="handleLogout"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {{ t('navigation.logout') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>