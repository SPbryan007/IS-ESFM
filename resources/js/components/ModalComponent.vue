<template id="modal-template">
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-button" @click="close">Close</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>


<div id="app">
  <button @click="$refs.modal1.open">Show Modal 1</button>
  <button @click="$refs.modal2.open">Show Modal 2</button>

  <modal v-ref:modal1 v-cloak>
    <h3 slot="header">Modal 1</h3>
    <div slot="body">Click `Continue`!</div>
    <div slot="footer">
      <button class="modal-button" @click="parentHandler">Continue</button>
    </div>
  </modal>

  <modal v-ref:modal2 v-cloak>
    <h3 slot="header">Modal 2</h3>
    <div slot="body">Please click `Close`!</div>
  </modal>
</div>