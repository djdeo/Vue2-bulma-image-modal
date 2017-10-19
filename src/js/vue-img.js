Vue.component('image-temp', {
    template: `
        <div class="modal is-active">
          <div class="modal-background" @click="$emit('close')"></div>
          <div class="modal-content">
            <p class="image is-4by3">
              <slot></slot>
            </p>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `
});
new Vue({
    el: '#vuetable',
    data: {
        photos: [
        {link:'src/img/640x480.png',name:'image title 1', showModal: false},
        {link:'src/img/1280x960.png',name:'image title 2', showModal: false},
        {link:'src/img/640x480.png',name:'image title 3', showModal: false},
        {link:'src/img/640x480.png',name:'image title 4', showModal: false},
        {link:'src/img/640x480.png',name:'image title 5', showModal: false},
        {link:'src/img/640x480.png',name:'image title 6', showModal: false},
        {link:'src/img/640x480.png',name:'image title 7', showModal: false},
        {link:'src/img/640x480.png',name:'image title 8', showModal: false}
        ]
    }
});
