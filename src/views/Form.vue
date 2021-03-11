<template>
  <div>
    <div class="pb-10">
      <h1 class="font-bold text-xl tracking-tight">Basic form</h1>
    </div>
    <div class="flex items-center justify-center">
      <div class="shadow-xl pt-20 pb-10 px-20">
        <form action="">
          <div class="mb-10">
            <div class="relative border-b focus-within:border-blue-700">
              <input
                v-model="signup.username"
                type="text"
                name="username"
                placeholder=" "
                class="textInput block w-full appearance-none focus:outline-none bg-transparent text-sm"
              />
              <label for="username" class="absolute top-0 -z-1 duration-300 origin-0"
                >Username</label
              >
            </div>
          </div>
          <div class="flex mb-10">
            <div class="relative border-b focus-within:border-blue-700 mr-6">
              <input
                v-model="signup.telephone"
                type="tel"
                name="Telephone"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none bg-transparent text-sm"
              />
              <label for="Telephone" class="absolute top-0 -z-1 duration-300 origin-0"
                >Telephone</label
              >
            </div>
            <div class="relative border-b focus-within:border-blue-700">
              <input
                v-model="signup.email"
                type="email"
                name="email"
                placeholder=" "
                class="block w-full appearance-none focus:outline-none bg-transparent text-sm"
              />
              <label for="email" class="absolute top-0 -z-1 duration-300 origin-0">Email</label>
            </div>
          </div>
          <div class="mb-10 flex items-center relative border-b text-sm">
            <select
              v-model="signup.class"
              class="w-full appearance-none focus:outline-none bg-transparent"
            >
              <option value="" disabled selected>Select your class hours</option>
              <option value="Day">Day classes (8am - 4pm)</option>
              <option value="Evening">Evening classes (4pm - 9pm)</option>
              <option value="Weekends">Weekend classes (8am - 4pm, Sat and Sun)</option>
            </select>
            <div
              class="flex items-center absolute inset-y-0 right-0 pointer-events-none text-gray-900"
            >
              <base-icon name="dropdown" iconClass="w-3 h-3 fill-current" />
            </div>
          </div>
          <div class="mb-10 learningPath">
            <p class="mb-6">Developer Learning Path</p>
            <label for="backend" class="container block mb-4 relative pl-8 cursor-pointer text-sm">
              Backend
              <input
                v-model="signup.path.backend"
                id="backend"
                type="checkbox"
                name="backend"
                value="backend"
                class="absolute w-0 h-0 opacity-0"
              />
              <span
                class="checkmark w-5 h-5 absolute top-0 left-0 border border-gray-900 cursor-pointer"
              ></span>
            </label>
            <label for="frontend" class="container block mb-4 relative pl-8 cursor-pointer text-sm">
              Frontend
              <input
                v-model="signup.path.frontend"
                id="frontend"
                type="checkbox"
                name="backend"
                value="backend"
                class="absolute w-0 h-0 opacity-0"
              />
              <span
                class="checkmark w-5 h-5 absolute top-0 left-0 border border-gray-900 cursor-pointer"
              ></span>
            </label>
          </div>
          <div class="difficultyLevel">
            <p class="mb-6">Difficulty Level</p>
            <label for="beginner" class="block relative cursor-pointer pl-8 text-sm mb-4">
              Beginner
              <input
                v-model="signup.difficulty"
                type="radio"
                name="difficulty"
                id="beginner"
                value="beginner"
                class="absolute w-5 h-5 opacity-0"
              />
              <span
                class="radio w-5 h-5 absolute top-0 left-0 cursor-pointer border border-gray-900 rounded-full"
              ></span>
            </label>
            <label for="professional" class="block relative cursor-pointer pl-8 text-sm mb-4">
              Professional
              <input
                v-model="signup.difficulty"
                type="radio"
                name="difficulty"
                id="professional"
                value="professional"
                class="absolute w-5 h-5 opacity-0"
              />
              <span
                class="radio w-5 h-5 absolute top-0 left-0 cursor-pointer border border-gray-900 rounded-full"
              ></span>
            </label>
            <label for="expert" class="block relative cursor-pointer pl-8 text-sm mb-4">
              Expert
              <input
                v-model="signup.difficulty"
                type="radio"
                name="difficulty"
                id="expert"
                value="expert"
                class="absolute w-5 h-5 opacity-0"
              />
              <span
                class="radio w-5 h-5 absolute top-0 left-0 cursor-pointer border border-gray-900 rounded-full"
              ></span>
            </label>
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
        difficulty: '',
      },
      classes: ['day', 'evening', 'weekend'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
