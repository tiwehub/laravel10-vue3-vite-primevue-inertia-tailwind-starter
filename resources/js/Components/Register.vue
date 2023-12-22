<script setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const value = ref(null);
const visible = ref(false);

export { visible };

const register = () => {
    // Логика регистрации
    visible.value = false;
};
</script>

<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="Регистрация"
        :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <div class="flex gap-2 flex-col">
            <label for="username">Логин</label>
            <InputText
                id="username"
                v-model="value"
                aria-describedby="username-register"
            />
            <label for="password">Пароль</label>
            <InputText
                id="password"
                v-model="value"
                aria-describedby="password-register"
            />
            <label for="password-repeat-register">Повторите пароль</label>
            <InputText
                id="password-repeat-register"
                v-model="value"
                aria-describedby="password-repeat-register"
            />
        </div>
        <template #footer>
            <Button
                label="Зарегистрироваться"
                icon="pi pi-check"
                @click="register"
                autofocus
            />
        </template>
    </Dialog>
</template>
