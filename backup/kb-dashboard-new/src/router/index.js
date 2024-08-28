import { createRouter, createWebHistory } from 'vue-router'

import RegisterView from '@/views/register/Login.vue'
import RegistrationSuccessView from '@/views/register/RegistrationSuccess.vue'

import OnboardingView from '@/views/onboarding/Onboarding.vue'
import OnboardingStepOneView from '@/views/onboarding/OnboardingStepOne.vue'
import OnboardingStepTwoView from '@/views/onboarding/OnboardingStepTwo.vue'
import OnboardingStepThreeView from '@/views/onboarding/OnboardingStepThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/register/success',
      name: 'Registration Success',
      component: RegistrationSuccessView
    },

    {
      path: '/onboarding',
      name: 'Onboarding',
      component: OnboardingView,
      children:[
        {
          path: 'step-1',
          name: 1,
          component: OnboardingStepOneView,
          id: 1
        },
        {
          path: 'step-2',
          name: 2,
          component: OnboardingStepTwoView
        },
        {
          path: 'step-3',
          name: 3,
          component: OnboardingStepThreeView
        },
      ]
    }
  ]
})

export default router
