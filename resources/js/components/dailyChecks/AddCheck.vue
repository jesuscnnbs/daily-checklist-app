<template>
  <div class="mb-4">
                <h1 class="text-grey-darkest">Todo List</h1>
                <div class="flex mt-4">
                    <input
                        v-model="check"
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
                </div>
            </div>
</template>

<script setup>
import useDailyChecks from '../../composables/dailyChecks';
const check = defineModel('');

const { storeDailyCheck } = useDailyChecks();
const handleStore = async (_event) => {
  const dailyCheck = {
    title: check.value,
    status: false,
    day_date: new Date()
  }
  await storeDailyCheck(dailyCheck)
}
</script>