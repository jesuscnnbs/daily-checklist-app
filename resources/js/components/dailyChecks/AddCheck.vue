<template>
    <div class="mb-4">
        <h1 class="text-grey-darkest">Daily check</h1>
        <div v-if="errors">
            <div
                v-for="(v, k) in errors"
                :key="k"
                class="text-rose-950 rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
            >
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>
        <form class="flex mt-4" @submit.prevent="handleStore">
            <input
                v-model="check.title"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add check item"
            />
            <button
                @click="handleStore"
                class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            >
                Add
            </button>
        </form>
    </div>
</template>

<script setup>
import useDailyChecks from "../../composables/dailyChecks";
import { reactive } from "vue";

const check = reactive({
    title: "",
    status: false,
});

const { errors, storeDailyCheck } = useDailyChecks();
const handleStore = async () => {
    await storeDailyCheck({ ...check });
};
</script>
