<template>
  <div>
    <select ref="select" class="form-control" name="select">
      <slot></slot>
    </select>
  </div>
</template>
<script>
export default {
  name: "select2",
  props: ["options", "value"],
  mounted: function() {
    var vm = this;
    $(this.$refs.select)
      // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger("change")
      // emit event on change.
      .on("change", function() {
        vm.$emit("input", this.value);
      });
  },
  watch: {
    value: function(value) {
      // update value
      $(this.$refs.select)
        .val(value)
        .trigger("change");
    },
    options: function(options) {
      // update options
      $(this.$refs.select)
        .empty()
        .select2({ data: options });
    }
  },
  destroyed: function() {
    $(this.$refs.select)
      .off()
      .select2("destroy");
  }
};
</script>