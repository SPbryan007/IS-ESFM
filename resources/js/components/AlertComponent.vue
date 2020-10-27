<template>
    <div class="center">
        <vs-button dark flat @click="active=true">
            Open Alert 10s
        </vs-button>
        <vs-alert dark :progress="progress" v-model="active">
            <template #title>
                Vuesax Framework
            </template>
            {{ message_error }}
        </vs-alert>
    </div>
</template>
<script>
export default {
    props : {
        message_error : String,
        show : boolean
    },
    data:() => ({
        active: false,
        time: 6000,
        progress: 0
    }),
    watch: {
        active(val) {
            if(val) {
                var interval = setInterval(() => {
                    this.progress++
                }, this.time / 100);

                setTimeout(() => {
                    this.active = false
                    clearInterval(interval)
                    this.progress = 0
                }, this.time);
            }
        }
    }
}
</script>
