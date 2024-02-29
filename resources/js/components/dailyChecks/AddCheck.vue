<template>
    <div class="mb-4">
        <h1 class="text-grey-darkest">Daily check</h1>
        <div v-if="errors">
            <div
                v-for="(v, k) in errors"
                :key="k"
                class="text-red-600 rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
            >
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>
        <form class="flex mt-4" @submit.prevent="handleEvent">
            <input
                v-model="check.title"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add check item"
            />
            <button
                type="submit"
                class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-600"
            >
                Add
            </button>
        </form>
    </div>
</template>

<script setup>
import useDailyChecks from "../../composables/dailyChecks";
import { reactive } from "vue";

const emit = defineEmits(['Stored'])

const check = reactive({
    title: "",
    status: 0,
});

const { errors } = useDailyChecks();
const handleEvent = () => {
  console.log('HOLA',{...check})
  emit('Stored', {...check})
  check.title = ''
};
</script>
