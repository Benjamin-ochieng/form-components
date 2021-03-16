<template>
  <div>
    <div class="pb-10">
      <h1 class="font-bold text-xl tracking-tight">Basic form</h1>
    </div>
    <div class="flex items-center justify-center">
      <div class="shadow-xl pt-20 pb-10 px-20">
        <form action="">
          <div class="mb-16">
            <base-input v-model="signup.username" label="Username" type="text" />
          </div>
          <div class="flex mb-16">
            <base-input
              v-model="signup.telephone"
              label="Telephone"
              type="tel"
              class="block w-full appearance-none focus:outline-none bg-transparent mr-6"
            />
            <base-input
              v-model="signup.email"
              label="Email"
              type="email"
              class="block w-full appearance-none focus:outline-none bg-transparent"
            />
          </div>
          <div class="mb-16">
            <base-select label="Class hours" :options="classes" v-model="signup.class" />
          </div>
          <div class="mb-16 learningPath">
            <p class="mb-6">Developer Learning Path</p>
            <base-check label="backend" v-model="signup.path.backend" class="block mb-4" />
            <base-check label="frontend" v-model="signup.path.frontend" class="block mb-4" />
          </div>
          <div class="difficultyLevel mb-16">
            <p class="mb-6">Difficulty Level</p>
            <base-radio-group
              :radios="difficultyOptions"
              name="difficulty"
              v-model="signup.difficulty"
            />
            <!-- <base-radio
              label="beginner"
              value="beginner"
              name="difficulty"
              v-model="signup.difficulty"
            />
            <base-radio
              label="professional"
              value="professional"
              name="difficulty"
              v-model="signup.difficulty"
            />
            <base-radio
              label="expert"
              value="expert"
              name="difficulty"
              v-model="signup.difficulty"
            /> -->
          </div>
          <div class="flex items-center justify-center py-16">
            <button
              type="submit"
              class="py-3.5 bg-blue-700 rounded-sm text-white text-sm font-bold px-36"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signup: {
        username: '',
        telephone: '',
        email: '',
        class: '',
        path: {
          backend: false,
          frontend: false,
        },
        difficulty: 'beginner',
      },
      classes: ['Day', 'Evening', 'Weekend'],
      difficultyOptions: [
        { label: 'beginner', value: 'beginner' },
        { label: 'professional', value: 'professional' },
        { label: 'expert', value: 'expert' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
