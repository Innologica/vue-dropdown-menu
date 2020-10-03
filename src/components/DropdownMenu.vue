<template>
    <div
            class="dropdown"
            :class="{ dropup: top }"
            @mouseleave="mouseLeave"
            @mouseover="mouseOver"
            @mouseenter="mouseEnter"
            @click="toggleMenu"
    >
        <slot></slot>
        <transition :name="transition">
            <div
                    v-show="value"
                    class="dropdown-menu show"
                    :class="{ 'dropdown-menu-right': right}"
                    :style="styles"
                    @mouseleave="startTimer"
                    @mouseenter="stopTimer"
                    @click.stop
                    ref="dropdown"
            >
                <slot name="dropdown"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      right: Boolean,
      hover: Boolean,
      hover_time: {
        type: Number,
        default: 100
      },
      hover_timeout: {
        type: Number,
        default: 500
      },
      styles: {
        type: Object,
        default () {
          return {}
        }
      },
      interactive: { //whether should stay open until clicked outside
        type: Boolean,
        default: false,
      },
      transition: {
        type: String,
        default: '',
      },
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        hovering: false,
        top: false,
      }
    },
    destroyed () {
      document.body.removeEventListener('click', this.closeMenu)
    },
    methods: {
      mouseEnter () {
        // console.log('mouseEnter', $event.target)
        this.stopTimer()
        if (this.hover && this.hover_time > 0 && !this.value) {
          // console.log('start open timer', this.hover_time)
          this.hoverOpenTimer = setTimeout(() => {
            this.$emit('input', true)
            //disable for a moment
            this.hovering = true
            setTimeout(() => {
              this.hovering = false
            }, this.hover_timeout)
          }, this.hover_time)
        }

        if (this.hover && !this.value && this.hover_time === 0) {
          this.hovering = true
          setTimeout(() => {
            this.hovering = false
          }, this.hover_timeout)
          this.$emit('input', true)
        }

      },
      mouseLeave () {
        // console.log('mouseLeave', $event.target)
        if (!this.hoverTimer) { //left the link and no time active
          this.startTimer()
        }

        if (this.hover_time > 0 && this.hover) {
          // console.log('clear hover timer')
          clearTimeout(this.hoverOpenTimer)
        }
      },
      mouseOver () {
        this.stopTimer()
        // console.log('mouseOver')
      },
      closeMenu ($event) {
        if (!$event || !this.$el.contains($event.target)) {
          if (this.value && this.closeOnClickOutside) {
            this.$emit('input', false)
          }
        }
      },
      toggleMenu () {
        if (this.hovering)
          return
        if (this.value && this.hover)
          return
        this.$emit('input', !this.value)
      },
      stopTimer () {
        // console.log('stop timer')
        clearTimeout(this.hoverTimer)
        this.hoverTimer = null
      },
      startTimer () {
        // console.log('start timer')
        if (!this.interactive)
          this.hoverTimer = setTimeout(this.closeMenu, this.hover_timeout)
      },
    },
    watch: {
      value (v) {
        if (v) {
          let vm = this
          this.top = false
          this.$nextTick(() => {
              let rect = vm.$refs.dropdown.getBoundingClientRect()
              let window_height = (window.innerHeight || document.documentElement.clientHeight)
              this.top = (rect.bottom > window_height) && (rect.top >= rect.height)
            }
          )
        }
      },
      interactive: {
        handler (value) {
          if(typeof document === "object")
            value ? document.body.addEventListener('click', this.closeMenu) : document.body.removeEventListener('click', this.closeMenu)
        },
        immediate: true
      }
    }
  }
</script>