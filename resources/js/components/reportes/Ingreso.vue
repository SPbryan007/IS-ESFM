<template>
    <div>
        <p class="text-danger">HOLA BROTHER</p>
        <!--<vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="false"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="ingreso"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="letter"
            pdf-orientation="landscape"
            pdf-content-width="800px"
            ref="IngresoToPDF"
        >
            <section slot="pdf-content">
                HELLOW BROTHER
            </section>
        </vue-html2pdf>-->
    </div>
</template>
<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
    name:'ReporteIngreso',
    components: {
        VueHtml2pdf
    },
    data() {

    },
    methods:{
       /* print(){
            this.$refs.IngresoToPDF.generatePdf();
        }*/
    }
}
</script>
