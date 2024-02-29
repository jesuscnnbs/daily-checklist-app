import {ref} from 'vue'
import axios from 'axios'

export default function useDailyChecks() {
  const dailyChecks = ref([])
  const check = ref({})

  const errors = ref('')

  const getdailyChecks = async () => {
    let res = await axios.get('/api/daily-check')
    dailyChecks.value = res.data.data
  }

  const storeDailyCheck = async (data) => {
    errors.value=''
    try {
      await axios.post('/api/daily-check', data)
      await router.push({name: 'daily.checks'})  
    } catch (e) {
      if(e.response.status === 422) {
        for (const key in e.response.data.errors) {
          errors.value = e.response.data.errors
        }
      }
    }
  }

  const updateDailyCheck = async (id) => {
    errors.value = ''
    try {
      await axios.patch(`/api/daily-check/${id}`, check.value)
      await router.push({name: 'daily.checks'})
    } catch (e) {
      if(e.response.status === 422) {
        for (const key in e.response.data.errors) {
          errors.value = e.response.data.errors
        }
      }
    }
  }

  return { 
    errors,
    check,
    dailyChecks,
    getdailyChecks,
    storeDailyCheck,
    updateDailyCheck
  }
}