Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
});


Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot><br></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },
});

Vue.component('m-temp', {
    template: `
        <div class="modal is-active">
          <div class="modal-background" @click="$emit('close')"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title"><slot name="mtitle"></slot></p>
              <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
              <slot></slot>
            </section>
            <footer class="modal-card-foot">
            </footer>           
          </div>
        </div>
    `

});

new Vue({
    el: '#root',
    data: {
        showModal: false,
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        showModal5: false
    }
});