<template>
    <div
        class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
        <div
            class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
        >
            <AddCheck />
            <div>
                <div v-for="item in dailyChecks" class="flex mb-4 items-center">
                    <p
                        class="w-full text-grey-darkest"
                        :class="[item.status ? 'line-through' : '' ]"
                    >
                        {{ item.title }}
                    </p>
                    <button
                        @click="handleUpdateCheck(item)"
                        class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                    >
                        Done
                    </button>
                    <button
                        @click="handleDeletecheck(item.id)"
                        class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useDailyChecks from "../../composables/dailyChecks";
import AddCheck from "./AddCheck.vue";
import { onMounted } from "vue";

const { dailyChecks, getdailyChecks, destroyDailycheck, updateDailyCheck } =
    useDailyChecks();

const handleDeletecheck = async (id) => {
    if (!window.confirm("Sure?")) {
        return;
    }
    await destroyDailycheck(id);
    await getdailyChecks();
};

const handleUpdateCheck = async (check) => {
    await updateDailyCheck({...check, status: check.status === 0 ? 1 : 0});
};

onMounted(getdailyChecks);
</script>
