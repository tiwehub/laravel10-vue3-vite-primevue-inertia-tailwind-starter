<script setup>
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import ContextMenu from "primevue/contextmenu";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

const items = ref([
    {
        label: "Одежда",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }],
    },
    {
        label: "Обувь",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }],
    },
    {
        label: "Аксессуары",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }],
    },
    {
        label: "Бренды",
        items: [{ label: "Nike" }, { label: "Adidas" }, { label: "Gucci" }],
    },
    { label: "Расчет стоимости" },
    {
        label: "Информация",
        items: [
            { label: "Контакты" },
            { label: "О нас" },
            { label: "Доставка" },
        ],
    },
]);

const value = ref(null);

const authmodal = ref(false);

const contextMenuRef = ref(null);

const openContextMenu = (event) => {
    contextMenuRef.value.show(event);
};
</script>

<template>
    <Head title="Home" />
    <header @contextmenu.prevent="openContextMenu">
        <div
            class="max-[1280px]:container 2xl:container mx-auto flex sm:justify-between items-center p-4"
        >
            <Link class="order-2 sm:order-none" href="/"
                ><img src="@/../assets/logo.svg" alt="Логотип"
            /></Link>
            <Menubar
                class="bg-transparent border-0 order-1 sm:order-none"
                id="header-nav"
                :model="items"
                breakpoint="1280px"
            >
                <template #item="{ item, props, hasSubmenu, root }">
                    <a
                        v-ripple
                        class="flex align-items-center"
                        v-bind="props.action"
                    >
                        <span :class="['', item.icon]" />
                        <span class="">{{ item.label }}</span>
                        <span
                            v-if="item.shortcut"
                            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
                            >{{ item.shortcut }}</span
                        >
                        <i
                            v-if="hasSubmenu"
                            :class="[
                                'pi pi-angle-down text-primary',
                                {
                                    'pi-angle-down ml-2': root,
                                    'pi-angle-right ml-auto': !root,
                                },
                            ]"
                        ></i>
                    </a>
                </template>
            </Menubar>
            <div
                class="buttons flex items-center ml-auto 2xl:ml-0 order-3 sm:order-none"
            >
                <Button
                    icon="pi pi-search"
                    class="text-white"
                    severity="secondary"
                    text
                    rounded
                    aria-label="Search"
                />
                <Button
                    icon="pi pi-star"
                    class="text-white"
                    severity="secondary"
                    text
                    rounded
                    aria-label="Favourite"
                />
                <Button
                    icon="pi pi-user"
                    class="text-white"
                    severity="secondary"
                    text
                    rounded
                    aria-label="User"
                    @click="authmodal = true"
                />
                <Button
                    icon="pi pi-shopping-bag"
                    class="text-white px-2"
                    severity="secondary"
                    text
                    rounded
                    label="11 899 ₽"
                    aria-label="Shopping"
                    id="shopping"
                    badge="8"
                    badgeSeverity="info"
                />
            </div>
        </div>
        <ContextMenu :model="items" ref="contextMenuRef"></ContextMenu>
    </header>
    <Dialog
        v-model:visible="authmodal"
        modal
        header="Header"
        :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <template #header>
            <div
                class="inline-flex align-items-center justify-content-center gap-2"
            >
                <span class="font-bold white-space-nowrap">Регистрация</span>
            </div>
        </template>
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
                @click="authmodal = false"
                autofocus
            />
        </template>
    </Dialog>
</template>
